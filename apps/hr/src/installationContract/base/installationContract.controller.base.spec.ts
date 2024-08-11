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
import { InstallationContractController } from "../installationContract.controller";
import { InstallationContractService } from "../installationContract.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  amount: 42.424242424,
  cabinetTechnician: "exampleCabinetTechnician",
  contractDate: new Date(),
  contractNumber: "exampleContractNumber",
  createdAt: new Date(),
  doorTechnician: "exampleDoorTechnician",
  electricityTechnician: "exampleElectricityTechnician",
  elevatorsCount: "exampleElevatorsCount",
  id: "exampleId",
  phoneNumber: "examplePhoneNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  address: "exampleAddress",
  amount: 42.424242424,
  cabinetTechnician: "exampleCabinetTechnician",
  contractDate: new Date(),
  contractNumber: "exampleContractNumber",
  createdAt: new Date(),
  doorTechnician: "exampleDoorTechnician",
  electricityTechnician: "exampleElectricityTechnician",
  elevatorsCount: "exampleElevatorsCount",
  id: "exampleId",
  phoneNumber: "examplePhoneNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    amount: 42.424242424,
    cabinetTechnician: "exampleCabinetTechnician",
    contractDate: new Date(),
    contractNumber: "exampleContractNumber",
    createdAt: new Date(),
    doorTechnician: "exampleDoorTechnician",
    electricityTechnician: "exampleElectricityTechnician",
    elevatorsCount: "exampleElevatorsCount",
    id: "exampleId",
    phoneNumber: "examplePhoneNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  amount: 42.424242424,
  cabinetTechnician: "exampleCabinetTechnician",
  contractDate: new Date(),
  contractNumber: "exampleContractNumber",
  createdAt: new Date(),
  doorTechnician: "exampleDoorTechnician",
  electricityTechnician: "exampleElectricityTechnician",
  elevatorsCount: "exampleElevatorsCount",
  id: "exampleId",
  phoneNumber: "examplePhoneNumber",
  updatedAt: new Date(),
};

const service = {
  createInstallationContract() {
    return CREATE_RESULT;
  },
  installationContracts: () => FIND_MANY_RESULT,
  installationContract: ({ where }: { where: { id: string } }) => {
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

describe("InstallationContract", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InstallationContractService,
          useValue: service,
        },
      ],
      controllers: [InstallationContractController],
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

  test("POST /installationContracts", async () => {
    await request(app.getHttpServer())
      .post("/installationContracts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractDate: CREATE_RESULT.contractDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /installationContracts", async () => {
    await request(app.getHttpServer())
      .get("/installationContracts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          contractDate: FIND_MANY_RESULT[0].contractDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /installationContracts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/installationContracts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /installationContracts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/installationContracts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        contractDate: FIND_ONE_RESULT.contractDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /installationContracts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/installationContracts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractDate: CREATE_RESULT.contractDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/installationContracts")
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
