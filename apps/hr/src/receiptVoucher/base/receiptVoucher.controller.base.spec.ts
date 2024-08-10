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
import { ReceiptVoucherController } from "../receiptVoucher.controller";
import { ReceiptVoucherService } from "../receiptVoucher.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.424242424,
  chequeDueDate: new Date(),
  chequeNumber: "exampleChequeNumber",
  chequeValue: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  receiptVoucherDate: new Date(),
  serialNumber: "exampleSerialNumber",
  statementReference: "exampleStatementReference",
  updatedAt: new Date(),
  wasChequePaid: "true",
};
const CREATE_RESULT = {
  amount: 42.424242424,
  chequeDueDate: new Date(),
  chequeNumber: "exampleChequeNumber",
  chequeValue: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  receiptVoucherDate: new Date(),
  serialNumber: "exampleSerialNumber",
  statementReference: "exampleStatementReference",
  updatedAt: new Date(),
  wasChequePaid: "true",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.424242424,
    chequeDueDate: new Date(),
    chequeNumber: "exampleChequeNumber",
    chequeValue: 42.424242424,
    createdAt: new Date(),
    id: "exampleId",
    note: "exampleNote",
    receiptVoucherDate: new Date(),
    serialNumber: "exampleSerialNumber",
    statementReference: "exampleStatementReference",
    updatedAt: new Date(),
    wasChequePaid: "true",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.424242424,
  chequeDueDate: new Date(),
  chequeNumber: "exampleChequeNumber",
  chequeValue: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  receiptVoucherDate: new Date(),
  serialNumber: "exampleSerialNumber",
  statementReference: "exampleStatementReference",
  updatedAt: new Date(),
  wasChequePaid: "true",
};

const service = {
  createReceiptVoucher() {
    return CREATE_RESULT;
  },
  receiptVouchers: () => FIND_MANY_RESULT,
  receiptVoucher: ({ where }: { where: { id: string } }) => {
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

describe("ReceiptVoucher", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReceiptVoucherService,
          useValue: service,
        },
      ],
      controllers: [ReceiptVoucherController],
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

  test("POST /receiptVouchers", async () => {
    await request(app.getHttpServer())
      .post("/receiptVouchers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        chequeDueDate: CREATE_RESULT.chequeDueDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        receiptVoucherDate: CREATE_RESULT.receiptVoucherDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /receiptVouchers", async () => {
    await request(app.getHttpServer())
      .get("/receiptVouchers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          chequeDueDate: FIND_MANY_RESULT[0].chequeDueDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          receiptVoucherDate:
            FIND_MANY_RESULT[0].receiptVoucherDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /receiptVouchers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/receiptVouchers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /receiptVouchers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/receiptVouchers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        chequeDueDate: FIND_ONE_RESULT.chequeDueDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        receiptVoucherDate: FIND_ONE_RESULT.receiptVoucherDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /receiptVouchers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/receiptVouchers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        chequeDueDate: CREATE_RESULT.chequeDueDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        receiptVoucherDate: CREATE_RESULT.receiptVoucherDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/receiptVouchers")
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
