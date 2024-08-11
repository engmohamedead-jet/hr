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
import { PeriodicMaintenanceOrderController } from "../periodicMaintenanceOrder.controller";
import { PeriodicMaintenanceOrderService } from "../periodicMaintenanceOrder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  confirmDate: new Date(),
  contractEndDate: new Date(),
  contractStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isConfirmed: "true",
  orderDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  confirmDate: new Date(),
  contractEndDate: new Date(),
  contractStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isConfirmed: "true",
  orderDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    confirmDate: new Date(),
    contractEndDate: new Date(),
    contractStartDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    isConfirmed: "true",
    orderDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  confirmDate: new Date(),
  contractEndDate: new Date(),
  contractStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isConfirmed: "true",
  orderDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createPeriodicMaintenanceOrder() {
    return CREATE_RESULT;
  },
  periodicMaintenanceOrders: () => FIND_MANY_RESULT,
  periodicMaintenanceOrder: ({ where }: { where: { id: string } }) => {
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

describe("PeriodicMaintenanceOrder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PeriodicMaintenanceOrderService,
          useValue: service,
        },
      ],
      controllers: [PeriodicMaintenanceOrderController],
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

  test("POST /periodicMaintenanceOrders", async () => {
    await request(app.getHttpServer())
      .post("/periodicMaintenanceOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        confirmDate: CREATE_RESULT.confirmDate.toISOString(),
        contractEndDate: CREATE_RESULT.contractEndDate.toISOString(),
        contractStartDate: CREATE_RESULT.contractStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /periodicMaintenanceOrders", async () => {
    await request(app.getHttpServer())
      .get("/periodicMaintenanceOrders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          confirmDate: FIND_MANY_RESULT[0].confirmDate.toISOString(),
          contractEndDate: FIND_MANY_RESULT[0].contractEndDate.toISOString(),
          contractStartDate:
            FIND_MANY_RESULT[0].contractStartDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          orderDate: FIND_MANY_RESULT[0].orderDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /periodicMaintenanceOrders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/periodicMaintenanceOrders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /periodicMaintenanceOrders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/periodicMaintenanceOrders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        confirmDate: FIND_ONE_RESULT.confirmDate.toISOString(),
        contractEndDate: FIND_ONE_RESULT.contractEndDate.toISOString(),
        contractStartDate: FIND_ONE_RESULT.contractStartDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        orderDate: FIND_ONE_RESULT.orderDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /periodicMaintenanceOrders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/periodicMaintenanceOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        confirmDate: CREATE_RESULT.confirmDate.toISOString(),
        contractEndDate: CREATE_RESULT.contractEndDate.toISOString(),
        contractStartDate: CREATE_RESULT.contractStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/periodicMaintenanceOrders")
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
