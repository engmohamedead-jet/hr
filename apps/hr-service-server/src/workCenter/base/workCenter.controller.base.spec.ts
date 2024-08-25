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
import { WorkCenterController } from "../workCenter.controller";
import { WorkCenterService } from "../workCenter.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  analyticDistribution: "exampleAnalyticDistribution",
  code: "exampleCode",
  color: 42,
  costPerHour: 42.424242424,
  createdAt: new Date(),
  defaultCapacity: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isProductive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  oeeTareget: 42.424242424,
  sequence: 42,
  startTime: 42.424242424,
  stopTime: 42.424242424,
  timeEfficiency: 42.424242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  analyticDistribution: "exampleAnalyticDistribution",
  code: "exampleCode",
  color: 42,
  costPerHour: 42.424242424,
  createdAt: new Date(),
  defaultCapacity: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isProductive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  oeeTareget: 42.424242424,
  sequence: 42,
  startTime: 42.424242424,
  stopTime: 42.424242424,
  timeEfficiency: 42.424242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    analyticDistribution: "exampleAnalyticDistribution",
    code: "exampleCode",
    color: 42,
    costPerHour: 42.424242424,
    createdAt: new Date(),
    defaultCapacity: 42.424242424,
    id: "exampleId",
    isActive: "true",
    isProductive: "true",
    name: "exampleName",
    normalizedName: "exampleNormalizedName",
    note: "exampleNote",
    oeeTareget: 42.424242424,
    sequence: 42,
    startTime: 42.424242424,
    stopTime: 42.424242424,
    timeEfficiency: 42.424242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  analyticDistribution: "exampleAnalyticDistribution",
  code: "exampleCode",
  color: 42,
  costPerHour: 42.424242424,
  createdAt: new Date(),
  defaultCapacity: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isProductive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  oeeTareget: 42.424242424,
  sequence: 42,
  startTime: 42.424242424,
  stopTime: 42.424242424,
  timeEfficiency: 42.424242424,
  updatedAt: new Date(),
};

const service = {
  createWorkCenter() {
    return CREATE_RESULT;
  },
  workCenters: () => FIND_MANY_RESULT,
  workCenter: ({ where }: { where: { id: string } }) => {
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

describe("WorkCenter", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WorkCenterService,
          useValue: service,
        },
      ],
      controllers: [WorkCenterController],
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

  test("POST /workCenters", async () => {
    await request(app.getHttpServer())
      .post("/workCenters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /workCenters", async () => {
    await request(app.getHttpServer())
      .get("/workCenters")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /workCenters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workCenters"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /workCenters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workCenters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /workCenters existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/workCenters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/workCenters")
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
