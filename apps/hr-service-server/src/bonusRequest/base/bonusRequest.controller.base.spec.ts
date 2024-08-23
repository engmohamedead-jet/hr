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
import { BonusRequestController } from "../bonusRequest.controller";
import { BonusRequestService } from "../bonusRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  absent: 42.424242424,
  actual: 42.424242424,
  allStoreValue: 42.424242424,
  annualLeave: 42.424242424,
  assistantManager: 42.424242424,
  createdAt: new Date(),
  finalAmount: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  penalty: 42.424242424,
  percentage2: 42.424242424,
  present: 42.424242424,
  proratedValue: 42.424242424,
  sales: 42.424242424,
  salesStaff: 42.424242424,
  salesTargetPercentage: 42.424242424,
  shopManager: 42.424242424,
  sickLeave: 42.424242424,
  target: 42.424242424,
  updatedAt: new Date(),
  warning: 42.424242424,
};
const CREATE_RESULT = {
  absent: 42.424242424,
  actual: 42.424242424,
  allStoreValue: 42.424242424,
  annualLeave: 42.424242424,
  assistantManager: 42.424242424,
  createdAt: new Date(),
  finalAmount: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  penalty: 42.424242424,
  percentage2: 42.424242424,
  present: 42.424242424,
  proratedValue: 42.424242424,
  sales: 42.424242424,
  salesStaff: 42.424242424,
  salesTargetPercentage: 42.424242424,
  shopManager: 42.424242424,
  sickLeave: 42.424242424,
  target: 42.424242424,
  updatedAt: new Date(),
  warning: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    absent: 42.424242424,
    actual: 42.424242424,
    allStoreValue: 42.424242424,
    annualLeave: 42.424242424,
    assistantManager: 42.424242424,
    createdAt: new Date(),
    finalAmount: 42.424242424,
    id: "exampleId",
    isActive: "true",
    isAppreoved: "true",
    note: "exampleNote",
    penalty: 42.424242424,
    percentage2: 42.424242424,
    present: 42.424242424,
    proratedValue: 42.424242424,
    sales: 42.424242424,
    salesStaff: 42.424242424,
    salesTargetPercentage: 42.424242424,
    shopManager: 42.424242424,
    sickLeave: 42.424242424,
    target: 42.424242424,
    updatedAt: new Date(),
    warning: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  absent: 42.424242424,
  actual: 42.424242424,
  allStoreValue: 42.424242424,
  annualLeave: 42.424242424,
  assistantManager: 42.424242424,
  createdAt: new Date(),
  finalAmount: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isAppreoved: "true",
  note: "exampleNote",
  penalty: 42.424242424,
  percentage2: 42.424242424,
  present: 42.424242424,
  proratedValue: 42.424242424,
  sales: 42.424242424,
  salesStaff: 42.424242424,
  salesTargetPercentage: 42.424242424,
  shopManager: 42.424242424,
  sickLeave: 42.424242424,
  target: 42.424242424,
  updatedAt: new Date(),
  warning: 42.424242424,
};

const service = {
  createBonusRequest() {
    return CREATE_RESULT;
  },
  bonusRequests: () => FIND_MANY_RESULT,
  bonusRequest: ({ where }: { where: { id: string } }) => {
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

describe("BonusRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BonusRequestService,
          useValue: service,
        },
      ],
      controllers: [BonusRequestController],
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

  test("POST /bonusRequests", async () => {
    await request(app.getHttpServer())
      .post("/bonusRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bonusRequests", async () => {
    await request(app.getHttpServer())
      .get("/bonusRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bonusRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bonusRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bonusRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bonusRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bonusRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bonusRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bonusRequests")
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
