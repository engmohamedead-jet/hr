import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { UserModule } from "./user/user.module";
import { AttributeModule } from "./attribute/attribute.module";
import { AttributeValueModule } from "./attributeValue/attributeValue.module";
import { BarcodeTypeModule } from "./barcodeType/barcodeType.module";
import { BillOfMaterialTypeModule } from "./billOfMaterialType/billOfMaterialType.module";
import { PrintTemplateGroupModule } from "./printTemplateGroup/printTemplateGroup.module";
import { PrintTemplateModule } from "./printTemplate/printTemplate.module";
import { PrintTemplateContentModule } from "./printTemplateContent/printTemplateContent.module";
import { CustomerModule } from "./customer/customer.module";
import { SalePriceTypeModule } from "./salePriceType/salePriceType.module";
import { CurrencyModule } from "./currency/currency.module";
import { OrderStatusModule } from "./orderStatus/orderStatus.module";
import { StoreModule } from "./store/store.module";
import { UnitModule } from "./unit/unit.module";
import { WorkCenterModule } from "./workCenter/workCenter.module";
import { WorkCenterRoutingModule } from "./workCenterRouting/workCenterRouting.module";
import { ProductModule } from "./product/product.module";
import { ProductTypeModule } from "./productType/productType.module";
import { ProductDepartmentModule } from "./productDepartment/productDepartment.module";
import { ProductGroupModule } from "./productGroup/productGroup.module";
import { AccountModule } from "./account/account.module";
import { SaleTaxModule } from "./saleTax/saleTax.module";
import { ProductCategoryModule } from "./productCategory/productCategory.module";
import { ProductVariantModule } from "./productVariant/productVariant.module";
import { ProductionDocumentModule } from "./productionDocument/productionDocument.module";
import { BillOfMaterialModule } from "./billOfMaterial/billOfMaterial.module";
import { BillOfMaterialDetailModule } from "./billOfMaterialDetail/billOfMaterialDetail.module";
import { ProductBarcodeModule } from "./productBarcode/productBarcode.module";
import { ProductionOrderModule } from "./productionOrder/productionOrder.module";
import { ProductionAvailabilityModule } from "./productionAvailability/productionAvailability.module";
import { ProductUnitModule } from "./productUnit/productUnit.module";
import { PurchaseModule } from "./purchase/purchase.module";
import { InvoiceTypeModule } from "./invoiceType/invoiceType.module";
import { PaymentTypeModule } from "./paymentType/paymentType.module";
import { PaymentTermModule } from "./paymentTerm/paymentTerm.module";
import { PeriodModule } from "./period/period.module";
import { InstallmentSaleFeeModule } from "./installmentSaleFee/installmentSaleFee.module";
import { PurchasePriceTypeModule } from "./purchasePriceType/purchasePriceType.module";
import { SupplierModule } from "./supplier/supplier.module";
import { CashRepositoryModule } from "./cashRepository/cashRepository.module";
import { PurchaseDetailModule } from "./purchaseDetail/purchaseDetail.module";
import { PurchaseReturnModule } from "./purchaseReturn/purchaseReturn.module";
import { PurchaseReturnDetailModule } from "./purchaseReturnDetail/purchaseReturnDetail.module";
import { ResourceTypeModule } from "./resourceType/resourceType.module";
import { ResourceModule } from "./resource/resource.module";
import { RoleGroupModule } from "./roleGroup/roleGroup.module";
import { SalaryItemGroupModule } from "./salaryItemGroup/salaryItemGroup.module";
import { SalaryItemTypeModule } from "./salaryItemType/salaryItemType.module";
import { SalaryLawModule } from "./salaryLaw/salaryLaw.module";
import { SalaryItemModule } from "./salaryItem/salaryItem.module";
import { SaleTeamModule } from "./saleTeam/saleTeam.module";
import { ScrapReasonModule } from "./scrapReason/scrapReason.module";
import { SalePersonModule } from "./salePerson/salePerson.module";
import { EmployeeDepartmentModule } from "./employeeDepartment/employeeDepartment.module";
import { EmployeeClassModule } from "./employeeClass/employeeClass.module";
import { EmployeeModule } from "./employee/employee.module";
import { TenantModule } from "./tenant/tenant.module";
import { SaleModule } from "./sale/sale.module";
import { SaleDetailModule } from "./saleDetail/saleDetail.module";
import { SaleQuotationModule } from "./saleQuotation/saleQuotation.module";
import { SaleReturnModule } from "./saleReturn/saleReturn.module";
import { SaleReturnDetailModule } from "./saleReturnDetail/saleReturnDetail.module";
import { ApplicationModule } from "./application/application.module";
import { ApplicationDependencyModule } from "./applicationDependency/applicationDependency.module";
import { SaleQuotationDetailModule } from "./saleQuotationDetail/saleQuotationDetail.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    AttributeModule,
    AttributeValueModule,
    BarcodeTypeModule,
    BillOfMaterialTypeModule,
    PrintTemplateGroupModule,
    PrintTemplateModule,
    PrintTemplateContentModule,
    CustomerModule,
    SalePriceTypeModule,
    CurrencyModule,
    OrderStatusModule,
    StoreModule,
    UnitModule,
    WorkCenterModule,
    WorkCenterRoutingModule,
    ProductModule,
    ProductTypeModule,
    ProductDepartmentModule,
    ProductGroupModule,
    AccountModule,
    SaleTaxModule,
    ProductCategoryModule,
    ProductVariantModule,
    ProductionDocumentModule,
    BillOfMaterialModule,
    BillOfMaterialDetailModule,
    ProductBarcodeModule,
    ProductionOrderModule,
    ProductionAvailabilityModule,
    ProductUnitModule,
    PurchaseModule,
    InvoiceTypeModule,
    PaymentTypeModule,
    PaymentTermModule,
    PeriodModule,
    InstallmentSaleFeeModule,
    PurchasePriceTypeModule,
    SupplierModule,
    CashRepositoryModule,
    PurchaseDetailModule,
    PurchaseReturnModule,
    PurchaseReturnDetailModule,
    ResourceTypeModule,
    ResourceModule,
    RoleGroupModule,
    SalaryItemGroupModule,
    SalaryItemTypeModule,
    SalaryLawModule,
    SalaryItemModule,
    SaleTeamModule,
    ScrapReasonModule,
    SalePersonModule,
    EmployeeDepartmentModule,
    EmployeeClassModule,
    EmployeeModule,
    TenantModule,
    SaleModule,
    SaleDetailModule,
    SaleQuotationModule,
    SaleReturnModule,
    SaleReturnDetailModule,
    ApplicationModule,
    ApplicationDependencyModule,
    SaleQuotationDetailModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
