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
import { PaymentVoucherController } from "../paymentVoucher.controller";
import { PaymentVoucherService } from "../paymentVoucher.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  paymentVoucherDate: new Date(),
  statementReference: "exampleStatementReference",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amount: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  paymentVoucherDate: new Date(),
  statementReference: "exampleStatementReference",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amount: 42.424242424,
    createdAt: new Date(),
    id: "exampleId",
    note: "exampleNote",
    paymentVoucherDate: new Date(),
    statementReference: "exampleStatementReference",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amount: 42.424242424,
  createdAt: new Date(),
  id: "exampleId",
  note: "exampleNote",
  paymentVoucherDate: new Date(),
  statementReference: "exampleStatementReference",
  updatedAt: new Date(),
};

const service = {
  createPaymentVoucher() {
    return CREATE_RESULT;
  },
  paymentVouchers: () => FIND_MANY_RESULT,
  paymentVoucher: ({ where }: { where: { id: string } }) => {
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

describe("PaymentVoucher", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentVoucherService,
          useValue: service,
        },
      ],
      controllers: [PaymentVoucherController],
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

  test("POST /paymentVouchers", async () => {
    await request(app.getHttpServer())
      .post("/paymentVouchers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentVoucherDate: CREATE_RESULT.paymentVoucherDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /paymentVouchers", async () => {
    await request(app.getHttpServer())
      .get("/paymentVouchers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          paymentVoucherDate:
            FIND_MANY_RESULT[0].paymentVoucherDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /paymentVouchers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentVouchers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentVouchers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentVouchers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        paymentVoucherDate: FIND_ONE_RESULT.paymentVoucherDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /paymentVouchers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentVouchers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentVoucherDate: CREATE_RESULT.paymentVoucherDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentVouchers")
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
