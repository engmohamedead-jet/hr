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
import { TradingSummaryController } from "../tradingSummary.controller";
import { TradingSummaryService } from "../tradingSummary.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  fiscalWeekId: "exampleFiscalWeekId",
  id: "exampleId",
  isActive: "true",
  note: "exampleNote",
  partyId: "examplePartyId",
  price: 42.424242424,
  priceTotal: 42.424242424,
  productId: "exampleProductId",
  productVariantId: "exampleProductVariantId",
  quantity: 42.424242424,
  transactionDate: new Date(),
  transactionTypeId: "exampleTransactionTypeId",
  unitId: "exampleUnitId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  fiscalWeekId: "exampleFiscalWeekId",
  id: "exampleId",
  isActive: "true",
  note: "exampleNote",
  partyId: "examplePartyId",
  price: 42.424242424,
  priceTotal: 42.424242424,
  productId: "exampleProductId",
  productVariantId: "exampleProductVariantId",
  quantity: 42.424242424,
  transactionDate: new Date(),
  transactionTypeId: "exampleTransactionTypeId",
  unitId: "exampleUnitId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    fiscalWeekId: "exampleFiscalWeekId",
    id: "exampleId",
    isActive: "true",
    note: "exampleNote",
    partyId: "examplePartyId",
    price: 42.424242424,
    priceTotal: 42.424242424,
    productId: "exampleProductId",
    productVariantId: "exampleProductVariantId",
    quantity: 42.424242424,
    transactionDate: new Date(),
    transactionTypeId: "exampleTransactionTypeId",
    unitId: "exampleUnitId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  fiscalWeekId: "exampleFiscalWeekId",
  id: "exampleId",
  isActive: "true",
  note: "exampleNote",
  partyId: "examplePartyId",
  price: 42.424242424,
  priceTotal: 42.424242424,
  productId: "exampleProductId",
  productVariantId: "exampleProductVariantId",
  quantity: 42.424242424,
  transactionDate: new Date(),
  transactionTypeId: "exampleTransactionTypeId",
  unitId: "exampleUnitId",
  updatedAt: new Date(),
};

const service = {
  createTradingSummary() {
    return CREATE_RESULT;
  },
  tradingSummaries: () => FIND_MANY_RESULT,
  tradingSummary: ({ where }: { where: { id: string } }) => {
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

describe("TradingSummary", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TradingSummaryService,
          useValue: service,
        },
      ],
      controllers: [TradingSummaryController],
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

  test("POST /tradingSummaries", async () => {
    await request(app.getHttpServer())
      .post("/tradingSummaries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /tradingSummaries", async () => {
    await request(app.getHttpServer())
      .get("/tradingSummaries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          transactionDate: FIND_MANY_RESULT[0].transactionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /tradingSummaries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tradingSummaries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tradingSummaries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tradingSummaries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        transactionDate: FIND_ONE_RESULT.transactionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tradingSummaries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tradingSummaries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        transactionDate: CREATE_RESULT.transactionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/tradingSummaries")
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
