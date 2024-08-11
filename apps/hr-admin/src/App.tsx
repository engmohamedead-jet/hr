import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { EmployeeClassList } from "./employeeClass/EmployeeClassList";
import { EmployeeClassCreate } from "./employeeClass/EmployeeClassCreate";
import { EmployeeClassEdit } from "./employeeClass/EmployeeClassEdit";
import { EmployeeClassShow } from "./employeeClass/EmployeeClassShow";
import { SalaryItemList } from "./salaryItem/SalaryItemList";
import { SalaryItemCreate } from "./salaryItem/SalaryItemCreate";
import { SalaryItemEdit } from "./salaryItem/SalaryItemEdit";
import { SalaryItemShow } from "./salaryItem/SalaryItemShow";
import { FiscalMonthList } from "./fiscalMonth/FiscalMonthList";
import { FiscalMonthCreate } from "./fiscalMonth/FiscalMonthCreate";
import { FiscalMonthEdit } from "./fiscalMonth/FiscalMonthEdit";
import { FiscalMonthShow } from "./fiscalMonth/FiscalMonthShow";
import { EmployeeSalaryList } from "./employeeSalary/EmployeeSalaryList";
import { EmployeeSalaryCreate } from "./employeeSalary/EmployeeSalaryCreate";
import { EmployeeSalaryEdit } from "./employeeSalary/EmployeeSalaryEdit";
import { EmployeeSalaryShow } from "./employeeSalary/EmployeeSalaryShow";
import { EmployeeSalaryDetailList } from "./employeeSalaryDetail/EmployeeSalaryDetailList";
import { EmployeeSalaryDetailCreate } from "./employeeSalaryDetail/EmployeeSalaryDetailCreate";
import { EmployeeSalaryDetailEdit } from "./employeeSalaryDetail/EmployeeSalaryDetailEdit";
import { EmployeeSalaryDetailShow } from "./employeeSalaryDetail/EmployeeSalaryDetailShow";
import { EmployeeClassSalaryItemValueList } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueList";
import { EmployeeClassSalaryItemValueCreate } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueCreate";
import { EmployeeClassSalaryItemValueEdit } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueEdit";
import { EmployeeClassSalaryItemValueShow } from "./employeeClassSalaryItemValue/EmployeeClassSalaryItemValueShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { AccountTypeList } from "./accountType/AccountTypeList";
import { AccountTypeCreate } from "./accountType/AccountTypeCreate";
import { AccountTypeEdit } from "./accountType/AccountTypeEdit";
import { AccountTypeShow } from "./accountType/AccountTypeShow";
import { AccountCategoryList } from "./accountCategory/AccountCategoryList";
import { AccountCategoryCreate } from "./accountCategory/AccountCategoryCreate";
import { AccountCategoryEdit } from "./accountCategory/AccountCategoryEdit";
import { AccountCategoryShow } from "./accountCategory/AccountCategoryShow";
import { AccountTransactionList } from "./accountTransaction/AccountTransactionList";
import { AccountTransactionCreate } from "./accountTransaction/AccountTransactionCreate";
import { AccountTransactionEdit } from "./accountTransaction/AccountTransactionEdit";
import { AccountTransactionShow } from "./accountTransaction/AccountTransactionShow";
import { TransactionTypeList } from "./transactionType/TransactionTypeList";
import { TransactionTypeCreate } from "./transactionType/TransactionTypeCreate";
import { TransactionTypeEdit } from "./transactionType/TransactionTypeEdit";
import { TransactionTypeShow } from "./transactionType/TransactionTypeShow";
import { CostCenterList } from "./costCenter/CostCenterList";
import { CostCenterCreate } from "./costCenter/CostCenterCreate";
import { CostCenterEdit } from "./costCenter/CostCenterEdit";
import { CostCenterShow } from "./costCenter/CostCenterShow";
import { StoreTypeList } from "./storeType/StoreTypeList";
import { StoreTypeCreate } from "./storeType/StoreTypeCreate";
import { StoreTypeEdit } from "./storeType/StoreTypeEdit";
import { StoreTypeShow } from "./storeType/StoreTypeShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { OfficeList } from "./office/OfficeList";
import { OfficeCreate } from "./office/OfficeCreate";
import { OfficeEdit } from "./office/OfficeEdit";
import { OfficeShow } from "./office/OfficeShow";
import { AccountTransactionDetailList } from "./accountTransactionDetail/AccountTransactionDetailList";
import { AccountTransactionDetailCreate } from "./accountTransactionDetail/AccountTransactionDetailCreate";
import { AccountTransactionDetailEdit } from "./accountTransactionDetail/AccountTransactionDetailEdit";
import { AccountTransactionDetailShow } from "./accountTransactionDetail/AccountTransactionDetailShow";
import { BankList } from "./bank/BankList";
import { BankCreate } from "./bank/BankCreate";
import { BankEdit } from "./bank/BankEdit";
import { BankShow } from "./bank/BankShow";
import { BankTypeList } from "./bankType/BankTypeList";
import { BankTypeCreate } from "./bankType/BankTypeCreate";
import { BankTypeEdit } from "./bankType/BankTypeEdit";
import { BankTypeShow } from "./bankType/BankTypeShow";
import { CountryList } from "./country/CountryList";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryShow } from "./country/CountryShow";
import { StateList } from "./state/StateList";
import { StateCreate } from "./state/StateCreate";
import { StateEdit } from "./state/StateEdit";
import { StateShow } from "./state/StateShow";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { BankAccountList } from "./bankAccount/BankAccountList";
import { BankAccountCreate } from "./bankAccount/BankAccountCreate";
import { BankAccountEdit } from "./bankAccount/BankAccountEdit";
import { BankAccountShow } from "./bankAccount/BankAccountShow";
import { BankBranchList } from "./bankBranch/BankBranchList";
import { BankBranchCreate } from "./bankBranch/BankBranchCreate";
import { BankBranchEdit } from "./bankBranch/BankBranchEdit";
import { BankBranchShow } from "./bankBranch/BankBranchShow";
import { CashRepositoryList } from "./cashRepository/CashRepositoryList";
import { CashRepositoryCreate } from "./cashRepository/CashRepositoryCreate";
import { CashRepositoryEdit } from "./cashRepository/CashRepositoryEdit";
import { CashRepositoryShow } from "./cashRepository/CashRepositoryShow";
import { ReceiptVoucherList } from "./receiptVoucher/ReceiptVoucherList";
import { ReceiptVoucherCreate } from "./receiptVoucher/ReceiptVoucherCreate";
import { ReceiptVoucherEdit } from "./receiptVoucher/ReceiptVoucherEdit";
import { ReceiptVoucherShow } from "./receiptVoucher/ReceiptVoucherShow";
import { VoucherTypeList } from "./voucherType/VoucherTypeList";
import { VoucherTypeCreate } from "./voucherType/VoucherTypeCreate";
import { VoucherTypeEdit } from "./voucherType/VoucherTypeEdit";
import { VoucherTypeShow } from "./voucherType/VoucherTypeShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { ExchangeRateList } from "./exchangeRate/ExchangeRateList";
import { ExchangeRateCreate } from "./exchangeRate/ExchangeRateCreate";
import { ExchangeRateEdit } from "./exchangeRate/ExchangeRateEdit";
import { ExchangeRateShow } from "./exchangeRate/ExchangeRateShow";
import { ExchangeRateDetailList } from "./exchangeRateDetail/ExchangeRateDetailList";
import { ExchangeRateDetailCreate } from "./exchangeRateDetail/ExchangeRateDetailCreate";
import { ExchangeRateDetailEdit } from "./exchangeRateDetail/ExchangeRateDetailEdit";
import { ExchangeRateDetailShow } from "./exchangeRateDetail/ExchangeRateDetailShow";
import { ExpenseItemList } from "./expenseItem/ExpenseItemList";
import { ExpenseItemCreate } from "./expenseItem/ExpenseItemCreate";
import { ExpenseItemEdit } from "./expenseItem/ExpenseItemEdit";
import { ExpenseItemShow } from "./expenseItem/ExpenseItemShow";
import { IncomeItemList } from "./incomeItem/IncomeItemList";
import { IncomeItemCreate } from "./incomeItem/IncomeItemCreate";
import { IncomeItemEdit } from "./incomeItem/IncomeItemEdit";
import { IncomeItemShow } from "./incomeItem/IncomeItemShow";
import { FiscalYearList } from "./fiscalYear/FiscalYearList";
import { FiscalYearCreate } from "./fiscalYear/FiscalYearCreate";
import { FiscalYearEdit } from "./fiscalYear/FiscalYearEdit";
import { FiscalYearShow } from "./fiscalYear/FiscalYearShow";
import { FiscalWeekList } from "./fiscalWeek/FiscalWeekList";
import { FiscalWeekCreate } from "./fiscalWeek/FiscalWeekCreate";
import { FiscalWeekEdit } from "./fiscalWeek/FiscalWeekEdit";
import { FiscalWeekShow } from "./fiscalWeek/FiscalWeekShow";
import { PeriodList } from "./period/PeriodList";
import { PeriodCreate } from "./period/PeriodCreate";
import { PeriodEdit } from "./period/PeriodEdit";
import { PeriodShow } from "./period/PeriodShow";
import { PaymentVoucherList } from "./paymentVoucher/PaymentVoucherList";
import { PaymentVoucherCreate } from "./paymentVoucher/PaymentVoucherCreate";
import { PaymentVoucherEdit } from "./paymentVoucher/PaymentVoucherEdit";
import { PaymentVoucherShow } from "./paymentVoucher/PaymentVoucherShow";
import { RatingList } from "./rating/RatingList";
import { RatingCreate } from "./rating/RatingCreate";
import { RatingEdit } from "./rating/RatingEdit";
import { RatingShow } from "./rating/RatingShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { CustomerTypeList } from "./customerType/CustomerTypeList";
import { CustomerTypeCreate } from "./customerType/CustomerTypeCreate";
import { CustomerTypeEdit } from "./customerType/CustomerTypeEdit";
import { CustomerTypeShow } from "./customerType/CustomerTypeShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { SalePriceTypeList } from "./salePriceType/SalePriceTypeList";
import { SalePriceTypeCreate } from "./salePriceType/SalePriceTypeCreate";
import { SalePriceTypeEdit } from "./salePriceType/SalePriceTypeEdit";
import { SalePriceTypeShow } from "./salePriceType/SalePriceTypeShow";
import { CustomerCateogryList } from "./customerCateogry/CustomerCateogryList";
import { CustomerCateogryCreate } from "./customerCateogry/CustomerCateogryCreate";
import { CustomerCateogryEdit } from "./customerCateogry/CustomerCateogryEdit";
import { CustomerCateogryShow } from "./customerCateogry/CustomerCateogryShow";
import { InvoiceTypeList } from "./invoiceType/InvoiceTypeList";
import { InvoiceTypeCreate } from "./invoiceType/InvoiceTypeCreate";
import { InvoiceTypeEdit } from "./invoiceType/InvoiceTypeEdit";
import { InvoiceTypeShow } from "./invoiceType/InvoiceTypeShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { OrderStatusList } from "./orderStatus/OrderStatusList";
import { OrderStatusCreate } from "./orderStatus/OrderStatusCreate";
import { OrderStatusEdit } from "./orderStatus/OrderStatusEdit";
import { OrderStatusShow } from "./orderStatus/OrderStatusShow";
import { PaymentMethodList } from "./paymentMethod/PaymentMethodList";
import { PaymentMethodCreate } from "./paymentMethod/PaymentMethodCreate";
import { PaymentMethodEdit } from "./paymentMethod/PaymentMethodEdit";
import { PaymentMethodShow } from "./paymentMethod/PaymentMethodShow";
import { PaymentStatusList } from "./paymentStatus/PaymentStatusList";
import { PaymentStatusCreate } from "./paymentStatus/PaymentStatusCreate";
import { PaymentStatusEdit } from "./paymentStatus/PaymentStatusEdit";
import { PaymentStatusShow } from "./paymentStatus/PaymentStatusShow";
import { PaymentTermList } from "./paymentTerm/PaymentTermList";
import { PaymentTermCreate } from "./paymentTerm/PaymentTermCreate";
import { PaymentTermEdit } from "./paymentTerm/PaymentTermEdit";
import { PaymentTermShow } from "./paymentTerm/PaymentTermShow";
import { InstallmentSaleFeeList } from "./installmentSaleFee/InstallmentSaleFeeList";
import { InstallmentSaleFeeCreate } from "./installmentSaleFee/InstallmentSaleFeeCreate";
import { InstallmentSaleFeeEdit } from "./installmentSaleFee/InstallmentSaleFeeEdit";
import { InstallmentSaleFeeShow } from "./installmentSaleFee/InstallmentSaleFeeShow";
import { AttachmentList } from "./attachment/AttachmentList";
import { AttachmentCreate } from "./attachment/AttachmentCreate";
import { AttachmentEdit } from "./attachment/AttachmentEdit";
import { AttachmentShow } from "./attachment/AttachmentShow";
import { PaymentTypeList } from "./paymentType/PaymentTypeList";
import { PaymentTypeCreate } from "./paymentType/PaymentTypeCreate";
import { PaymentTypeEdit } from "./paymentType/PaymentTypeEdit";
import { PaymentTypeShow } from "./paymentType/PaymentTypeShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { AttributeList } from "./attribute/AttributeList";
import { AttributeCreate } from "./attribute/AttributeCreate";
import { AttributeEdit } from "./attribute/AttributeEdit";
import { AttributeShow } from "./attribute/AttributeShow";
import { AttributeValueList } from "./attributeValue/AttributeValueList";
import { AttributeValueCreate } from "./attributeValue/AttributeValueCreate";
import { AttributeValueEdit } from "./attributeValue/AttributeValueEdit";
import { AttributeValueShow } from "./attributeValue/AttributeValueShow";
import { BarcodeTypeList } from "./barcodeType/BarcodeTypeList";
import { BarcodeTypeCreate } from "./barcodeType/BarcodeTypeCreate";
import { BarcodeTypeEdit } from "./barcodeType/BarcodeTypeEdit";
import { BarcodeTypeShow } from "./barcodeType/BarcodeTypeShow";
import { BillOfMaterialTypeList } from "./billOfMaterialType/BillOfMaterialTypeList";
import { BillOfMaterialTypeCreate } from "./billOfMaterialType/BillOfMaterialTypeCreate";
import { BillOfMaterialTypeEdit } from "./billOfMaterialType/BillOfMaterialTypeEdit";
import { BillOfMaterialTypeShow } from "./billOfMaterialType/BillOfMaterialTypeShow";
import { BrandList } from "./brand/BrandList";
import { BrandCreate } from "./brand/BrandCreate";
import { BrandEdit } from "./brand/BrandEdit";
import { BrandShow } from "./brand/BrandShow";
import { PressTypeList } from "./pressType/PressTypeList";
import { PressTypeCreate } from "./pressType/PressTypeCreate";
import { PressTypeEdit } from "./pressType/PressTypeEdit";
import { PressTypeShow } from "./pressType/PressTypeShow";
import { ControlTypeList } from "./controlType/ControlTypeList";
import { ControlTypeCreate } from "./controlType/ControlTypeCreate";
import { ControlTypeEdit } from "./controlType/ControlTypeEdit";
import { ControlTypeShow } from "./controlType/ControlTypeShow";
import { ContractStatusList } from "./contractStatus/ContractStatusList";
import { ContractStatusCreate } from "./contractStatus/ContractStatusCreate";
import { ContractStatusEdit } from "./contractStatus/ContractStatusEdit";
import { ContractStatusShow } from "./contractStatus/ContractStatusShow";
import { DoorTypeList } from "./doorType/DoorTypeList";
import { DoorTypeCreate } from "./doorType/DoorTypeCreate";
import { DoorTypeEdit } from "./doorType/DoorTypeEdit";
import { DoorTypeShow } from "./doorType/DoorTypeShow";
import { ElevatorTypeList } from "./elevatorType/ElevatorTypeList";
import { ElevatorTypeCreate } from "./elevatorType/ElevatorTypeCreate";
import { ElevatorTypeEdit } from "./elevatorType/ElevatorTypeEdit";
import { ElevatorTypeShow } from "./elevatorType/ElevatorTypeShow";
import { FailureTypeList } from "./failureType/FailureTypeList";
import { FailureTypeCreate } from "./failureType/FailureTypeCreate";
import { FailureTypeEdit } from "./failureType/FailureTypeEdit";
import { FailureTypeShow } from "./failureType/FailureTypeShow";
import { ImageCategoryList } from "./imageCategory/ImageCategoryList";
import { ImageCategoryCreate } from "./imageCategory/ImageCategoryCreate";
import { ImageCategoryEdit } from "./imageCategory/ImageCategoryEdit";
import { ImageCategoryShow } from "./imageCategory/ImageCategoryShow";
import { CalendarList } from "./calendar/CalendarList";
import { CalendarCreate } from "./calendar/CalendarCreate";
import { CalendarEdit } from "./calendar/CalendarEdit";
import { CalendarShow } from "./calendar/CalendarShow";
import { CashTransferList } from "./cashTransfer/CashTransferList";
import { CashTransferCreate } from "./cashTransfer/CashTransferCreate";
import { CashTransferEdit } from "./cashTransfer/CashTransferEdit";
import { CashTransferShow } from "./cashTransfer/CashTransferShow";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { CompoundUnitList } from "./compoundUnit/CompoundUnitList";
import { CompoundUnitCreate } from "./compoundUnit/CompoundUnitCreate";
import { CompoundUnitEdit } from "./compoundUnit/CompoundUnitEdit";
import { CompoundUnitShow } from "./compoundUnit/CompoundUnitShow";
import { ContractPeriodList } from "./contractPeriod/ContractPeriodList";
import { ContractPeriodCreate } from "./contractPeriod/ContractPeriodCreate";
import { ContractPeriodEdit } from "./contractPeriod/ContractPeriodEdit";
import { ContractPeriodShow } from "./contractPeriod/ContractPeriodShow";
import { CurrencySettingList } from "./currencySetting/CurrencySettingList";
import { CurrencySettingCreate } from "./currencySetting/CurrencySettingCreate";
import { CurrencySettingEdit } from "./currencySetting/CurrencySettingEdit";
import { CurrencySettingShow } from "./currencySetting/CurrencySettingShow";
import { CustomerElevatorList } from "./customerElevator/CustomerElevatorList";
import { CustomerElevatorCreate } from "./customerElevator/CustomerElevatorCreate";
import { CustomerElevatorEdit } from "./customerElevator/CustomerElevatorEdit";
import { CustomerElevatorShow } from "./customerElevator/CustomerElevatorShow";
import { MotorTypeList } from "./motorType/MotorTypeList";
import { MotorTypeCreate } from "./motorType/MotorTypeCreate";
import { MotorTypeEdit } from "./motorType/MotorTypeEdit";
import { MotorTypeShow } from "./motorType/MotorTypeShow";
import { ElevatorList } from "./elevator/ElevatorList";
import { ElevatorCreate } from "./elevator/ElevatorCreate";
import { ElevatorEdit } from "./elevator/ElevatorEdit";
import { ElevatorShow } from "./elevator/ElevatorShow";
import { DebitList } from "./debit/DebitList";
import { DebitCreate } from "./debit/DebitCreate";
import { DebitEdit } from "./debit/DebitEdit";
import { DebitShow } from "./debit/DebitShow";
import { ElevatorSparePartList } from "./elevatorSparePart/ElevatorSparePartList";
import { ElevatorSparePartCreate } from "./elevatorSparePart/ElevatorSparePartCreate";
import { ElevatorSparePartEdit } from "./elevatorSparePart/ElevatorSparePartEdit";
import { ElevatorSparePartShow } from "./elevatorSparePart/ElevatorSparePartShow";
import { ElevatorStatusList } from "./elevatorStatus/ElevatorStatusList";
import { ElevatorStatusCreate } from "./elevatorStatus/ElevatorStatusCreate";
import { ElevatorStatusEdit } from "./elevatorStatus/ElevatorStatusEdit";
import { ElevatorStatusShow } from "./elevatorStatus/ElevatorStatusShow";
import { FailureList } from "./failure/FailureList";
import { FailureCreate } from "./failure/FailureCreate";
import { FailureEdit } from "./failure/FailureEdit";
import { FailureShow } from "./failure/FailureShow";
import { FailureReportingList } from "./failureReporting/FailureReportingList";
import { FailureReportingCreate } from "./failureReporting/FailureReportingCreate";
import { FailureReportingEdit } from "./failureReporting/FailureReportingEdit";
import { FailureReportingShow } from "./failureReporting/FailureReportingShow";
import { CustomerUserList } from "./customerUser/CustomerUserList";
import { CustomerUserCreate } from "./customerUser/CustomerUserCreate";
import { CustomerUserEdit } from "./customerUser/CustomerUserEdit";
import { CustomerUserShow } from "./customerUser/CustomerUserShow";
import { InstallationContractList } from "./installationContract/InstallationContractList";
import { InstallationContractCreate } from "./installationContract/InstallationContractCreate";
import { InstallationContractEdit } from "./installationContract/InstallationContractEdit";
import { InstallationContractShow } from "./installationContract/InstallationContractShow";
import { MaintenanceContractList } from "./maintenanceContract/MaintenanceContractList";
import { MaintenanceContractCreate } from "./maintenanceContract/MaintenanceContractCreate";
import { MaintenanceContractEdit } from "./maintenanceContract/MaintenanceContractEdit";
import { MaintenanceContractShow } from "./maintenanceContract/MaintenanceContractShow";
import { MaintenanceVisitList } from "./maintenanceVisit/MaintenanceVisitList";
import { MaintenanceVisitCreate } from "./maintenanceVisit/MaintenanceVisitCreate";
import { MaintenanceVisitEdit } from "./maintenanceVisit/MaintenanceVisitEdit";
import { MaintenanceVisitShow } from "./maintenanceVisit/MaintenanceVisitShow";
import { ProductTypeList } from "./productType/ProductTypeList";
import { ProductTypeCreate } from "./productType/ProductTypeCreate";
import { ProductTypeEdit } from "./productType/ProductTypeEdit";
import { ProductTypeShow } from "./productType/ProductTypeShow";
import { ProductCategoryList } from "./productCategory/ProductCategoryList";
import { ProductCategoryCreate } from "./productCategory/ProductCategoryCreate";
import { ProductCategoryEdit } from "./productCategory/ProductCategoryEdit";
import { ProductCategoryShow } from "./productCategory/ProductCategoryShow";
import { ProductDepartmentList } from "./productDepartment/ProductDepartmentList";
import { ProductDepartmentCreate } from "./productDepartment/ProductDepartmentCreate";
import { ProductDepartmentEdit } from "./productDepartment/ProductDepartmentEdit";
import { ProductDepartmentShow } from "./productDepartment/ProductDepartmentShow";
import { ProductGroupList } from "./productGroup/ProductGroupList";
import { ProductGroupCreate } from "./productGroup/ProductGroupCreate";
import { ProductGroupEdit } from "./productGroup/ProductGroupEdit";
import { ProductGroupShow } from "./productGroup/ProductGroupShow";
import { SaleTaxList } from "./saleTax/SaleTaxList";
import { SaleTaxCreate } from "./saleTax/SaleTaxCreate";
import { SaleTaxEdit } from "./saleTax/SaleTaxEdit";
import { SaleTaxShow } from "./saleTax/SaleTaxShow";
import { PeriodicMaintenanceOrderList } from "./periodicMaintenanceOrder/PeriodicMaintenanceOrderList";
import { PeriodicMaintenanceOrderCreate } from "./periodicMaintenanceOrder/PeriodicMaintenanceOrderCreate";
import { PeriodicMaintenanceOrderEdit } from "./periodicMaintenanceOrder/PeriodicMaintenanceOrderEdit";
import { PeriodicMaintenanceOrderShow } from "./periodicMaintenanceOrder/PeriodicMaintenanceOrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"hr"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="EmployeeClass"
          list={EmployeeClassList}
          edit={EmployeeClassEdit}
          create={EmployeeClassCreate}
          show={EmployeeClassShow}
        />
        <Resource
          name="SalaryItem"
          list={SalaryItemList}
          edit={SalaryItemEdit}
          create={SalaryItemCreate}
          show={SalaryItemShow}
        />
        <Resource
          name="FiscalMonth"
          list={FiscalMonthList}
          edit={FiscalMonthEdit}
          create={FiscalMonthCreate}
          show={FiscalMonthShow}
        />
        <Resource
          name="EmployeeSalary"
          list={EmployeeSalaryList}
          edit={EmployeeSalaryEdit}
          create={EmployeeSalaryCreate}
          show={EmployeeSalaryShow}
        />
        <Resource
          name="EmployeeSalaryDetail"
          list={EmployeeSalaryDetailList}
          edit={EmployeeSalaryDetailEdit}
          create={EmployeeSalaryDetailCreate}
          show={EmployeeSalaryDetailShow}
        />
        <Resource
          name="EmployeeClassSalaryItemValue"
          list={EmployeeClassSalaryItemValueList}
          edit={EmployeeClassSalaryItemValueEdit}
          create={EmployeeClassSalaryItemValueCreate}
          show={EmployeeClassSalaryItemValueShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="AccountType"
          list={AccountTypeList}
          edit={AccountTypeEdit}
          create={AccountTypeCreate}
          show={AccountTypeShow}
        />
        <Resource
          name="AccountCategory"
          list={AccountCategoryList}
          edit={AccountCategoryEdit}
          create={AccountCategoryCreate}
          show={AccountCategoryShow}
        />
        <Resource
          name="AccountTransaction"
          list={AccountTransactionList}
          edit={AccountTransactionEdit}
          create={AccountTransactionCreate}
          show={AccountTransactionShow}
        />
        <Resource
          name="TransactionType"
          list={TransactionTypeList}
          edit={TransactionTypeEdit}
          create={TransactionTypeCreate}
          show={TransactionTypeShow}
        />
        <Resource
          name="CostCenter"
          list={CostCenterList}
          edit={CostCenterEdit}
          create={CostCenterCreate}
          show={CostCenterShow}
        />
        <Resource
          name="StoreType"
          list={StoreTypeList}
          edit={StoreTypeEdit}
          create={StoreTypeCreate}
          show={StoreTypeShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="Office"
          list={OfficeList}
          edit={OfficeEdit}
          create={OfficeCreate}
          show={OfficeShow}
        />
        <Resource
          name="AccountTransactionDetail"
          list={AccountTransactionDetailList}
          edit={AccountTransactionDetailEdit}
          create={AccountTransactionDetailCreate}
          show={AccountTransactionDetailShow}
        />
        <Resource
          name="Bank"
          list={BankList}
          edit={BankEdit}
          create={BankCreate}
          show={BankShow}
        />
        <Resource
          name="BankType"
          list={BankTypeList}
          edit={BankTypeEdit}
          create={BankTypeCreate}
          show={BankTypeShow}
        />
        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
        />
        <Resource
          name="State"
          list={StateList}
          edit={StateEdit}
          create={StateCreate}
          show={StateShow}
        />
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="BankAccount"
          list={BankAccountList}
          edit={BankAccountEdit}
          create={BankAccountCreate}
          show={BankAccountShow}
        />
        <Resource
          name="BankBranch"
          list={BankBranchList}
          edit={BankBranchEdit}
          create={BankBranchCreate}
          show={BankBranchShow}
        />
        <Resource
          name="CashRepository"
          list={CashRepositoryList}
          edit={CashRepositoryEdit}
          create={CashRepositoryCreate}
          show={CashRepositoryShow}
        />
        <Resource
          name="ReceiptVoucher"
          list={ReceiptVoucherList}
          edit={ReceiptVoucherEdit}
          create={ReceiptVoucherCreate}
          show={ReceiptVoucherShow}
        />
        <Resource
          name="VoucherType"
          list={VoucherTypeList}
          edit={VoucherTypeEdit}
          create={VoucherTypeCreate}
          show={VoucherTypeShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="ExchangeRate"
          list={ExchangeRateList}
          edit={ExchangeRateEdit}
          create={ExchangeRateCreate}
          show={ExchangeRateShow}
        />
        <Resource
          name="ExchangeRateDetail"
          list={ExchangeRateDetailList}
          edit={ExchangeRateDetailEdit}
          create={ExchangeRateDetailCreate}
          show={ExchangeRateDetailShow}
        />
        <Resource
          name="ExpenseItem"
          list={ExpenseItemList}
          edit={ExpenseItemEdit}
          create={ExpenseItemCreate}
          show={ExpenseItemShow}
        />
        <Resource
          name="IncomeItem"
          list={IncomeItemList}
          edit={IncomeItemEdit}
          create={IncomeItemCreate}
          show={IncomeItemShow}
        />
        <Resource
          name="FiscalYear"
          list={FiscalYearList}
          edit={FiscalYearEdit}
          create={FiscalYearCreate}
          show={FiscalYearShow}
        />
        <Resource
          name="FiscalWeek"
          list={FiscalWeekList}
          edit={FiscalWeekEdit}
          create={FiscalWeekCreate}
          show={FiscalWeekShow}
        />
        <Resource
          name="Period"
          list={PeriodList}
          edit={PeriodEdit}
          create={PeriodCreate}
          show={PeriodShow}
        />
        <Resource
          name="PaymentVoucher"
          list={PaymentVoucherList}
          edit={PaymentVoucherEdit}
          create={PaymentVoucherCreate}
          show={PaymentVoucherShow}
        />
        <Resource
          name="Rating"
          list={RatingList}
          edit={RatingEdit}
          create={RatingCreate}
          show={RatingShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="CustomerType"
          list={CustomerTypeList}
          edit={CustomerTypeEdit}
          create={CustomerTypeCreate}
          show={CustomerTypeShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="SalePriceType"
          list={SalePriceTypeList}
          edit={SalePriceTypeEdit}
          create={SalePriceTypeCreate}
          show={SalePriceTypeShow}
        />
        <Resource
          name="CustomerCateogry"
          list={CustomerCateogryList}
          edit={CustomerCateogryEdit}
          create={CustomerCateogryCreate}
          show={CustomerCateogryShow}
        />
        <Resource
          name="InvoiceType"
          list={InvoiceTypeList}
          edit={InvoiceTypeEdit}
          create={InvoiceTypeCreate}
          show={InvoiceTypeShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="OrderStatus"
          list={OrderStatusList}
          edit={OrderStatusEdit}
          create={OrderStatusCreate}
          show={OrderStatusShow}
        />
        <Resource
          name="PaymentMethod"
          list={PaymentMethodList}
          edit={PaymentMethodEdit}
          create={PaymentMethodCreate}
          show={PaymentMethodShow}
        />
        <Resource
          name="PaymentStatus"
          list={PaymentStatusList}
          edit={PaymentStatusEdit}
          create={PaymentStatusCreate}
          show={PaymentStatusShow}
        />
        <Resource
          name="PaymentTerm"
          list={PaymentTermList}
          edit={PaymentTermEdit}
          create={PaymentTermCreate}
          show={PaymentTermShow}
        />
        <Resource
          name="InstallmentSaleFee"
          list={InstallmentSaleFeeList}
          edit={InstallmentSaleFeeEdit}
          create={InstallmentSaleFeeCreate}
          show={InstallmentSaleFeeShow}
        />
        <Resource
          name="Attachment"
          list={AttachmentList}
          edit={AttachmentEdit}
          create={AttachmentCreate}
          show={AttachmentShow}
        />
        <Resource
          name="PaymentType"
          list={PaymentTypeList}
          edit={PaymentTypeEdit}
          create={PaymentTypeCreate}
          show={PaymentTypeShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="Attribute"
          list={AttributeList}
          edit={AttributeEdit}
          create={AttributeCreate}
          show={AttributeShow}
        />
        <Resource
          name="AttributeValue"
          list={AttributeValueList}
          edit={AttributeValueEdit}
          create={AttributeValueCreate}
          show={AttributeValueShow}
        />
        <Resource
          name="BarcodeType"
          list={BarcodeTypeList}
          edit={BarcodeTypeEdit}
          create={BarcodeTypeCreate}
          show={BarcodeTypeShow}
        />
        <Resource
          name="BillOfMaterialType"
          list={BillOfMaterialTypeList}
          edit={BillOfMaterialTypeEdit}
          create={BillOfMaterialTypeCreate}
          show={BillOfMaterialTypeShow}
        />
        <Resource
          name="Brand"
          list={BrandList}
          edit={BrandEdit}
          create={BrandCreate}
          show={BrandShow}
        />
        <Resource
          name="PressType"
          list={PressTypeList}
          edit={PressTypeEdit}
          create={PressTypeCreate}
          show={PressTypeShow}
        />
        <Resource
          name="ControlType"
          list={ControlTypeList}
          edit={ControlTypeEdit}
          create={ControlTypeCreate}
          show={ControlTypeShow}
        />
        <Resource
          name="ContractStatus"
          list={ContractStatusList}
          edit={ContractStatusEdit}
          create={ContractStatusCreate}
          show={ContractStatusShow}
        />
        <Resource
          name="DoorType"
          list={DoorTypeList}
          edit={DoorTypeEdit}
          create={DoorTypeCreate}
          show={DoorTypeShow}
        />
        <Resource
          name="ElevatorType"
          list={ElevatorTypeList}
          edit={ElevatorTypeEdit}
          create={ElevatorTypeCreate}
          show={ElevatorTypeShow}
        />
        <Resource
          name="FailureType"
          list={FailureTypeList}
          edit={FailureTypeEdit}
          create={FailureTypeCreate}
          show={FailureTypeShow}
        />
        <Resource
          name="ImageCategory"
          list={ImageCategoryList}
          edit={ImageCategoryEdit}
          create={ImageCategoryCreate}
          show={ImageCategoryShow}
        />
        <Resource
          name="Calendar"
          list={CalendarList}
          edit={CalendarEdit}
          create={CalendarCreate}
          show={CalendarShow}
        />
        <Resource
          name="CashTransfer"
          list={CashTransferList}
          edit={CashTransferEdit}
          create={CashTransferCreate}
          show={CashTransferShow}
        />
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="CompoundUnit"
          list={CompoundUnitList}
          edit={CompoundUnitEdit}
          create={CompoundUnitCreate}
          show={CompoundUnitShow}
        />
        <Resource
          name="ContractPeriod"
          list={ContractPeriodList}
          edit={ContractPeriodEdit}
          create={ContractPeriodCreate}
          show={ContractPeriodShow}
        />
        <Resource
          name="CurrencySetting"
          list={CurrencySettingList}
          edit={CurrencySettingEdit}
          create={CurrencySettingCreate}
          show={CurrencySettingShow}
        />
        <Resource
          name="CustomerElevator"
          list={CustomerElevatorList}
          edit={CustomerElevatorEdit}
          create={CustomerElevatorCreate}
          show={CustomerElevatorShow}
        />
        <Resource
          name="MotorType"
          list={MotorTypeList}
          edit={MotorTypeEdit}
          create={MotorTypeCreate}
          show={MotorTypeShow}
        />
        <Resource
          name="Elevator"
          list={ElevatorList}
          edit={ElevatorEdit}
          create={ElevatorCreate}
          show={ElevatorShow}
        />
        <Resource
          name="Debit"
          list={DebitList}
          edit={DebitEdit}
          create={DebitCreate}
          show={DebitShow}
        />
        <Resource
          name="ElevatorSparePart"
          list={ElevatorSparePartList}
          edit={ElevatorSparePartEdit}
          create={ElevatorSparePartCreate}
          show={ElevatorSparePartShow}
        />
        <Resource
          name="ElevatorStatus"
          list={ElevatorStatusList}
          edit={ElevatorStatusEdit}
          create={ElevatorStatusCreate}
          show={ElevatorStatusShow}
        />
        <Resource
          name="Failure"
          list={FailureList}
          edit={FailureEdit}
          create={FailureCreate}
          show={FailureShow}
        />
        <Resource
          name="FailureReporting"
          list={FailureReportingList}
          edit={FailureReportingEdit}
          create={FailureReportingCreate}
          show={FailureReportingShow}
        />
        <Resource
          name="CustomerUser"
          list={CustomerUserList}
          edit={CustomerUserEdit}
          create={CustomerUserCreate}
          show={CustomerUserShow}
        />
        <Resource
          name="InstallationContract"
          list={InstallationContractList}
          edit={InstallationContractEdit}
          create={InstallationContractCreate}
          show={InstallationContractShow}
        />
        <Resource
          name="MaintenanceContract"
          list={MaintenanceContractList}
          edit={MaintenanceContractEdit}
          create={MaintenanceContractCreate}
          show={MaintenanceContractShow}
        />
        <Resource
          name="MaintenanceVisit"
          list={MaintenanceVisitList}
          edit={MaintenanceVisitEdit}
          create={MaintenanceVisitCreate}
          show={MaintenanceVisitShow}
        />
        <Resource
          name="ProductType"
          list={ProductTypeList}
          edit={ProductTypeEdit}
          create={ProductTypeCreate}
          show={ProductTypeShow}
        />
        <Resource
          name="ProductCategory"
          list={ProductCategoryList}
          edit={ProductCategoryEdit}
          create={ProductCategoryCreate}
          show={ProductCategoryShow}
        />
        <Resource
          name="ProductDepartment"
          list={ProductDepartmentList}
          edit={ProductDepartmentEdit}
          create={ProductDepartmentCreate}
          show={ProductDepartmentShow}
        />
        <Resource
          name="ProductGroup"
          list={ProductGroupList}
          edit={ProductGroupEdit}
          create={ProductGroupCreate}
          show={ProductGroupShow}
        />
        <Resource
          name="SaleTax"
          list={SaleTaxList}
          edit={SaleTaxEdit}
          create={SaleTaxCreate}
          show={SaleTaxShow}
        />
        <Resource
          name="PeriodicMaintenanceOrder"
          list={PeriodicMaintenanceOrderList}
          edit={PeriodicMaintenanceOrderEdit}
          create={PeriodicMaintenanceOrderCreate}
          show={PeriodicMaintenanceOrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
