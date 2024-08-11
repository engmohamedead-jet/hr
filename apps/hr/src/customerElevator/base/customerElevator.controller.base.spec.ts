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
import { CustomerElevatorController } from "../customerElevator.controller";
import { CustomerElevatorService } from "../customerElevator.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  amount: "exampleAmount",
  code: "exampleCode",
  createdAt: new Date(),
  hasPendingMaintenanceContractOrders:
    "exampleHasPendingMaintenanceContractOrders",
  id: "exampleId",
  maintenanceEndDate: new Date(),
  maintenanceStartDate: new Date(),
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  phoneNumber: "examplePhoneNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  address: "exampleAddress",
  amount: "exampleAmount",
  code: "exampleCode",
  createdAt: new Date(),
  hasPendingMaintenanceContractOrders:
    "exampleHasPendingMaintenanceContractOrders",
  id: "exampleId",
  maintenanceEndDate: new Date(),
  maintenanceStartDate: new Date(),
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  phoneNumber: "examplePhoneNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    amount: "exampleAmount",
    code: "exampleCode",
    createdAt: new Date(),
    hasPendingMaintenanceContractOrders:
      "exampleHasPendingMaintenanceContractOrders",
    id: "exampleId",
    maintenanceEndDate: new Date(),
    maintenanceStartDate: new Date(),
    name: "exampleName",
    normalizedName: "exampleNormalizedName",
    note: "exampleNote",
    phoneNumber: "examplePhoneNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  amount: "exampleAmount",
  code: "exampleCode",
  createdAt: new Date(),
  hasPendingMaintenanceContractOrders:
    "exampleHasPendingMaintenanceContractOrders",
  id: "exampleId",
  maintenanceEndDate: new Date(),
  maintenanceStartDate: new Date(),
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  phoneNumber: "examplePhoneNumber",
  updatedAt: new Date(),
};

const service = {
  createCustomerElevator() {
    return CREATE_RESULT;
  },
  customerElevators: () => FIND_MANY_RESULT,
  customerElevator: ({ where }: { where: { id: string } }) => {
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

describe("CustomerElevator", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomerElevatorService,
          useValue: service,
        },
      ],
      controllers: [CustomerElevatorController],
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

  test("POST /customerElevators", async () => {
    await request(app.getHttpServer())
      .post("/customerElevators")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        maintenanceEndDate: CREATE_RESULT.maintenanceEndDate.toISOString(),
        maintenanceStartDate: CREATE_RESULT.maintenanceStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /customerElevators", async () => {
    await request(app.getHttpServer())
      .get("/customerElevators")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          maintenanceEndDate:
            FIND_MANY_RESULT[0].maintenanceEndDate.toISOString(),
          maintenanceStartDate:
            FIND_MANY_RESULT[0].maintenanceStartDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /customerElevators/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerElevators"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customerElevators/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerElevators"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        maintenanceEndDate: FIND_ONE_RESULT.maintenanceEndDate.toISOString(),
        maintenanceStartDate:
          FIND_ONE_RESULT.maintenanceStartDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /customerElevators existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customerElevators")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        maintenanceEndDate: CREATE_RESULT.maintenanceEndDate.toISOString(),
        maintenanceStartDate: CREATE_RESULT.maintenanceStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/customerElevators")
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
