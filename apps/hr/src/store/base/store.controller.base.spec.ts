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
import { StoreController } from "../store.controller";
import { StoreService } from "../store.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  addressLine1: "exampleAddressLine1",
  allowSale: "true",
  cellPhoneNumber: "exampleCellPhoneNumber",
  code: "exampleCode",
  createdAt: new Date(),
  fax: "exampleFax",
  homePhoneNumber: "exampleHomePhoneNumber",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  street: "exampleStreet",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  addressLine1: "exampleAddressLine1",
  allowSale: "true",
  cellPhoneNumber: "exampleCellPhoneNumber",
  code: "exampleCode",
  createdAt: new Date(),
  fax: "exampleFax",
  homePhoneNumber: "exampleHomePhoneNumber",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  street: "exampleStreet",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    addressLine1: "exampleAddressLine1",
    allowSale: "true",
    cellPhoneNumber: "exampleCellPhoneNumber",
    code: "exampleCode",
    createdAt: new Date(),
    fax: "exampleFax",
    homePhoneNumber: "exampleHomePhoneNumber",
    id: "exampleId",
    isActive: "true",
    name: "exampleName",
    normalizedName: "exampleNormalizedName",
    note: "exampleNote",
    street: "exampleStreet",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  addressLine1: "exampleAddressLine1",
  allowSale: "true",
  cellPhoneNumber: "exampleCellPhoneNumber",
  code: "exampleCode",
  createdAt: new Date(),
  fax: "exampleFax",
  homePhoneNumber: "exampleHomePhoneNumber",
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  street: "exampleStreet",
  updatedAt: new Date(),
};

const service = {
  createStore() {
    return CREATE_RESULT;
  },
  stores: () => FIND_MANY_RESULT,
  store: ({ where }: { where: { id: string } }) => {
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

describe("Store", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StoreService,
          useValue: service,
        },
      ],
      controllers: [StoreController],
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

  test("POST /stores", async () => {
    await request(app.getHttpServer())
      .post("/stores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stores", async () => {
    await request(app.getHttpServer())
      .get("/stores")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stores/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stores"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stores/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stores"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stores existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stores")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stores")
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
