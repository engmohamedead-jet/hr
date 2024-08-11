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
import { DebitController } from "../debit.controller";
import { DebitService } from "../debit.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amountTotal: 42.424242424,
  contractDate: new Date(),
  contractNumber: "exampleContractNumber",
  createdAt: new Date(),
  firstShare: 42.424242424,
  fourthShare: 42.424242424,
  id: "exampleId",
  note: "exampleNote",
  paidTotal: 42.424242424,
  remaining: 42.424242424,
  secondShare: 42.424242424,
  thirdShare: 42.424242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amountTotal: 42.424242424,
  contractDate: new Date(),
  contractNumber: "exampleContractNumber",
  createdAt: new Date(),
  firstShare: 42.424242424,
  fourthShare: 42.424242424,
  id: "exampleId",
  note: "exampleNote",
  paidTotal: 42.424242424,
  remaining: 42.424242424,
  secondShare: 42.424242424,
  thirdShare: 42.424242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amountTotal: 42.424242424,
    contractDate: new Date(),
    contractNumber: "exampleContractNumber",
    createdAt: new Date(),
    firstShare: 42.424242424,
    fourthShare: 42.424242424,
    id: "exampleId",
    note: "exampleNote",
    paidTotal: 42.424242424,
    remaining: 42.424242424,
    secondShare: 42.424242424,
    thirdShare: 42.424242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amountTotal: 42.424242424,
  contractDate: new Date(),
  contractNumber: "exampleContractNumber",
  createdAt: new Date(),
  firstShare: 42.424242424,
  fourthShare: 42.424242424,
  id: "exampleId",
  note: "exampleNote",
  paidTotal: 42.424242424,
  remaining: 42.424242424,
  secondShare: 42.424242424,
  thirdShare: 42.424242424,
  updatedAt: new Date(),
};

const service = {
  createDebit() {
    return CREATE_RESULT;
  },
  debits: () => FIND_MANY_RESULT,
  debit: ({ where }: { where: { id: string } }) => {
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

describe("Debit", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DebitService,
          useValue: service,
        },
      ],
      controllers: [DebitController],
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

  test("POST /debits", async () => {
    await request(app.getHttpServer())
      .post("/debits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractDate: CREATE_RESULT.contractDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /debits", async () => {
    await request(app.getHttpServer())
      .get("/debits")
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

  test("GET /debits/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/debits"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /debits/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/debits"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        contractDate: FIND_ONE_RESULT.contractDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /debits existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/debits")
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
          .post("/debits")
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
