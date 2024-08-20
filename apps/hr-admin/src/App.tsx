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
import { PrintTemplateGroupList } from "./printTemplateGroup/PrintTemplateGroupList";
import { PrintTemplateGroupCreate } from "./printTemplateGroup/PrintTemplateGroupCreate";
import { PrintTemplateGroupEdit } from "./printTemplateGroup/PrintTemplateGroupEdit";
import { PrintTemplateGroupShow } from "./printTemplateGroup/PrintTemplateGroupShow";
import { PrintTemplateList } from "./printTemplate/PrintTemplateList";
import { PrintTemplateCreate } from "./printTemplate/PrintTemplateCreate";
import { PrintTemplateEdit } from "./printTemplate/PrintTemplateEdit";
import { PrintTemplateShow } from "./printTemplate/PrintTemplateShow";
import { PrintTemplateContentList } from "./printTemplateContent/PrintTemplateContentList";
import { PrintTemplateContentCreate } from "./printTemplateContent/PrintTemplateContentCreate";
import { PrintTemplateContentEdit } from "./printTemplateContent/PrintTemplateContentEdit";
import { PrintTemplateContentShow } from "./printTemplateContent/PrintTemplateContentShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { SalePriceTypeList } from "./salePriceType/SalePriceTypeList";
import { SalePriceTypeCreate } from "./salePriceType/SalePriceTypeCreate";
import { SalePriceTypeEdit } from "./salePriceType/SalePriceTypeEdit";
import { SalePriceTypeShow } from "./salePriceType/SalePriceTypeShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { OrderStatusList } from "./orderStatus/OrderStatusList";
import { OrderStatusCreate } from "./orderStatus/OrderStatusCreate";
import { OrderStatusEdit } from "./orderStatus/OrderStatusEdit";
import { OrderStatusShow } from "./orderStatus/OrderStatusShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { WorkCenterList } from "./workCenter/WorkCenterList";
import { WorkCenterCreate } from "./workCenter/WorkCenterCreate";
import { WorkCenterEdit } from "./workCenter/WorkCenterEdit";
import { WorkCenterShow } from "./workCenter/WorkCenterShow";
import { WorkCenterRoutingList } from "./workCenterRouting/WorkCenterRoutingList";
import { WorkCenterRoutingCreate } from "./workCenterRouting/WorkCenterRoutingCreate";
import { WorkCenterRoutingEdit } from "./workCenterRouting/WorkCenterRoutingEdit";
import { WorkCenterRoutingShow } from "./workCenterRouting/WorkCenterRoutingShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductTypeList } from "./productType/ProductTypeList";
import { ProductTypeCreate } from "./productType/ProductTypeCreate";
import { ProductTypeEdit } from "./productType/ProductTypeEdit";
import { ProductTypeShow } from "./productType/ProductTypeShow";
import { ProductDepartmentList } from "./productDepartment/ProductDepartmentList";
import { ProductDepartmentCreate } from "./productDepartment/ProductDepartmentCreate";
import { ProductDepartmentEdit } from "./productDepartment/ProductDepartmentEdit";
import { ProductDepartmentShow } from "./productDepartment/ProductDepartmentShow";
import { ProductGroupList } from "./productGroup/ProductGroupList";
import { ProductGroupCreate } from "./productGroup/ProductGroupCreate";
import { ProductGroupEdit } from "./productGroup/ProductGroupEdit";
import { ProductGroupShow } from "./productGroup/ProductGroupShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { SaleTaxList } from "./saleTax/SaleTaxList";
import { SaleTaxCreate } from "./saleTax/SaleTaxCreate";
import { SaleTaxEdit } from "./saleTax/SaleTaxEdit";
import { SaleTaxShow } from "./saleTax/SaleTaxShow";
import { ProductCategoryList } from "./productCategory/ProductCategoryList";
import { ProductCategoryCreate } from "./productCategory/ProductCategoryCreate";
import { ProductCategoryEdit } from "./productCategory/ProductCategoryEdit";
import { ProductCategoryShow } from "./productCategory/ProductCategoryShow";
import { ProductVariantList } from "./productVariant/ProductVariantList";
import { ProductVariantCreate } from "./productVariant/ProductVariantCreate";
import { ProductVariantEdit } from "./productVariant/ProductVariantEdit";
import { ProductVariantShow } from "./productVariant/ProductVariantShow";
import { ProductionDocumentList } from "./productionDocument/ProductionDocumentList";
import { ProductionDocumentCreate } from "./productionDocument/ProductionDocumentCreate";
import { ProductionDocumentEdit } from "./productionDocument/ProductionDocumentEdit";
import { ProductionDocumentShow } from "./productionDocument/ProductionDocumentShow";
import { BillOfMaterialList } from "./billOfMaterial/BillOfMaterialList";
import { BillOfMaterialCreate } from "./billOfMaterial/BillOfMaterialCreate";
import { BillOfMaterialEdit } from "./billOfMaterial/BillOfMaterialEdit";
import { BillOfMaterialShow } from "./billOfMaterial/BillOfMaterialShow";
import { BillOfMaterialDetailList } from "./billOfMaterialDetail/BillOfMaterialDetailList";
import { BillOfMaterialDetailCreate } from "./billOfMaterialDetail/BillOfMaterialDetailCreate";
import { BillOfMaterialDetailEdit } from "./billOfMaterialDetail/BillOfMaterialDetailEdit";
import { BillOfMaterialDetailShow } from "./billOfMaterialDetail/BillOfMaterialDetailShow";
import { ProductBarcodeList } from "./productBarcode/ProductBarcodeList";
import { ProductBarcodeCreate } from "./productBarcode/ProductBarcodeCreate";
import { ProductBarcodeEdit } from "./productBarcode/ProductBarcodeEdit";
import { ProductBarcodeShow } from "./productBarcode/ProductBarcodeShow";
import { ProductionOrderList } from "./productionOrder/ProductionOrderList";
import { ProductionOrderCreate } from "./productionOrder/ProductionOrderCreate";
import { ProductionOrderEdit } from "./productionOrder/ProductionOrderEdit";
import { ProductionOrderShow } from "./productionOrder/ProductionOrderShow";
import { ProductionAvailabilityList } from "./productionAvailability/ProductionAvailabilityList";
import { ProductionAvailabilityCreate } from "./productionAvailability/ProductionAvailabilityCreate";
import { ProductionAvailabilityEdit } from "./productionAvailability/ProductionAvailabilityEdit";
import { ProductionAvailabilityShow } from "./productionAvailability/ProductionAvailabilityShow";
import { ProductUnitList } from "./productUnit/ProductUnitList";
import { ProductUnitCreate } from "./productUnit/ProductUnitCreate";
import { ProductUnitEdit } from "./productUnit/ProductUnitEdit";
import { ProductUnitShow } from "./productUnit/ProductUnitShow";
import { PurchaseList } from "./purchase/PurchaseList";
import { PurchaseCreate } from "./purchase/PurchaseCreate";
import { PurchaseEdit } from "./purchase/PurchaseEdit";
import { PurchaseShow } from "./purchase/PurchaseShow";
import { InvoiceTypeList } from "./invoiceType/InvoiceTypeList";
import { InvoiceTypeCreate } from "./invoiceType/InvoiceTypeCreate";
import { InvoiceTypeEdit } from "./invoiceType/InvoiceTypeEdit";
import { InvoiceTypeShow } from "./invoiceType/InvoiceTypeShow";
import { PaymentTypeList } from "./paymentType/PaymentTypeList";
import { PaymentTypeCreate } from "./paymentType/PaymentTypeCreate";
import { PaymentTypeEdit } from "./paymentType/PaymentTypeEdit";
import { PaymentTypeShow } from "./paymentType/PaymentTypeShow";
import { PaymentTermList } from "./paymentTerm/PaymentTermList";
import { PaymentTermCreate } from "./paymentTerm/PaymentTermCreate";
import { PaymentTermEdit } from "./paymentTerm/PaymentTermEdit";
import { PaymentTermShow } from "./paymentTerm/PaymentTermShow";
import { PeriodList } from "./period/PeriodList";
import { PeriodCreate } from "./period/PeriodCreate";
import { PeriodEdit } from "./period/PeriodEdit";
import { PeriodShow } from "./period/PeriodShow";
import { InstallmentSaleFeeList } from "./installmentSaleFee/InstallmentSaleFeeList";
import { InstallmentSaleFeeCreate } from "./installmentSaleFee/InstallmentSaleFeeCreate";
import { InstallmentSaleFeeEdit } from "./installmentSaleFee/InstallmentSaleFeeEdit";
import { InstallmentSaleFeeShow } from "./installmentSaleFee/InstallmentSaleFeeShow";
import { PurchasePriceTypeList } from "./purchasePriceType/PurchasePriceTypeList";
import { PurchasePriceTypeCreate } from "./purchasePriceType/PurchasePriceTypeCreate";
import { PurchasePriceTypeEdit } from "./purchasePriceType/PurchasePriceTypeEdit";
import { PurchasePriceTypeShow } from "./purchasePriceType/PurchasePriceTypeShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { CashRepositoryList } from "./cashRepository/CashRepositoryList";
import { CashRepositoryCreate } from "./cashRepository/CashRepositoryCreate";
import { CashRepositoryEdit } from "./cashRepository/CashRepositoryEdit";
import { CashRepositoryShow } from "./cashRepository/CashRepositoryShow";
import { PurchaseDetailList } from "./purchaseDetail/PurchaseDetailList";
import { PurchaseDetailCreate } from "./purchaseDetail/PurchaseDetailCreate";
import { PurchaseDetailEdit } from "./purchaseDetail/PurchaseDetailEdit";
import { PurchaseDetailShow } from "./purchaseDetail/PurchaseDetailShow";
import { PurchaseReturnList } from "./purchaseReturn/PurchaseReturnList";
import { PurchaseReturnCreate } from "./purchaseReturn/PurchaseReturnCreate";
import { PurchaseReturnEdit } from "./purchaseReturn/PurchaseReturnEdit";
import { PurchaseReturnShow } from "./purchaseReturn/PurchaseReturnShow";
import { PurchaseReturnDetailList } from "./purchaseReturnDetail/PurchaseReturnDetailList";
import { PurchaseReturnDetailCreate } from "./purchaseReturnDetail/PurchaseReturnDetailCreate";
import { PurchaseReturnDetailEdit } from "./purchaseReturnDetail/PurchaseReturnDetailEdit";
import { PurchaseReturnDetailShow } from "./purchaseReturnDetail/PurchaseReturnDetailShow";
import { ResourceTypeList } from "./resourceType/ResourceTypeList";
import { ResourceTypeCreate } from "./resourceType/ResourceTypeCreate";
import { ResourceTypeEdit } from "./resourceType/ResourceTypeEdit";
import { ResourceTypeShow } from "./resourceType/ResourceTypeShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { RoleGroupList } from "./roleGroup/RoleGroupList";
import { RoleGroupCreate } from "./roleGroup/RoleGroupCreate";
import { RoleGroupEdit } from "./roleGroup/RoleGroupEdit";
import { RoleGroupShow } from "./roleGroup/RoleGroupShow";
import { SalaryItemGroupList } from "./salaryItemGroup/SalaryItemGroupList";
import { SalaryItemGroupCreate } from "./salaryItemGroup/SalaryItemGroupCreate";
import { SalaryItemGroupEdit } from "./salaryItemGroup/SalaryItemGroupEdit";
import { SalaryItemGroupShow } from "./salaryItemGroup/SalaryItemGroupShow";
import { SalaryItemTypeList } from "./salaryItemType/SalaryItemTypeList";
import { SalaryItemTypeCreate } from "./salaryItemType/SalaryItemTypeCreate";
import { SalaryItemTypeEdit } from "./salaryItemType/SalaryItemTypeEdit";
import { SalaryItemTypeShow } from "./salaryItemType/SalaryItemTypeShow";
import { SalaryLawList } from "./salaryLaw/SalaryLawList";
import { SalaryLawCreate } from "./salaryLaw/SalaryLawCreate";
import { SalaryLawEdit } from "./salaryLaw/SalaryLawEdit";
import { SalaryLawShow } from "./salaryLaw/SalaryLawShow";
import { SalaryItemList } from "./salaryItem/SalaryItemList";
import { SalaryItemCreate } from "./salaryItem/SalaryItemCreate";
import { SalaryItemEdit } from "./salaryItem/SalaryItemEdit";
import { SalaryItemShow } from "./salaryItem/SalaryItemShow";
import { SaleTeamList } from "./saleTeam/SaleTeamList";
import { SaleTeamCreate } from "./saleTeam/SaleTeamCreate";
import { SaleTeamEdit } from "./saleTeam/SaleTeamEdit";
import { SaleTeamShow } from "./saleTeam/SaleTeamShow";
import { ScrapReasonList } from "./scrapReason/ScrapReasonList";
import { ScrapReasonCreate } from "./scrapReason/ScrapReasonCreate";
import { ScrapReasonEdit } from "./scrapReason/ScrapReasonEdit";
import { ScrapReasonShow } from "./scrapReason/ScrapReasonShow";
import { SalePersonList } from "./salePerson/SalePersonList";
import { SalePersonCreate } from "./salePerson/SalePersonCreate";
import { SalePersonEdit } from "./salePerson/SalePersonEdit";
import { SalePersonShow } from "./salePerson/SalePersonShow";
import { EmployeeDepartmentList } from "./employeeDepartment/EmployeeDepartmentList";
import { EmployeeDepartmentCreate } from "./employeeDepartment/EmployeeDepartmentCreate";
import { EmployeeDepartmentEdit } from "./employeeDepartment/EmployeeDepartmentEdit";
import { EmployeeDepartmentShow } from "./employeeDepartment/EmployeeDepartmentShow";
import { EmployeeClassList } from "./employeeClass/EmployeeClassList";
import { EmployeeClassCreate } from "./employeeClass/EmployeeClassCreate";
import { EmployeeClassEdit } from "./employeeClass/EmployeeClassEdit";
import { EmployeeClassShow } from "./employeeClass/EmployeeClassShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { SaleList } from "./sale/SaleList";
import { SaleCreate } from "./sale/SaleCreate";
import { SaleEdit } from "./sale/SaleEdit";
import { SaleShow } from "./sale/SaleShow";
import { SaleDetailList } from "./saleDetail/SaleDetailList";
import { SaleDetailCreate } from "./saleDetail/SaleDetailCreate";
import { SaleDetailEdit } from "./saleDetail/SaleDetailEdit";
import { SaleDetailShow } from "./saleDetail/SaleDetailShow";
import { SaleQuotationList } from "./saleQuotation/SaleQuotationList";
import { SaleQuotationCreate } from "./saleQuotation/SaleQuotationCreate";
import { SaleQuotationEdit } from "./saleQuotation/SaleQuotationEdit";
import { SaleQuotationShow } from "./saleQuotation/SaleQuotationShow";
import { SaleReturnList } from "./saleReturn/SaleReturnList";
import { SaleReturnCreate } from "./saleReturn/SaleReturnCreate";
import { SaleReturnEdit } from "./saleReturn/SaleReturnEdit";
import { SaleReturnShow } from "./saleReturn/SaleReturnShow";
import { SaleReturnDetailList } from "./saleReturnDetail/SaleReturnDetailList";
import { SaleReturnDetailCreate } from "./saleReturnDetail/SaleReturnDetailCreate";
import { SaleReturnDetailEdit } from "./saleReturnDetail/SaleReturnDetailEdit";
import { SaleReturnDetailShow } from "./saleReturnDetail/SaleReturnDetailShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { ApplicationDependencyList } from "./applicationDependency/ApplicationDependencyList";
import { ApplicationDependencyCreate } from "./applicationDependency/ApplicationDependencyCreate";
import { ApplicationDependencyEdit } from "./applicationDependency/ApplicationDependencyEdit";
import { ApplicationDependencyShow } from "./applicationDependency/ApplicationDependencyShow";
import { SaleQuotationDetailList } from "./saleQuotationDetail/SaleQuotationDetailList";
import { SaleQuotationDetailCreate } from "./saleQuotationDetail/SaleQuotationDetailCreate";
import { SaleQuotationDetailEdit } from "./saleQuotationDetail/SaleQuotationDetailEdit";
import { SaleQuotationDetailShow } from "./saleQuotationDetail/SaleQuotationDetailShow";
import { SaleOrderList } from "./saleOrder/SaleOrderList";
import { SaleOrderCreate } from "./saleOrder/SaleOrderCreate";
import { SaleOrderEdit } from "./saleOrder/SaleOrderEdit";
import { SaleOrderShow } from "./saleOrder/SaleOrderShow";
import { SaleOrderDetailList } from "./saleOrderDetail/SaleOrderDetailList";
import { SaleOrderDetailCreate } from "./saleOrderDetail/SaleOrderDetailCreate";
import { SaleOrderDetailEdit } from "./saleOrderDetail/SaleOrderDetailEdit";
import { SaleOrderDetailShow } from "./saleOrderDetail/SaleOrderDetailShow";
import { PaymentStatusList } from "./paymentStatus/PaymentStatusList";
import { PaymentStatusCreate } from "./paymentStatus/PaymentStatusCreate";
import { PaymentStatusEdit } from "./paymentStatus/PaymentStatusEdit";
import { PaymentStatusShow } from "./paymentStatus/PaymentStatusShow";
import { ShippingStatusList } from "./shippingStatus/ShippingStatusList";
import { ShippingStatusCreate } from "./shippingStatus/ShippingStatusCreate";
import { ShippingStatusEdit } from "./shippingStatus/ShippingStatusEdit";
import { ShippingStatusShow } from "./shippingStatus/ShippingStatusShow";
import { SalePaymentList } from "./salePayment/SalePaymentList";
import { SalePaymentCreate } from "./salePayment/SalePaymentCreate";
import { SalePaymentEdit } from "./salePayment/SalePaymentEdit";
import { SalePaymentShow } from "./salePayment/SalePaymentShow";
import { PaymentMethodList } from "./paymentMethod/PaymentMethodList";
import { PaymentMethodCreate } from "./paymentMethod/PaymentMethodCreate";
import { PaymentMethodEdit } from "./paymentMethod/PaymentMethodEdit";
import { PaymentMethodShow } from "./paymentMethod/PaymentMethodShow";
import { BankList } from "./bank/BankList";
import { BankCreate } from "./bank/BankCreate";
import { BankEdit } from "./bank/BankEdit";
import { BankShow } from "./bank/BankShow";
import { BankTypeList } from "./bankType/BankTypeList";
import { BankTypeCreate } from "./bankType/BankTypeCreate";
import { BankTypeEdit } from "./bankType/BankTypeEdit";
import { BankTypeShow } from "./bankType/BankTypeShow";
import { BankBranchList } from "./bankBranch/BankBranchList";
import { BankBranchCreate } from "./bankBranch/BankBranchCreate";
import { BankBranchEdit } from "./bankBranch/BankBranchEdit";
import { BankBranchShow } from "./bankBranch/BankBranchShow";
import { SettingGroupList } from "./settingGroup/SettingGroupList";
import { SettingGroupCreate } from "./settingGroup/SettingGroupCreate";
import { SettingGroupEdit } from "./settingGroup/SettingGroupEdit";
import { SettingGroupShow } from "./settingGroup/SettingGroupShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { ShiftList } from "./shift/ShiftList";
import { ShiftCreate } from "./shift/ShiftCreate";
import { ShiftEdit } from "./shift/ShiftEdit";
import { ShiftShow } from "./shift/ShiftShow";
import { StoreLocationList } from "./storeLocation/StoreLocationList";
import { StoreLocationCreate } from "./storeLocation/StoreLocationCreate";
import { StoreLocationEdit } from "./storeLocation/StoreLocationEdit";
import { StoreLocationShow } from "./storeLocation/StoreLocationShow";
import { StoreTypeList } from "./storeType/StoreTypeList";
import { StoreTypeCreate } from "./storeType/StoreTypeCreate";
import { StoreTypeEdit } from "./storeType/StoreTypeEdit";
import { StoreTypeShow } from "./storeType/StoreTypeShow";
import { ReceiptVoucherList } from "./receiptVoucher/ReceiptVoucherList";
import { ReceiptVoucherCreate } from "./receiptVoucher/ReceiptVoucherCreate";
import { ReceiptVoucherEdit } from "./receiptVoucher/ReceiptVoucherEdit";
import { ReceiptVoucherShow } from "./receiptVoucher/ReceiptVoucherShow";
import { VoucherTypeList } from "./voucherType/VoucherTypeList";
import { VoucherTypeCreate } from "./voucherType/VoucherTypeCreate";
import { VoucherTypeEdit } from "./voucherType/VoucherTypeEdit";
import { VoucherTypeShow } from "./voucherType/VoucherTypeShow";
import { AccountTransactionList } from "./accountTransaction/AccountTransactionList";
import { AccountTransactionCreate } from "./accountTransaction/AccountTransactionCreate";
import { AccountTransactionEdit } from "./accountTransaction/AccountTransactionEdit";
import { AccountTransactionShow } from "./accountTransaction/AccountTransactionShow";
import { ExpenseItemList } from "./expenseItem/ExpenseItemList";
import { ExpenseItemCreate } from "./expenseItem/ExpenseItemCreate";
import { ExpenseItemEdit } from "./expenseItem/ExpenseItemEdit";
import { ExpenseItemShow } from "./expenseItem/ExpenseItemShow";
import { PaymentVoucherList } from "./paymentVoucher/PaymentVoucherList";
import { PaymentVoucherCreate } from "./paymentVoucher/PaymentVoucherCreate";
import { PaymentVoucherEdit } from "./paymentVoucher/PaymentVoucherEdit";
import { PaymentVoucherShow } from "./paymentVoucher/PaymentVoucherShow";
import { TimeModeList } from "./timeMode/TimeModeList";
import { TimeModeCreate } from "./timeMode/TimeModeCreate";
import { TimeModeEdit } from "./timeMode/TimeModeEdit";
import { TimeModeShow } from "./timeMode/TimeModeShow";
import { TimeoffTypeList } from "./timeoffType/TimeoffTypeList";
import { TimeoffTypeCreate } from "./timeoffType/TimeoffTypeCreate";
import { TimeoffTypeEdit } from "./timeoffType/TimeoffTypeEdit";
import { TimeoffTypeShow } from "./timeoffType/TimeoffTypeShow";
import { TimezoneList } from "./timezone/TimezoneList";
import { TimezoneCreate } from "./timezone/TimezoneCreate";
import { TimezoneEdit } from "./timezone/TimezoneEdit";
import { TimezoneShow } from "./timezone/TimezoneShow";
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
          name="PrintTemplateGroup"
          list={PrintTemplateGroupList}
          edit={PrintTemplateGroupEdit}
          create={PrintTemplateGroupCreate}
          show={PrintTemplateGroupShow}
        />
        <Resource
          name="PrintTemplate"
          list={PrintTemplateList}
          edit={PrintTemplateEdit}
          create={PrintTemplateCreate}
          show={PrintTemplateShow}
        />
        <Resource
          name="PrintTemplateContent"
          list={PrintTemplateContentList}
          edit={PrintTemplateContentEdit}
          create={PrintTemplateContentCreate}
          show={PrintTemplateContentShow}
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
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="OrderStatus"
          list={OrderStatusList}
          edit={OrderStatusEdit}
          create={OrderStatusCreate}
          show={OrderStatusShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="WorkCenter"
          list={WorkCenterList}
          edit={WorkCenterEdit}
          create={WorkCenterCreate}
          show={WorkCenterShow}
        />
        <Resource
          name="WorkCenterRouting"
          list={WorkCenterRoutingList}
          edit={WorkCenterRoutingEdit}
          create={WorkCenterRoutingCreate}
          show={WorkCenterRoutingShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ProductType"
          list={ProductTypeList}
          edit={ProductTypeEdit}
          create={ProductTypeCreate}
          show={ProductTypeShow}
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
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="SaleTax"
          list={SaleTaxList}
          edit={SaleTaxEdit}
          create={SaleTaxCreate}
          show={SaleTaxShow}
        />
        <Resource
          name="ProductCategory"
          list={ProductCategoryList}
          edit={ProductCategoryEdit}
          create={ProductCategoryCreate}
          show={ProductCategoryShow}
        />
        <Resource
          name="ProductVariant"
          list={ProductVariantList}
          edit={ProductVariantEdit}
          create={ProductVariantCreate}
          show={ProductVariantShow}
        />
        <Resource
          name="ProductionDocument"
          list={ProductionDocumentList}
          edit={ProductionDocumentEdit}
          create={ProductionDocumentCreate}
          show={ProductionDocumentShow}
        />
        <Resource
          name="BillOfMaterial"
          list={BillOfMaterialList}
          edit={BillOfMaterialEdit}
          create={BillOfMaterialCreate}
          show={BillOfMaterialShow}
        />
        <Resource
          name="BillOfMaterialDetail"
          list={BillOfMaterialDetailList}
          edit={BillOfMaterialDetailEdit}
          create={BillOfMaterialDetailCreate}
          show={BillOfMaterialDetailShow}
        />
        <Resource
          name="ProductBarcode"
          list={ProductBarcodeList}
          edit={ProductBarcodeEdit}
          create={ProductBarcodeCreate}
          show={ProductBarcodeShow}
        />
        <Resource
          name="ProductionOrder"
          list={ProductionOrderList}
          edit={ProductionOrderEdit}
          create={ProductionOrderCreate}
          show={ProductionOrderShow}
        />
        <Resource
          name="ProductionAvailability"
          list={ProductionAvailabilityList}
          edit={ProductionAvailabilityEdit}
          create={ProductionAvailabilityCreate}
          show={ProductionAvailabilityShow}
        />
        <Resource
          name="ProductUnit"
          list={ProductUnitList}
          edit={ProductUnitEdit}
          create={ProductUnitCreate}
          show={ProductUnitShow}
        />
        <Resource
          name="Purchase"
          list={PurchaseList}
          edit={PurchaseEdit}
          create={PurchaseCreate}
          show={PurchaseShow}
        />
        <Resource
          name="InvoiceType"
          list={InvoiceTypeList}
          edit={InvoiceTypeEdit}
          create={InvoiceTypeCreate}
          show={InvoiceTypeShow}
        />
        <Resource
          name="PaymentType"
          list={PaymentTypeList}
          edit={PaymentTypeEdit}
          create={PaymentTypeCreate}
          show={PaymentTypeShow}
        />
        <Resource
          name="PaymentTerm"
          list={PaymentTermList}
          edit={PaymentTermEdit}
          create={PaymentTermCreate}
          show={PaymentTermShow}
        />
        <Resource
          name="Period"
          list={PeriodList}
          edit={PeriodEdit}
          create={PeriodCreate}
          show={PeriodShow}
        />
        <Resource
          name="InstallmentSaleFee"
          list={InstallmentSaleFeeList}
          edit={InstallmentSaleFeeEdit}
          create={InstallmentSaleFeeCreate}
          show={InstallmentSaleFeeShow}
        />
        <Resource
          name="PurchasePriceType"
          list={PurchasePriceTypeList}
          edit={PurchasePriceTypeEdit}
          create={PurchasePriceTypeCreate}
          show={PurchasePriceTypeShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="CashRepository"
          list={CashRepositoryList}
          edit={CashRepositoryEdit}
          create={CashRepositoryCreate}
          show={CashRepositoryShow}
        />
        <Resource
          name="PurchaseDetail"
          list={PurchaseDetailList}
          edit={PurchaseDetailEdit}
          create={PurchaseDetailCreate}
          show={PurchaseDetailShow}
        />
        <Resource
          name="PurchaseReturn"
          list={PurchaseReturnList}
          edit={PurchaseReturnEdit}
          create={PurchaseReturnCreate}
          show={PurchaseReturnShow}
        />
        <Resource
          name="PurchaseReturnDetail"
          list={PurchaseReturnDetailList}
          edit={PurchaseReturnDetailEdit}
          create={PurchaseReturnDetailCreate}
          show={PurchaseReturnDetailShow}
        />
        <Resource
          name="ResourceType"
          list={ResourceTypeList}
          edit={ResourceTypeEdit}
          create={ResourceTypeCreate}
          show={ResourceTypeShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="RoleGroup"
          list={RoleGroupList}
          edit={RoleGroupEdit}
          create={RoleGroupCreate}
          show={RoleGroupShow}
        />
        <Resource
          name="SalaryItemGroup"
          list={SalaryItemGroupList}
          edit={SalaryItemGroupEdit}
          create={SalaryItemGroupCreate}
          show={SalaryItemGroupShow}
        />
        <Resource
          name="SalaryItemType"
          list={SalaryItemTypeList}
          edit={SalaryItemTypeEdit}
          create={SalaryItemTypeCreate}
          show={SalaryItemTypeShow}
        />
        <Resource
          name="SalaryLaw"
          list={SalaryLawList}
          edit={SalaryLawEdit}
          create={SalaryLawCreate}
          show={SalaryLawShow}
        />
        <Resource
          name="SalaryItem"
          list={SalaryItemList}
          edit={SalaryItemEdit}
          create={SalaryItemCreate}
          show={SalaryItemShow}
        />
        <Resource
          name="SaleTeam"
          list={SaleTeamList}
          edit={SaleTeamEdit}
          create={SaleTeamCreate}
          show={SaleTeamShow}
        />
        <Resource
          name="ScrapReason"
          list={ScrapReasonList}
          edit={ScrapReasonEdit}
          create={ScrapReasonCreate}
          show={ScrapReasonShow}
        />
        <Resource
          name="SalePerson"
          list={SalePersonList}
          edit={SalePersonEdit}
          create={SalePersonCreate}
          show={SalePersonShow}
        />
        <Resource
          name="EmployeeDepartment"
          list={EmployeeDepartmentList}
          edit={EmployeeDepartmentEdit}
          create={EmployeeDepartmentCreate}
          show={EmployeeDepartmentShow}
        />
        <Resource
          name="EmployeeClass"
          list={EmployeeClassList}
          edit={EmployeeClassEdit}
          create={EmployeeClassCreate}
          show={EmployeeClassShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="Sale"
          list={SaleList}
          edit={SaleEdit}
          create={SaleCreate}
          show={SaleShow}
        />
        <Resource
          name="SaleDetail"
          list={SaleDetailList}
          edit={SaleDetailEdit}
          create={SaleDetailCreate}
          show={SaleDetailShow}
        />
        <Resource
          name="SaleQuotation"
          list={SaleQuotationList}
          edit={SaleQuotationEdit}
          create={SaleQuotationCreate}
          show={SaleQuotationShow}
        />
        <Resource
          name="SaleReturn"
          list={SaleReturnList}
          edit={SaleReturnEdit}
          create={SaleReturnCreate}
          show={SaleReturnShow}
        />
        <Resource
          name="SaleReturnDetail"
          list={SaleReturnDetailList}
          edit={SaleReturnDetailEdit}
          create={SaleReturnDetailCreate}
          show={SaleReturnDetailShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="ApplicationDependency"
          list={ApplicationDependencyList}
          edit={ApplicationDependencyEdit}
          create={ApplicationDependencyCreate}
          show={ApplicationDependencyShow}
        />
        <Resource
          name="SaleQuotationDetail"
          list={SaleQuotationDetailList}
          edit={SaleQuotationDetailEdit}
          create={SaleQuotationDetailCreate}
          show={SaleQuotationDetailShow}
        />
        <Resource
          name="SaleOrder"
          list={SaleOrderList}
          edit={SaleOrderEdit}
          create={SaleOrderCreate}
          show={SaleOrderShow}
        />
        <Resource
          name="SaleOrderDetail"
          list={SaleOrderDetailList}
          edit={SaleOrderDetailEdit}
          create={SaleOrderDetailCreate}
          show={SaleOrderDetailShow}
        />
        <Resource
          name="PaymentStatus"
          list={PaymentStatusList}
          edit={PaymentStatusEdit}
          create={PaymentStatusCreate}
          show={PaymentStatusShow}
        />
        <Resource
          name="ShippingStatus"
          list={ShippingStatusList}
          edit={ShippingStatusEdit}
          create={ShippingStatusCreate}
          show={ShippingStatusShow}
        />
        <Resource
          name="SalePayment"
          list={SalePaymentList}
          edit={SalePaymentEdit}
          create={SalePaymentCreate}
          show={SalePaymentShow}
        />
        <Resource
          name="PaymentMethod"
          list={PaymentMethodList}
          edit={PaymentMethodEdit}
          create={PaymentMethodCreate}
          show={PaymentMethodShow}
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
          name="BankBranch"
          list={BankBranchList}
          edit={BankBranchEdit}
          create={BankBranchCreate}
          show={BankBranchShow}
        />
        <Resource
          name="SettingGroup"
          list={SettingGroupList}
          edit={SettingGroupEdit}
          create={SettingGroupCreate}
          show={SettingGroupShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="Shift"
          list={ShiftList}
          edit={ShiftEdit}
          create={ShiftCreate}
          show={ShiftShow}
        />
        <Resource
          name="StoreLocation"
          list={StoreLocationList}
          edit={StoreLocationEdit}
          create={StoreLocationCreate}
          show={StoreLocationShow}
        />
        <Resource
          name="StoreType"
          list={StoreTypeList}
          edit={StoreTypeEdit}
          create={StoreTypeCreate}
          show={StoreTypeShow}
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
          name="AccountTransaction"
          list={AccountTransactionList}
          edit={AccountTransactionEdit}
          create={AccountTransactionCreate}
          show={AccountTransactionShow}
        />
        <Resource
          name="ExpenseItem"
          list={ExpenseItemList}
          edit={ExpenseItemEdit}
          create={ExpenseItemCreate}
          show={ExpenseItemShow}
        />
        <Resource
          name="PaymentVoucher"
          list={PaymentVoucherList}
          edit={PaymentVoucherEdit}
          create={PaymentVoucherCreate}
          show={PaymentVoucherShow}
        />
        <Resource
          name="TimeMode"
          list={TimeModeList}
          edit={TimeModeEdit}
          create={TimeModeCreate}
          show={TimeModeShow}
        />
        <Resource
          name="TimeoffType"
          list={TimeoffTypeList}
          edit={TimeoffTypeEdit}
          create={TimeoffTypeCreate}
          show={TimeoffTypeShow}
        />
        <Resource
          name="Timezone"
          list={TimezoneList}
          edit={TimezoneEdit}
          create={TimezoneCreate}
          show={TimezoneShow}
        />
      </Admin>
    </div>
  );
};

export default App;
