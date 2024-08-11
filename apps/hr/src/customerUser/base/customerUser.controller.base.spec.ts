import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CustomerUserController } from "../customerUser.controller";
import { CustomerUserService } from "../customerUser.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accessFailedCount: 42,
  createdAt: new Date(),
  email: "exampleEmail",
  emailConfirmed: "true",
  entityVersion: "exampleEntityVersion",
  id: "exampleId",
  isActive: "true",
  isExternal: "true",
  lastPasswordChangeTime: new Date(),
  lockoutEnabled: "true",
  lockoutEnd: new Date(),
  name: "exampleName",
  normalizedEmail: "exampleNormalizedEmail",
  normalizedUserName: "exampleNormalizedUserName",
  note: "exampleNote",
  passwordHash: "examplePasswordHash",
  phoneNumber: "examplePhoneNumber",
  phoneNumberConfirmed: "true",
  securityStamp: "exampleSecurityStamp",
  shouldChangePasswordOnNextLogin: "true",
  surname: "exampleSurname",
  twoFactorEnabled: "true",
  updatedAt: new Date(),
  userName: "exampleUserName",
};
const CREATE_RESULT = {
  accessFailedCount: 42,
  createdAt: new Date(),
  email: "exampleEmail",
  emailConfirmed: "true",
  entityVersion: "exampleEntityVersion",
  id: "exampleId",
  isActive: "true",
  isExternal: "true",
  lastPasswordChangeTime: new Date(),
  lockoutEnabled: "true",
  lockoutEnd: new Date(),
  name: "exampleName",
  normalizedEmail: "exampleNormalizedEmail",
  normalizedUserName: "exampleNormalizedUserName",
  note: "exampleNote",
  passwordHash: "examplePasswordHash",
  phoneNumber: "examplePhoneNumber",
  phoneNumberConfirmed: "true",
  securityStamp: "exampleSecurityStamp",
  shouldChangePasswordOnNextLogin: "true",
  surname: "exampleSurname",
  twoFactorEnabled: "true",
  updatedAt: new Date(),
  userName: "exampleUserName",
};
const FIND_MANY_RESULT = [
  {
    accessFailedCount: 42,
    createdAt: new Date(),
    email: "exampleEmail",
    emailConfirmed: "true",
    entityVersion: "exampleEntityVersion",
    id: "exampleId",
    isActive: "true",
    isExternal: "true",
    lastPasswordChangeTime: new Date(),
    lockoutEnabled: "true",
    lockoutEnd: new Date(),
    name: "exampleName",
    normalizedEmail: "exampleNormalizedEmail",
    normalizedUserName: "exampleNormalizedUserName",
    note: "exampleNote",
    passwordHash: "examplePasswordHash",
    phoneNumber: "examplePhoneNumber",
    phoneNumberConfirmed: "true",
    securityStamp: "exampleSecurityStamp",
    shouldChangePasswordOnNextLogin: "true",
    surname: "exampleSurname",
    twoFactorEnabled: "true",
    updatedAt: new Date(),
    userName: "exampleUserName",
  },
];
const FIND_ONE_RESULT = {
  accessFailedCount: 42,
  createdAt: new Date(),
  email: "exampleEmail",
  emailConfirmed: "true",
  entityVersion: "exampleEntityVersion",
  id: "exampleId",
  isActive: "true",
  isExternal: "true",
  lastPasswordChangeTime: new Date(),
  lockoutEnabled: "true",
  lockoutEnd: new Date(),
  name: "exampleName",
  normalizedEmail: "exampleNormalizedEmail",
  normalizedUserName: "exampleNormalizedUserName",
  note: "exampleNote",
  passwordHash: "examplePasswordHash",
  phoneNumber: "examplePhoneNumber",
  phoneNumberConfirmed: "true",
  securityStamp: "exampleSecurityStamp",
  shouldChangePasswordOnNextLogin: "true",
  surname: "exampleSurname",
  twoFactorEnabled: "true",
  updatedAt: new Date(),
  userName: "exampleUserName",
};

const service = {
  createCustomerUser() {
    return CREATE_RESULT;
  },
  customerUsers: () => FIND_MANY_RESULT,
  customerUser: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CustomerUser", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomerUserService,
          useValue: service,
        },
      ],
      controllers: [CustomerUserController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /customerUsers", async () => {
    await request(app.getHttpServer())
      .post("/customerUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastPasswordChangeTime:
          CREATE_RESULT.lastPasswordChangeTime.toISOString(),
        lockoutEnd: CREATE_RESULT.lockoutEnd.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /customerUsers", async () => {
    await request(app.getHttpServer())
      .get("/customerUsers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastPasswordChangeTime:
            FIND_MANY_RESULT[0].lastPasswordChangeTime.toISOString(),
          lockoutEnd: FIND_MANY_RESULT[0].lockoutEnd.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /customerUsers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerUsers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customerUsers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerUsers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastPasswordChangeTime:
          FIND_ONE_RESULT.lastPasswordChangeTime.toISOString(),
        lockoutEnd: FIND_ONE_RESULT.lockoutEnd.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /customerUsers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customerUsers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastPasswordChangeTime:
          CREATE_RESULT.lastPasswordChangeTime.toISOString(),
        lockoutEnd: CREATE_RESULT.lockoutEnd.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/customerUsers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
