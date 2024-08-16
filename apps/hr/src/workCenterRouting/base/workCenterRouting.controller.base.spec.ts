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
import { WorkCenterRoutingController } from "../workCenterRouting.controller";
import { WorkCenterRoutingService } from "../workCenterRouting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  sequence: 42,
  timeCycleManual: 42.424242424,
  timeModeBatch: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  code: "exampleCode",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  sequence: 42,
  timeCycleManual: 42.424242424,
  timeModeBatch: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    createdAt: new Date(),
    id: "exampleId",
    isActive: "true",
    name: "exampleName",
    normalizedName: "exampleNormalizedName",
    note: "exampleNote",
    sequence: 42,
    timeCycleManual: 42.424242424,
    timeModeBatch: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  sequence: 42,
  timeCycleManual: 42.424242424,
  timeModeBatch: 42,
  updatedAt: new Date(),
};

const service = {
  createWorkCenterRouting() {
    return CREATE_RESULT;
  },
  workCenterRoutings: () => FIND_MANY_RESULT,
  workCenterRouting: ({ where }: { where: { id: string } }) => {
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

describe("WorkCenterRouting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WorkCenterRoutingService,
          useValue: service,
        },
      ],
      controllers: [WorkCenterRoutingController],
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

  test("POST /workCenterRoutings", async () => {
    await request(app.getHttpServer())
      .post("/workCenterRoutings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /workCenterRoutings", async () => {
    await request(app.getHttpServer())
      .get("/workCenterRoutings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /workCenterRoutings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workCenterRoutings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /workCenterRoutings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workCenterRoutings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /workCenterRoutings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/workCenterRoutings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/workCenterRoutings")
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
