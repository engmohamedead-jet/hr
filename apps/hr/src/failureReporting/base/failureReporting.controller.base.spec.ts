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
import { FailureReportingController } from "../failureReporting.controller";
import { FailureReportingService } from "../failureReporting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contactingFromTime: new Date(),
  contactingToTime: new Date(),
  createdAt: new Date(),
  failureDescription: "exampleFailureDescription",
  id: "exampleId",
  note: "exampleNote",
  reportingDate: new Date(),
  reviewDate: new Date(),
  updatedAt: new Date(),
  wasReviewed: "true",
};
const CREATE_RESULT = {
  contactingFromTime: new Date(),
  contactingToTime: new Date(),
  createdAt: new Date(),
  failureDescription: "exampleFailureDescription",
  id: "exampleId",
  note: "exampleNote",
  reportingDate: new Date(),
  reviewDate: new Date(),
  updatedAt: new Date(),
  wasReviewed: "true",
};
const FIND_MANY_RESULT = [
  {
    contactingFromTime: new Date(),
    contactingToTime: new Date(),
    createdAt: new Date(),
    failureDescription: "exampleFailureDescription",
    id: "exampleId",
    note: "exampleNote",
    reportingDate: new Date(),
    reviewDate: new Date(),
    updatedAt: new Date(),
    wasReviewed: "true",
  },
];
const FIND_ONE_RESULT = {
  contactingFromTime: new Date(),
  contactingToTime: new Date(),
  createdAt: new Date(),
  failureDescription: "exampleFailureDescription",
  id: "exampleId",
  note: "exampleNote",
  reportingDate: new Date(),
  reviewDate: new Date(),
  updatedAt: new Date(),
  wasReviewed: "true",
};

const service = {
  createFailureReporting() {
    return CREATE_RESULT;
  },
  failureReportings: () => FIND_MANY_RESULT,
  failureReporting: ({ where }: { where: { id: string } }) => {
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

describe("FailureReporting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FailureReportingService,
          useValue: service,
        },
      ],
      controllers: [FailureReportingController],
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

  test("POST /failureReportings", async () => {
    await request(app.getHttpServer())
      .post("/failureReportings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contactingFromTime: CREATE_RESULT.contactingFromTime.toISOString(),
        contactingToTime: CREATE_RESULT.contactingToTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reportingDate: CREATE_RESULT.reportingDate.toISOString(),
        reviewDate: CREATE_RESULT.reviewDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /failureReportings", async () => {
    await request(app.getHttpServer())
      .get("/failureReportings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          contactingFromTime:
            FIND_MANY_RESULT[0].contactingFromTime.toISOString(),
          contactingToTime: FIND_MANY_RESULT[0].contactingToTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          reportingDate: FIND_MANY_RESULT[0].reportingDate.toISOString(),
          reviewDate: FIND_MANY_RESULT[0].reviewDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /failureReportings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/failureReportings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /failureReportings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/failureReportings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        contactingFromTime: FIND_ONE_RESULT.contactingFromTime.toISOString(),
        contactingToTime: FIND_ONE_RESULT.contactingToTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        reportingDate: FIND_ONE_RESULT.reportingDate.toISOString(),
        reviewDate: FIND_ONE_RESULT.reviewDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /failureReportings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/failureReportings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contactingFromTime: CREATE_RESULT.contactingFromTime.toISOString(),
        contactingToTime: CREATE_RESULT.contactingToTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reportingDate: CREATE_RESULT.reportingDate.toISOString(),
        reviewDate: CREATE_RESULT.reviewDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/failureReportings")
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
