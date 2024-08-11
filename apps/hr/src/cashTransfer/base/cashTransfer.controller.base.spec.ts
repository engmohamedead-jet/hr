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
import { CashTransferController } from "../cashTransfer.controller";
import { CashTransferService } from "../cashTransfer.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  statementReference: "exampleStatementReference",
  transferDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amount: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  statementReference: "exampleStatementReference",
  transferDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amount: 42.424242424,
    createdAt: new Date(),
    id: "exampleId",
    note: "exampleNote",
    referenceNumber: "exampleReferenceNumber",
    statementReference: "exampleStatementReference",
    transferDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amount: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  statementReference: "exampleStatementReference",
  transferDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createCashTransfer() {
    return CREATE_RESULT;
  },
  cashTransfers: () => FIND_MANY_RESULT,
  cashTransfer: ({ where }: { where: { id: string } }) => {
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

describe("CashTransfer", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CashTransferService,
          useValue: service,
        },
      ],
      controllers: [CashTransferController],
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

  test("POST /cashTransfers", async () => {
    await request(app.getHttpServer())
      .post("/cashTransfers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        transferDate: CREATE_RESULT.transferDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cashTransfers", async () => {
    await request(app.getHttpServer())
      .get("/cashTransfers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          transferDate: FIND_MANY_RESULT[0].transferDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cashTransfers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashTransfers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cashTransfers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashTransfers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        transferDate: FIND_ONE_RESULT.transferDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cashTransfers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cashTransfers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        transferDate: CREATE_RESULT.transferDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cashTransfers")
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
