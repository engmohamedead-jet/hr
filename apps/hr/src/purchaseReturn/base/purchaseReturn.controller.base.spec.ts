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
import { PurchaseReturnController } from "../purchaseReturn.controller";
import { PurchaseReturnService } from "../purchaseReturn.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  discountTotal: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isCancelled: "true",
  isReplicated: "true",
  netTotal: 42.424242424,
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  paid: 42.424242424,
  purchaseReturnDate: new Date(),
  purchaseReturnTotal: 42.424242424,
  referenceNumber: "exampleReferenceNumber",
  remaining: 42.424242424,
  sequenceNumber: "exampleSequenceNumber",
  tax: 42.424242424,
  taxRate: 42.424242424,
  taxableTotal: 42.424242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  discountTotal: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isCancelled: "true",
  isReplicated: "true",
  netTotal: 42.424242424,
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  paid: 42.424242424,
  purchaseReturnDate: new Date(),
  purchaseReturnTotal: 42.424242424,
  referenceNumber: "exampleReferenceNumber",
  remaining: 42.424242424,
  sequenceNumber: "exampleSequenceNumber",
  tax: 42.424242424,
  taxRate: 42.424242424,
  taxableTotal: 42.424242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    discountTotal: 42.424242424,
    id: "exampleId",
    isActive: "true",
    isCancelled: "true",
    isReplicated: "true",
    netTotal: 42.424242424,
    nonTaxableTotal: 42.424242424,
    note: "exampleNote",
    paid: 42.424242424,
    purchaseReturnDate: new Date(),
    purchaseReturnTotal: 42.424242424,
    referenceNumber: "exampleReferenceNumber",
    remaining: 42.424242424,
    sequenceNumber: "exampleSequenceNumber",
    tax: 42.424242424,
    taxRate: 42.424242424,
    taxableTotal: 42.424242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  discountTotal: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isCancelled: "true",
  isReplicated: "true",
  netTotal: 42.424242424,
  nonTaxableTotal: 42.424242424,
  note: "exampleNote",
  paid: 42.424242424,
  purchaseReturnDate: new Date(),
  purchaseReturnTotal: 42.424242424,
  referenceNumber: "exampleReferenceNumber",
  remaining: 42.424242424,
  sequenceNumber: "exampleSequenceNumber",
  tax: 42.424242424,
  taxRate: 42.424242424,
  taxableTotal: 42.424242424,
  updatedAt: new Date(),
};

const service = {
  createPurchaseReturn() {
    return CREATE_RESULT;
  },
  purchaseReturns: () => FIND_MANY_RESULT,
  purchaseReturn: ({ where }: { where: { id: string } }) => {
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

describe("PurchaseReturn", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PurchaseReturnService,
          useValue: service,
        },
      ],
      controllers: [PurchaseReturnController],
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

  test("POST /purchaseReturns", async () => {
    await request(app.getHttpServer())
      .post("/purchaseReturns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        purchaseReturnDate: CREATE_RESULT.purchaseReturnDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /purchaseReturns", async () => {
    await request(app.getHttpServer())
      .get("/purchaseReturns")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          purchaseReturnDate:
            FIND_MANY_RESULT[0].purchaseReturnDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /purchaseReturns/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseReturns"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /purchaseReturns/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchaseReturns"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        purchaseReturnDate: FIND_ONE_RESULT.purchaseReturnDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /purchaseReturns existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/purchaseReturns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        purchaseReturnDate: CREATE_RESULT.purchaseReturnDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/purchaseReturns")
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
