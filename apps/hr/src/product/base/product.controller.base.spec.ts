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
import { ProductController } from "../product.controller";
import { ProductService } from "../product.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  barcode: "exampleBarcode",
  canExpire: "true",
  code: "exampleCode",
  costPrice: 42.424242424,
  costPriceIncludesTax: "true",
  createdAt: new Date(),
  currentStockQuantity: 42.424242424,
  daysToManufacture: 42,
  description: "exampleDescription",
  discontinuedDate: new Date(),
  discountRate: 42.424242424,
  expireAlarmInDays: 42,
  expireIsDefaultAfterDaysFromPurchase: 42,
  firstStockQuantity: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isCompound: "true",
  isFavorite: "true",
  maintainInventory: "true",
  minimumSalePrice: 42.424242424,
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  profitRate: 42.424242424,
  reorderQuantity: 42.424242424,
  salePrice: 42.424242424,
  salePriceIncludesTax: "true",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  barcode: "exampleBarcode",
  canExpire: "true",
  code: "exampleCode",
  costPrice: 42.424242424,
  costPriceIncludesTax: "true",
  createdAt: new Date(),
  currentStockQuantity: 42.424242424,
  daysToManufacture: 42,
  description: "exampleDescription",
  discontinuedDate: new Date(),
  discountRate: 42.424242424,
  expireAlarmInDays: 42,
  expireIsDefaultAfterDaysFromPurchase: 42,
  firstStockQuantity: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isCompound: "true",
  isFavorite: "true",
  maintainInventory: "true",
  minimumSalePrice: 42.424242424,
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  profitRate: 42.424242424,
  reorderQuantity: 42.424242424,
  salePrice: 42.424242424,
  salePriceIncludesTax: "true",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    barcode: "exampleBarcode",
    canExpire: "true",
    code: "exampleCode",
    costPrice: 42.424242424,
    costPriceIncludesTax: "true",
    createdAt: new Date(),
    currentStockQuantity: 42.424242424,
    daysToManufacture: 42,
    description: "exampleDescription",
    discontinuedDate: new Date(),
    discountRate: 42.424242424,
    expireAlarmInDays: 42,
    expireIsDefaultAfterDaysFromPurchase: 42,
    firstStockQuantity: 42.424242424,
    id: "exampleId",
    isActive: "true",
    isCompound: "true",
    isFavorite: "true",
    maintainInventory: "true",
    minimumSalePrice: 42.424242424,
    name: "exampleName",
    normalizedName: "exampleNormalizedName",
    note: "exampleNote",
    profitRate: 42.424242424,
    reorderQuantity: 42.424242424,
    salePrice: 42.424242424,
    salePriceIncludesTax: "true",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  barcode: "exampleBarcode",
  canExpire: "true",
  code: "exampleCode",
  costPrice: 42.424242424,
  costPriceIncludesTax: "true",
  createdAt: new Date(),
  currentStockQuantity: 42.424242424,
  daysToManufacture: 42,
  description: "exampleDescription",
  discontinuedDate: new Date(),
  discountRate: 42.424242424,
  expireAlarmInDays: 42,
  expireIsDefaultAfterDaysFromPurchase: 42,
  firstStockQuantity: 42.424242424,
  id: "exampleId",
  isActive: "true",
  isCompound: "true",
  isFavorite: "true",
  maintainInventory: "true",
  minimumSalePrice: 42.424242424,
  name: "exampleName",
  normalizedName: "exampleNormalizedName",
  note: "exampleNote",
  profitRate: 42.424242424,
  reorderQuantity: 42.424242424,
  salePrice: 42.424242424,
  salePriceIncludesTax: "true",
  updatedAt: new Date(),
};

const service = {
  createProduct() {
    return CREATE_RESULT;
  },
  products: () => FIND_MANY_RESULT,
  product: ({ where }: { where: { id: string } }) => {
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

describe("Product", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: service,
        },
      ],
      controllers: [ProductController],
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

  test("POST /products", async () => {
    await request(app.getHttpServer())
      .post("/products")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        discontinuedDate: CREATE_RESULT.discontinuedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /products", async () => {
    await request(app.getHttpServer())
      .get("/products")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          discontinuedDate: FIND_MANY_RESULT[0].discontinuedDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /products/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/products"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /products/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/products"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        discontinuedDate: FIND_ONE_RESULT.discontinuedDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /products existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/products")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        discontinuedDate: CREATE_RESULT.discontinuedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/products")
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
