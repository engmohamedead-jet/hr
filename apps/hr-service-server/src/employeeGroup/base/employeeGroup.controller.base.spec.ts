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
import { EmployeeGroupController } from "../employeeGroup.controller";
import { EmployeeGroupService } from "../employeeGroup.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  createdAt: new Date(),
  descripption: "exampleDescripption",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalziedName: "exampleNormalziedName",
  note: "exampleNote",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  code: "exampleCode",
  createdAt: new Date(),
  descripption: "exampleDescripption",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalziedName: "exampleNormalziedName",
  note: "exampleNote",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    createdAt: new Date(),
    descripption: "exampleDescripption",
    id: "exampleId",
    isActive: "true",
    name: "exampleName",
    normalziedName: "exampleNormalziedName",
    note: "exampleNote",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  createdAt: new Date(),
  descripption: "exampleDescripption",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalziedName: "exampleNormalziedName",
  note: "exampleNote",
  updatedAt: new Date(),
};

const service = {
  createEmployeeGroup() {
    return CREATE_RESULT;
  },
  employeeGroups: () => FIND_MANY_RESULT,
  employeeGroup: ({ where }: { where: { id: string } }) => {
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

describe("EmployeeGroup", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeGroupService,
          useValue: service,
        },
      ],
      controllers: [EmployeeGroupController],
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

  test("POST /employeeGroups", async () => {
    await request(app.getHttpServer())
      .post("/employeeGroups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /employeeGroups", async () => {
    await request(app.getHttpServer())
      .get("/employeeGroups")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /employeeGroups/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeGroups"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeGroups/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeGroups"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /employeeGroups existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeGroups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeGroups")
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
