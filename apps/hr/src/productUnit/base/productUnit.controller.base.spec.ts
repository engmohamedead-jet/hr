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
import { ProductUnitController } from "../productUnit.controller";
import { ProductUnitService } from "../productUnit.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  barcode: "exampleBarcode",
  compareUnitQuantity: 42.424242424,
  costPrice: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isCostPriceIncludingTax: "true",
  isDefaultForPurchase: "true",
  isDefaultForSale: "true",
  isSalePriceIncludingTax: "true",
  note: "exampleNote",
  quantity: 42.424242424,
  salePrice: 42.424242424,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  barcode: "exampleBarcode",
  compareUnitQuantity: 42.424242424,
  costPrice: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isCostPriceIncludingTax: "true",
  isDefaultForPurchase: "true",
  isDefaultForSale: "true",
  isSalePriceIncludingTax: "true",
  note: "exampleNote",
  quantity: 42.424242424,
  salePrice: 42.424242424,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    barcode: "exampleBarcode",
    compareUnitQuantity: 42.424242424,
    costPrice: 42.42,
    createdAt: new Date(),
    id: "exampleId",
    isActive: "true",
    isCostPriceIncludingTax: "true",
    isDefaultForPurchase: "true",
    isDefaultForSale: "true",
    isSalePriceIncludingTax: "true",
    note: "exampleNote",
    quantity: 42.424242424,
    salePrice: 42.424242424,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  barcode: "exampleBarcode",
  compareUnitQuantity: 42.424242424,
  costPrice: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isCostPriceIncludingTax: "true",
  isDefaultForPurchase: "true",
  isDefaultForSale: "true",
  isSalePriceIncludingTax: "true",
  note: "exampleNote",
  quantity: 42.424242424,
  salePrice: 42.424242424,
  updatedAt: new Date(),
};

const service = {
  createProductUnit() {
    return CREATE_RESULT;
  },
  productUnits: () => FIND_MANY_RESULT,
  productUnit: ({ where }: { where: { id: string } }) => {
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

describe("ProductUnit", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductUnitService,
          useValue: service,
        },
      ],
      controllers: [ProductUnitController],
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

  test("POST /productUnits", async () => {
    await request(app.getHttpServer())
      .post("/productUnits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /productUnits", async () => {
    await request(app.getHttpServer())
      .get("/productUnits")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /productUnits/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productUnits"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productUnits/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productUnits"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /productUnits existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/productUnits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/productUnits")
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
