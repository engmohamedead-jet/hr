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
import { SaleOrderController } from "../saleOrder.controller";
import { SaleOrderService } from "../saleOrder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  billingAddress: "exampleBillingAddress",
  createdAt: new Date(),
  deliveryDate: new Date(),
  discountTotal: 42.424242424,
  expectedDeliveryDate: new Date(),
  id: "exampleId",
  isActive: "true",
  isCancelled: "true",
  isReplicated: "true",
  netTotal: 42.424242424,
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  saleOrderDate: new Date(),
  salePriceTypeId: 42.42,
  saleTotal: 42.424242424,
  shippingAddress: "exampleShippingAddress",
  shippingCost: 42.424242424,
  tax: 42.424242424,
  taxRate: 42.424242424,
  taxableTotal: 42.424242424,
  transactionDateTime: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  billingAddress: "exampleBillingAddress",
  createdAt: new Date(),
  deliveryDate: new Date(),
  discountTotal: 42.424242424,
  expectedDeliveryDate: new Date(),
  id: "exampleId",
  isActive: "true",
  isCancelled: "true",
  isReplicated: "true",
  netTotal: 42.424242424,
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  saleOrderDate: new Date(),
  salePriceTypeId: 42.42,
  saleTotal: 42.424242424,
  shippingAddress: "exampleShippingAddress",
  shippingCost: 42.424242424,
  tax: 42.424242424,
  taxRate: 42.424242424,
  taxableTotal: 42.424242424,
  transactionDateTime: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    billingAddress: "exampleBillingAddress",
    createdAt: new Date(),
    deliveryDate: new Date(),
    discountTotal: 42.424242424,
    expectedDeliveryDate: new Date(),
    id: "exampleId",
    isActive: "true",
    isCancelled: "true",
    isReplicated: "true",
    netTotal: 42.424242424,
    nonTaxableTotal: 42.424242424,
    note: "exampleNote",
    referenceNumber: "exampleReferenceNumber",
    saleOrderDate: new Date(),
    salePriceTypeId: 42.42,
    saleTotal: 42.424242424,
    shippingAddress: "exampleShippingAddress",
    shippingCost: 42.424242424,
    tax: 42.424242424,
    taxRate: 42.424242424,
    taxableTotal: 42.424242424,
    transactionDateTime: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  billingAddress: "exampleBillingAddress",
  createdAt: new Date(),
  deliveryDate: new Date(),
  discountTotal: 42.424242424,
  expectedDeliveryDate: new Date(),
  id: "exampleId",
  isActive: "true",
  isCancelled: "true",
  isReplicated: "true",
  netTotal: 42.424242424,
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  referenceNumber: "exampleReferenceNumber",
  saleOrderDate: new Date(),
  salePriceTypeId: 42.42,
  saleTotal: 42.424242424,
  shippingAddress: "exampleShippingAddress",
  shippingCost: 42.424242424,
  tax: 42.424242424,
  taxRate: 42.424242424,
  taxableTotal: 42.424242424,
  transactionDateTime: new Date(),
  updatedAt: new Date(),
};

const service = {
  createSaleOrder() {
    return CREATE_RESULT;
  },
  saleOrders: () => FIND_MANY_RESULT,
  saleOrder: ({ where }: { where: { id: string } }) => {
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

describe("SaleOrder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SaleOrderService,
          useValue: service,
        },
      ],
      controllers: [SaleOrderController],
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

  test("POST /saleOrders", async () => {
    await request(app.getHttpServer())
      .post("/saleOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deliveryDate: CREATE_RESULT.deliveryDate.toISOString(),
        expectedDeliveryDate: CREATE_RESULT.expectedDeliveryDate.toISOString(),
        saleOrderDate: CREATE_RESULT.saleOrderDate.toISOString(),
        transactionDateTime: CREATE_RESULT.transactionDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /saleOrders", async () => {
    await request(app.getHttpServer())
      .get("/saleOrders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deliveryDate: FIND_MANY_RESULT[0].deliveryDate.toISOString(),
          expectedDeliveryDate:
            FIND_MANY_RESULT[0].expectedDeliveryDate.toISOString(),
          saleOrderDate: FIND_MANY_RESULT[0].saleOrderDate.toISOString(),
          transactionDateTime:
            FIND_MANY_RESULT[0].transactionDateTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /saleOrders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/saleOrders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /saleOrders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/saleOrders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deliveryDate: FIND_ONE_RESULT.deliveryDate.toISOString(),
        expectedDeliveryDate:
          FIND_ONE_RESULT.expectedDeliveryDate.toISOString(),
        saleOrderDate: FIND_ONE_RESULT.saleOrderDate.toISOString(),
        transactionDateTime: FIND_ONE_RESULT.transactionDateTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /saleOrders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/saleOrders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deliveryDate: CREATE_RESULT.deliveryDate.toISOString(),
        expectedDeliveryDate: CREATE_RESULT.expectedDeliveryDate.toISOString(),
        saleOrderDate: CREATE_RESULT.saleOrderDate.toISOString(),
        transactionDateTime: CREATE_RESULT.transactionDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/saleOrders")
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
