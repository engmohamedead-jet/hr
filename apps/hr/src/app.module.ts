import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { UserModule } from "./user/user.module";
import { DepartmentModule } from "./department/department.module";
import { EmployeeModule } from "./employee/employee.module";
import { RoleModule } from "./role/role.module";
import { EmployeeClassModule } from "./employeeClass/employeeClass.module";
import { SalaryItemModule } from "./salaryItem/salaryItem.module";
import { FiscalMonthModule } from "./fiscalMonth/fiscalMonth.module";
import { EmployeeSalaryModule } from "./employeeSalary/employeeSalary.module";
import { EmployeeSalaryDetailModule } from "./employeeSalaryDetail/employeeSalaryDetail.module";
import { EmployeeClassSalaryItemValueModule } from "./employeeClassSalaryItemValue/employeeClassSalaryItemValue.module";
import { AccountModule } from "./account/account.module";
import { CurrencyModule } from "./currency/currency.module";
import { AccountTypeModule } from "./accountType/accountType.module";
import { AccountCategoryModule } from "./accountCategory/accountCategory.module";
import { AccountTransactionModule } from "./accountTransaction/accountTransaction.module";
import { TransactionTypeModule } from "./transactionType/transactionType.module";
import { CostCenterModule } from "./costCenter/costCenter.module";
import { StoreTypeModule } from "./storeType/storeType.module";
import { StoreModule } from "./store/store.module";
import { OfficeModule } from "./office/office.module";
import { AccountTransactionDetailModule } from "./accountTransactionDetail/accountTransactionDetail.module";
import { BankModule } from "./bank/bank.module";
import { BankTypeModule } from "./bankType/bankType.module";
import { CountryModule } from "./country/country.module";
import { StateModule } from "./state/state.module";
import { CityModule } from "./city/city.module";
import { BankAccountModule } from "./bankAccount/bankAccount.module";
import { BankBranchModule } from "./bankBranch/bankBranch.module";
import { CashRepositoryModule } from "./cashRepository/cashRepository.module";
import { ReceiptVoucherModule } from "./receiptVoucher/receiptVoucher.module";
import { VoucherTypeModule } from "./voucherType/voucherType.module";
import { CompanyModule } from "./company/company.module";
import { ExchangeRateModule } from "./exchangeRate/exchangeRate.module";
import { ExchangeRateDetailModule } from "./exchangeRateDetail/exchangeRateDetail.module";
import { ExpenseItemModule } from "./expenseItem/expenseItem.module";
import { IncomeItemModule } from "./incomeItem/incomeItem.module";
import { FiscalYearModule } from "./fiscalYear/fiscalYear.module";
import { FiscalWeekModule } from "./fiscalWeek/fiscalWeek.module";
import { PeriodModule } from "./period/period.module";
import { PaymentVoucherModule } from "./paymentVoucher/paymentVoucher.module";
import { RatingModule } from "./rating/rating.module";
import { SupplierModule } from "./supplier/supplier.module";
import { CustomerTypeModule } from "./customerType/customerType.module";
import { CustomerModule } from "./customer/customer.module";
import { SalePriceTypeModule } from "./salePriceType/salePriceType.module";
import { CustomerCateogryModule } from "./customerCateogry/customerCateogry.module";
import { InvoiceTypeModule } from "./invoiceType/invoiceType.module";
import { NotificationModule } from "./notification/notification.module";
import { OrderStatusModule } from "./orderStatus/orderStatus.module";
import { PaymentMethodModule } from "./paymentMethod/paymentMethod.module";
import { PaymentStatusModule } from "./paymentStatus/paymentStatus.module";
import { PaymentTermModule } from "./paymentTerm/paymentTerm.module";
import { InstallmentSaleFeeModule } from "./installmentSaleFee/installmentSaleFee.module";
import { AttachmentModule } from "./attachment/attachment.module";
import { PaymentTypeModule } from "./paymentType/paymentType.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { AttributeModule } from "./attribute/attribute.module";
import { AttributeValueModule } from "./attributeValue/attributeValue.module";
import { BarcodeTypeModule } from "./barcodeType/barcodeType.module";
import { BillOfMaterialTypeModule } from "./billOfMaterialType/billOfMaterialType.module";
import { BrandModule } from "./brand/brand.module";
import { PressTypeModule } from "./pressType/pressType.module";
import { ControlTypeModule } from "./controlType/controlType.module";
import { ContractStatusModule } from "./contractStatus/contractStatus.module";
import { DoorTypeModule } from "./doorType/doorType.module";
import { ElevatorTypeModule } from "./elevatorType/elevatorType.module";
import { FailureTypeModule } from "./failureType/failureType.module";
import { ImageCategoryModule } from "./imageCategory/imageCategory.module";
import { CalendarModule } from "./calendar/calendar.module";
import { CashTransferModule } from "./cashTransfer/cashTransfer.module";
import { UnitModule } from "./unit/unit.module";
import { CompoundUnitModule } from "./compoundUnit/compoundUnit.module";
import { ContractPeriodModule } from "./contractPeriod/contractPeriod.module";
import { CurrencySettingModule } from "./currencySetting/currencySetting.module";
import { CustomerElevatorModule } from "./customerElevator/customerElevator.module";
import { MotorTypeModule } from "./motorType/motorType.module";
import { ElevatorModule } from "./elevator/elevator.module";
import { DebitModule } from "./debit/debit.module";
import { ElevatorSparePartModule } from "./elevatorSparePart/elevatorSparePart.module";
import { ElevatorStatusModule } from "./elevatorStatus/elevatorStatus.module";
import { FailureModule } from "./failure/failure.module";
import { FailureReportingModule } from "./failureReporting/failureReporting.module";
import { CustomerUserModule } from "./customerUser/customerUser.module";
import { InstallationContractModule } from "./installationContract/installationContract.module";
import { MaintenanceContractModule } from "./maintenanceContract/maintenanceContract.module";
import { MaintenanceVisitModule } from "./maintenanceVisit/maintenanceVisit.module";
import { ProductTypeModule } from "./productType/productType.module";
import { ProductCategoryModule } from "./productCategory/productCategory.module";
import { ProductDepartmentModule } from "./productDepartment/productDepartment.module";
import { ProductGroupModule } from "./productGroup/productGroup.module";
import { SaleTaxModule } from "./saleTax/saleTax.module";
import { PeriodicMaintenanceOrderModule } from "./periodicMaintenanceOrder/periodicMaintenanceOrder.module";
import { PrismaSeedsModule } from "./prismaseeds/prismaseeds.module";
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
    DepartmentModule,
    EmployeeModule,
    RoleModule,
    EmployeeClassModule,
    SalaryItemModule,
    FiscalMonthModule,
    EmployeeSalaryModule,
    EmployeeSalaryDetailModule,
    EmployeeClassSalaryItemValueModule,
    AccountModule,
    CurrencyModule,
    AccountTypeModule,
    AccountCategoryModule,
    AccountTransactionModule,
    TransactionTypeModule,
    CostCenterModule,
    StoreTypeModule,
    StoreModule,
    OfficeModule,
    AccountTransactionDetailModule,
    BankModule,
    BankTypeModule,
    CountryModule,
    StateModule,
    CityModule,
    BankAccountModule,
    BankBranchModule,
    CashRepositoryModule,
    ReceiptVoucherModule,
    VoucherTypeModule,
    CompanyModule,
    ExchangeRateModule,
    ExchangeRateDetailModule,
    ExpenseItemModule,
    IncomeItemModule,
    FiscalYearModule,
    FiscalWeekModule,
    PeriodModule,
    PaymentVoucherModule,
    RatingModule,
    SupplierModule,
    CustomerTypeModule,
    CustomerModule,
    SalePriceTypeModule,
    CustomerCateogryModule,
    InvoiceTypeModule,
    NotificationModule,
    OrderStatusModule,
    PaymentMethodModule,
    PaymentStatusModule,
    PaymentTermModule,
    InstallmentSaleFeeModule,
    AttachmentModule,
    PaymentTypeModule,
    AttendanceModule,
    AttributeModule,
    AttributeValueModule,
    BarcodeTypeModule,
    BillOfMaterialTypeModule,
    BrandModule,
    PressTypeModule,
    ControlTypeModule,
    ContractStatusModule,
    DoorTypeModule,
    ElevatorTypeModule,
    FailureTypeModule,
    ImageCategoryModule,
    CalendarModule,
    CashTransferModule,
    UnitModule,
    CompoundUnitModule,
    ContractPeriodModule,
    CurrencySettingModule,
    CustomerElevatorModule,
    MotorTypeModule,
    ElevatorModule,
    DebitModule,
    ElevatorSparePartModule,
    ElevatorStatusModule,
    FailureModule,
    FailureReportingModule,
    CustomerUserModule,
    InstallationContractModule,
    MaintenanceContractModule,
    MaintenanceVisitModule,
    ProductTypeModule,
    ProductCategoryModule,
    ProductDepartmentModule,
    ProductGroupModule,
    SaleTaxModule,
    PeriodicMaintenanceOrderModule,
    PrismaSeedsModule,
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
