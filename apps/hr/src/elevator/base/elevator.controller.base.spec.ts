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
import { ElevatorController } from "../elevator.controller";
import { ElevatorService } from "../elevator.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bannerSize: "exampleBannerSize",
  cabinetSize: "exampleCabinetSize",
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  doorSize: 42.424242424,
  freight: 42.424242424,
  id: "exampleId",
  motorPower: "exampleMotorPower",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  personsCount: 42,
  stationsCount: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bannerSize: "exampleBannerSize",
  cabinetSize: "exampleCabinetSize",
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  doorSize: 42.424242424,
  freight: 42.424242424,
  id: "exampleId",
  motorPower: "exampleMotorPower",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  personsCount: 42,
  stationsCount: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bannerSize: "exampleBannerSize",
    cabinetSize: "exampleCabinetSize",
    code: "exampleCode",
    createdAt: new Date(),
    description: "exampleDescription",
    doorSize: 42.424242424,
    freight: 42.424242424,
    id: "exampleId",
    motorPower: "exampleMotorPower",
    name: "exampleName",
    normalizedName: "exampleNormalizedName",
    personsCount: 42,
    stationsCount: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bannerSize: "exampleBannerSize",
  cabinetSize: "exampleCabinetSize",
  code: "exampleCode",
  createdAt: new Date(),
  description: "exampleDescription",
  doorSize: 42.424242424,
  freight: 42.424242424,
  id: "exampleId",
  motorPower: "exampleMotorPower",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  personsCount: 42,
  stationsCount: 42,
  updatedAt: new Date(),
};

const service = {
  createElevator() {
    return CREATE_RESULT;
  },
  elevators: () => FIND_MANY_RESULT,
  elevator: ({ where }: { where: { id: string } }) => {
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

describe("Elevator", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ElevatorService,
          useValue: service,
        },
      ],
      controllers: [ElevatorController],
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

  test("POST /elevators", async () => {
    await request(app.getHttpServer())
      .post("/elevators")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /elevators", async () => {
    await request(app.getHttpServer())
      .get("/elevators")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /elevators/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/elevators"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /elevators/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/elevators"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /elevators existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/elevators")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/elevators")
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
