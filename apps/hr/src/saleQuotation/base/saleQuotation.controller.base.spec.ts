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
import { SaleQuotationController } from "../saleQuotation.controller";
import { SaleQuotationService } from "../saleQuotation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  discount: 42.424242424,
  discountRate: 42.424242424,
  expectedDeliveryDate: new Date(),
  id: "exampleId",
  internalMemo: "exampleInternalMemo",
  isActive: "true",
  isCancelled: "true",
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  saleQuotationDate: new Date(),
  sequenceNumber: "exampleSequenceNumber",
  taxRate: 42.424242424,
  taxTotal: 42.424242424,
  taxableTotal: 42.424242424,
  terms: "exampleTerms",
  transactionDateTime: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  discount: 42.424242424,
  discountRate: 42.424242424,
  expectedDeliveryDate: new Date(),
  id: "exampleId",
  internalMemo: "exampleInternalMemo",
  isActive: "true",
  isCancelled: "true",
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  saleQuotationDate: new Date(),
  sequenceNumber: "exampleSequenceNumber",
  taxRate: 42.424242424,
  taxTotal: 42.424242424,
  taxableTotal: 42.424242424,
  terms: "exampleTerms",
  transactionDateTime: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    discount: 42.424242424,
    discountRate: 42.424242424,
    expectedDeliveryDate: new Date(),
    id: "exampleId",
    internalMemo: "exampleInternalMemo",
    isActive: "true",
    isCancelled: "true",
    nonTaxableTotal: 42.424242424,
    note: "exampleNote",
    referenceNumber: "exampleReferenceNumber",
    saleQuotationDate: new Date(),
    sequenceNumber: "exampleSequenceNumber",
    taxRate: 42.424242424,
    taxTotal: 42.424242424,
    taxableTotal: 42.424242424,
    terms: "exampleTerms",
    transactionDateTime: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  discount: 42.424242424,
  discountRate: 42.424242424,
  expectedDeliveryDate: new Date(),
  id: "exampleId",
  internalMemo: "exampleInternalMemo",
  isActive: "true",
  isCancelled: "true",
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  saleQuotationDate: new Date(),
  sequenceNumber: "exampleSequenceNumber",
  taxRate: 42.424242424,
  taxTotal: 42.424242424,
  taxableTotal: 42.424242424,
  terms: "exampleTerms",
  transactionDateTime: new Date(),
  updatedAt: new Date(),
};

const service = {
  createSaleQuotation() {
    return CREATE_RESULT;
  },
  saleQuotations: () => FIND_MANY_RESULT,
  saleQuotation: ({ where }: { where: { id: string } }) => {
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

describe("SaleQuotation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SaleQuotationService,
          useValue: service,
        },
      ],
      controllers: [SaleQuotationController],
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

  test("POST /saleQuotations", async () => {
    await request(app.getHttpServer())
      .post("/saleQuotations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expectedDeliveryDate: CREATE_RESULT.expectedDeliveryDate.toISOString(),
        saleQuotationDate: CREATE_RESULT.saleQuotationDate.toISOString(),
        transactionDateTime: CREATE_RESULT.transactionDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /saleQuotations", async () => {
    await request(app.getHttpServer())
      .get("/saleQuotations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expectedDeliveryDate:
            FIND_MANY_RESULT[0].expectedDeliveryDate.toISOString(),
          saleQuotationDate:
            FIND_MANY_RESULT[0].saleQuotationDate.toISOString(),
          transactionDateTime:
            FIND_MANY_RESULT[0].transactionDateTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /saleQuotations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/saleQuotations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /saleQuotations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/saleQuotations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expectedDeliveryDate:
          FIND_ONE_RESULT.expectedDeliveryDate.toISOString(),
        saleQuotationDate: FIND_ONE_RESULT.saleQuotationDate.toISOString(),
        transactionDateTime: FIND_ONE_RESULT.transactionDateTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /saleQuotations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/saleQuotations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expectedDeliveryDate: CREATE_RESULT.expectedDeliveryDate.toISOString(),
        saleQuotationDate: CREATE_RESULT.saleQuotationDate.toISOString(),
        transactionDateTime: CREATE_RESULT.transactionDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/saleQuotations")
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
