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
import { SalePaymentController } from "../salePayment.controller";
import { SalePaymentService } from "../salePayment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  LocalCurrencyRatl: 42.424242424,
  bankBrach: "exampleBankBrach",
  chequeNumber: "exampleChequeNumber",
  createdAt: new Date(),
  creditCardNumber: "exampleCreditCardNumber",
  foreignCurrencyRate: 42.424242424,
  id: "exampleId",
  isCheque: "true",
  note: "exampleNote",
  paidValue: "examplePaidValue",
  paymentDate: new Date(),
  quantity: 42,
  seqeunce: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  LocalCurrencyRatl: 42.424242424,
  bankBrach: "exampleBankBrach",
  chequeNumber: "exampleChequeNumber",
  createdAt: new Date(),
  creditCardNumber: "exampleCreditCardNumber",
  foreignCurrencyRate: 42.424242424,
  id: "exampleId",
  isCheque: "true",
  note: "exampleNote",
  paidValue: "examplePaidValue",
  paymentDate: new Date(),
  quantity: 42,
  seqeunce: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    LocalCurrencyRatl: 42.424242424,
    bankBrach: "exampleBankBrach",
    chequeNumber: "exampleChequeNumber",
    createdAt: new Date(),
    creditCardNumber: "exampleCreditCardNumber",
    foreignCurrencyRate: 42.424242424,
    id: "exampleId",
    isCheque: "true",
    note: "exampleNote",
    paidValue: "examplePaidValue",
    paymentDate: new Date(),
    quantity: 42,
    seqeunce: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  LocalCurrencyRatl: 42.424242424,
  bankBrach: "exampleBankBrach",
  chequeNumber: "exampleChequeNumber",
  createdAt: new Date(),
  creditCardNumber: "exampleCreditCardNumber",
  foreignCurrencyRate: 42.424242424,
  id: "exampleId",
  isCheque: "true",
  note: "exampleNote",
  paidValue: "examplePaidValue",
  paymentDate: new Date(),
  quantity: 42,
  seqeunce: 42,
  updatedAt: new Date(),
};

const service = {
  createSalePayment() {
    return CREATE_RESULT;
  },
  salePayments: () => FIND_MANY_RESULT,
  salePayment: ({ where }: { where: { id: string } }) => {
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

describe("SalePayment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SalePaymentService,
          useValue: service,
        },
      ],
      controllers: [SalePaymentController],
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

  test("POST /salePayments", async () => {
    await request(app.getHttpServer())
      .post("/salePayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentDate: CREATE_RESULT.paymentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /salePayments", async () => {
    await request(app.getHttpServer())
      .get("/salePayments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          paymentDate: FIND_MANY_RESULT[0].paymentDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /salePayments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salePayments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /salePayments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salePayments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        paymentDate: FIND_ONE_RESULT.paymentDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /salePayments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/salePayments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paymentDate: CREATE_RESULT.paymentDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/salePayments")
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
