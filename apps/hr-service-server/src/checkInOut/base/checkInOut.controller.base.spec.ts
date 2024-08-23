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
import { CheckInOutController } from "../checkInOut.controller";
import { CheckInOutService } from "../checkInOut.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  checkDate: new Date(),
  checkTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  checkDate: new Date(),
  checkTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    checkDate: new Date(),
    checkTime: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    isActive: "true",
    isAppreoved: "true",
    note: "exampleNote",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  checkDate: new Date(),
  checkTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  updatedAt: new Date(),
};

const service = {
  createCheckInOut() {
    return CREATE_RESULT;
  },
  checkInOuts: () => FIND_MANY_RESULT,
  checkInOut: ({ where }: { where: { id: string } }) => {
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

describe("CheckInOut", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CheckInOutService,
          useValue: service,
        },
      ],
      controllers: [CheckInOutController],
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

  test("POST /checkInOuts", async () => {
    await request(app.getHttpServer())
      .post("/checkInOuts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkDate: CREATE_RESULT.checkDate.toISOString(),
        checkTime: CREATE_RESULT.checkTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /checkInOuts", async () => {
    await request(app.getHttpServer())
      .get("/checkInOuts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          checkDate: FIND_MANY_RESULT[0].checkDate.toISOString(),
          checkTime: FIND_MANY_RESULT[0].checkTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /checkInOuts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/checkInOuts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /checkInOuts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/checkInOuts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        checkDate: FIND_ONE_RESULT.checkDate.toISOString(),
        checkTime: FIND_ONE_RESULT.checkTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /checkInOuts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/checkInOuts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkDate: CREATE_RESULT.checkDate.toISOString(),
        checkTime: CREATE_RESULT.checkTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/checkInOuts")
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
