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
      </Admin>
    </div>
  );
};

export default App;
