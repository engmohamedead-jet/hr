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
import { WorkOrderRoutingController } from "../workOrderRouting.controller";
import { WorkOrderRoutingService } from "../workOrderRouting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualCost: 42.424242424,
  actualEndDate: new Date(),
  actualResourceHours: 42.424242424,
  actualStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  note: "exampleNote",
  plannedCost: 42.424242424,
  scheduledEndDate: new Date(),
  scheduledStartDate: new Date(),
  sequence: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  actualCost: 42.424242424,
  actualEndDate: new Date(),
  actualResourceHours: 42.424242424,
  actualStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  note: "exampleNote",
  plannedCost: 42.424242424,
  scheduledEndDate: new Date(),
  scheduledStartDate: new Date(),
  sequence: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actualCost: 42.424242424,
    actualEndDate: new Date(),
    actualResourceHours: 42.424242424,
    actualStartDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    isActive: "true",
    note: "exampleNote",
    plannedCost: 42.424242424,
    scheduledEndDate: new Date(),
    scheduledStartDate: new Date(),
    sequence: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actualCost: 42.424242424,
  actualEndDate: new Date(),
  actualResourceHours: 42.424242424,
  actualStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  note: "exampleNote",
  plannedCost: 42.424242424,
  scheduledEndDate: new Date(),
  scheduledStartDate: new Date(),
  sequence: 42,
  updatedAt: new Date(),
};

const service = {
  createWorkOrderRouting() {
    return CREATE_RESULT;
  },
  workOrderRoutings: () => FIND_MANY_RESULT,
  workOrderRouting: ({ where }: { where: { id: string } }) => {
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

describe("WorkOrderRouting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WorkOrderRoutingService,
          useValue: service,
        },
      ],
      controllers: [WorkOrderRoutingController],
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

  test("POST /workOrderRoutings", async () => {
    await request(app.getHttpServer())
      .post("/workOrderRoutings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualEndDate: CREATE_RESULT.actualEndDate.toISOString(),
        actualStartDate: CREATE_RESULT.actualStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        scheduledEndDate: CREATE_RESULT.scheduledEndDate.toISOString(),
        scheduledStartDate: CREATE_RESULT.scheduledStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /workOrderRoutings", async () => {
    await request(app.getHttpServer())
      .get("/workOrderRoutings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actualEndDate: FIND_MANY_RESULT[0].actualEndDate.toISOString(),
          actualStartDate: FIND_MANY_RESULT[0].actualStartDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          scheduledEndDate: FIND_MANY_RESULT[0].scheduledEndDate.toISOString(),
          scheduledStartDate:
            FIND_MANY_RESULT[0].scheduledStartDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /workOrderRoutings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workOrderRoutings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /workOrderRoutings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workOrderRoutings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actualEndDate: FIND_ONE_RESULT.actualEndDate.toISOString(),
        actualStartDate: FIND_ONE_RESULT.actualStartDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        scheduledEndDate: FIND_ONE_RESULT.scheduledEndDate.toISOString(),
        scheduledStartDate: FIND_ONE_RESULT.scheduledStartDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /workOrderRoutings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/workOrderRoutings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualEndDate: CREATE_RESULT.actualEndDate.toISOString(),
        actualStartDate: CREATE_RESULT.actualStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        scheduledEndDate: CREATE_RESULT.scheduledEndDate.toISOString(),
        scheduledStartDate: CREATE_RESULT.scheduledStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/workOrderRoutings")
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
