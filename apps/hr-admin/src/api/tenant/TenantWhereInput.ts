import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { ApplicationDependencyListRelationFilter } from "../applicationDependency/ApplicationDependencyListRelationFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { AttributeValueListRelationFilter } from "../attributeValue/AttributeValueListRelationFilter";
import { AttributeListRelationFilter } from "../attribute/AttributeListRelationFilter";
import { BankBranchListRelationFilter } from "../bankBranch/BankBranchListRelationFilter";
import { BankTypeListRelationFilter } from "../bankType/BankTypeListRelationFilter";
import { BarcodeTypeListRelationFilter } from "../barcodeType/BarcodeTypeListRelationFilter";
import { BillOfMaterialDetailListRelationFilter } from "../billOfMaterialDetail/BillOfMaterialDetailListRelationFilter";
import { BillOfMaterialTypeListRelationFilter } from "../billOfMaterialType/BillOfMaterialTypeListRelationFilter";
import { BillOfMaterialListRelationFilter } from "../billOfMaterial/BillOfMaterialListRelationFilter";
import { CashRepositoryListRelationFilter } from "../cashRepository/CashRepositoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CurrencyListRelationFilter } from "../currency/CurrencyListRelationFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { EmployeeClassListRelationFilter } from "../employeeClass/EmployeeClassListRelationFilter";
import { EmployeeDepartmentListRelationFilter } from "../employeeDepartment/EmployeeDepartmentListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { ExpenseItemListRelationFilter } from "../expenseItem/ExpenseItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstallmentSaleFeeListRelationFilter } from "../installmentSaleFee/InstallmentSaleFeeListRelationFilter";
import { InvoiceTypeListRelationFilter } from "../invoiceType/InvoiceTypeListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderStatusListRelationFilter } from "../orderStatus/OrderStatusListRelationFilter";
import { PaymentMethodListRelationFilter } from "../paymentMethod/PaymentMethodListRelationFilter";
import { PaymentStatusListRelationFilter } from "../paymentStatus/PaymentStatusListRelationFilter";
import { PaymentTermListRelationFilter } from "../paymentTerm/PaymentTermListRelationFilter";
import { PaymentTypeListRelationFilter } from "../paymentType/PaymentTypeListRelationFilter";
import { PaymentVoucherListRelationFilter } from "../paymentVoucher/PaymentVoucherListRelationFilter";
import { PeriodListRelationFilter } from "../period/PeriodListRelationFilter";
import { PrintTemplateContentListRelationFilter } from "../printTemplateContent/PrintTemplateContentListRelationFilter";
import { PrintTemplateGroupListRelationFilter } from "../printTemplateGroup/PrintTemplateGroupListRelationFilter";
import { PrintTemplateListRelationFilter } from "../printTemplate/PrintTemplateListRelationFilter";
import { ProductBarcodeListRelationFilter } from "../productBarcode/ProductBarcodeListRelationFilter";
import { ProductCategoryListRelationFilter } from "../productCategory/ProductCategoryListRelationFilter";
import { ProductDepartmentListRelationFilter } from "../productDepartment/ProductDepartmentListRelationFilter";
import { ProductGroupListRelationFilter } from "../productGroup/ProductGroupListRelationFilter";
import { ProductTypeListRelationFilter } from "../productType/ProductTypeListRelationFilter";
import { ProductUnitListRelationFilter } from "../productUnit/ProductUnitListRelationFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";
import { ProductionAvailabilityListRelationFilter } from "../productionAvailability/ProductionAvailabilityListRelationFilter";
import { ProductionDocumentListRelationFilter } from "../productionDocument/ProductionDocumentListRelationFilter";
import { ProductionOrderListRelationFilter } from "../productionOrder/ProductionOrderListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { PurchaseDetailListRelationFilter } from "../purchaseDetail/PurchaseDetailListRelationFilter";
import { PurchasePriceTypeListRelationFilter } from "../purchasePriceType/PurchasePriceTypeListRelationFilter";
import { PurchaseReturnDetailListRelationFilter } from "../purchaseReturnDetail/PurchaseReturnDetailListRelationFilter";
import { PurchaseReturnListRelationFilter } from "../purchaseReturn/PurchaseReturnListRelationFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { ReceiptVoucherListRelationFilter } from "../receiptVoucher/ReceiptVoucherListRelationFilter";
import { ResourceTypeListRelationFilter } from "../resourceType/ResourceTypeListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { RoleGroupListRelationFilter } from "../roleGroup/RoleGroupListRelationFilter";
import { SalaryItemGroupListRelationFilter } from "../salaryItemGroup/SalaryItemGroupListRelationFilter";
import { SalaryItemTypeListRelationFilter } from "../salaryItemType/SalaryItemTypeListRelationFilter";
import { SalaryItemListRelationFilter } from "../salaryItem/SalaryItemListRelationFilter";
import { SalaryLawListRelationFilter } from "../salaryLaw/SalaryLawListRelationFilter";
import { SaleDetailListRelationFilter } from "../saleDetail/SaleDetailListRelationFilter";
import { SaleOrderDetailListRelationFilter } from "../saleOrderDetail/SaleOrderDetailListRelationFilter";
import { SaleOrderListRelationFilter } from "../saleOrder/SaleOrderListRelationFilter";
import { SalePaymentListRelationFilter } from "../salePayment/SalePaymentListRelationFilter";
import { SalePersonListRelationFilter } from "../salePerson/SalePersonListRelationFilter";
import { SalePriceTypeListRelationFilter } from "../salePriceType/SalePriceTypeListRelationFilter";
import { SaleQuotationDetailListRelationFilter } from "../saleQuotationDetail/SaleQuotationDetailListRelationFilter";
import { SaleQuotationListRelationFilter } from "../saleQuotation/SaleQuotationListRelationFilter";
import { SaleReturnDetailListRelationFilter } from "../saleReturnDetail/SaleReturnDetailListRelationFilter";
import { SaleReturnListRelationFilter } from "../saleReturn/SaleReturnListRelationFilter";
import { SaleTaxListRelationFilter } from "../saleTax/SaleTaxListRelationFilter";
import { SaleTeamListRelationFilter } from "../saleTeam/SaleTeamListRelationFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { ScrapReasonListRelationFilter } from "../scrapReason/ScrapReasonListRelationFilter";
import { SettingGroupListRelationFilter } from "../settingGroup/SettingGroupListRelationFilter";
import { SettingListRelationFilter } from "../setting/SettingListRelationFilter";
import { ShiftListRelationFilter } from "../shift/ShiftListRelationFilter";
import { ShippingStatusListRelationFilter } from "../shippingStatus/ShippingStatusListRelationFilter";
import { StoreLocationListRelationFilter } from "../storeLocation/StoreLocationListRelationFilter";
import { StoreTypeListRelationFilter } from "../storeType/StoreTypeListRelationFilter";
import { StoreListRelationFilter } from "../store/StoreListRelationFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";
import { TimeModeListRelationFilter } from "../timeMode/TimeModeListRelationFilter";
import { TimeoffTypeListRelationFilter } from "../timeoffType/TimeoffTypeListRelationFilter";
import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { VoucherTypeListRelationFilter } from "../voucherType/VoucherTypeListRelationFilter";
import { WorkCenterRoutingListRelationFilter } from "../workCenterRouting/WorkCenterRoutingListRelationFilter";
import { WorkCenterListRelationFilter } from "../workCenter/WorkCenterListRelationFilter";

export type TenantWhereInput = {
  accounts?: AccountListRelationFilter;
  applicationDependencies?: ApplicationDependencyListRelationFilter;
  applications?: ApplicationListRelationFilter;
  attributeValues?: AttributeValueListRelationFilter;
  attributes?: AttributeListRelationFilter;
  bankBranches?: BankBranchListRelationFilter;
  bankTypes?: BankTypeListRelationFilter;
  barcodeTypes?: BarcodeTypeListRelationFilter;
  billOfMaterialDetails?: BillOfMaterialDetailListRelationFilter;
  billOfMaterialTypes?: BillOfMaterialTypeListRelationFilter;
  billOfMaterials?: BillOfMaterialListRelationFilter;
  cashRepositories?: CashRepositoryListRelationFilter;
  code?: StringNullableFilter;
  creatorUserId?: StringNullableFilter;
  currencies?: CurrencyListRelationFilter;
  customers?: CustomerListRelationFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  employeeClasses?: EmployeeClassListRelationFilter;
  employeeDepartments?: EmployeeDepartmentListRelationFilter;
  employees?: EmployeeListRelationFilter;
  expenseItems?: ExpenseItemListRelationFilter;
  id?: StringFilter;
  installmentSaleFees?: InstallmentSaleFeeListRelationFilter;
  invoiceTypes?: InvoiceTypeListRelationFilter;
  isActive?: BooleanFilter;
  lastModifierUserIdl?: StringNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  orderStatuses?: OrderStatusListRelationFilter;
  paymentMethods?: PaymentMethodListRelationFilter;
  paymentStatuses?: PaymentStatusListRelationFilter;
  paymentTerms?: PaymentTermListRelationFilter;
  paymentTypes?: PaymentTypeListRelationFilter;
  paymentVouchers?: PaymentVoucherListRelationFilter;
  periods?: PeriodListRelationFilter;
  printTemplateContents?: PrintTemplateContentListRelationFilter;
  printTemplateGroups?: PrintTemplateGroupListRelationFilter;
  printTemplates?: PrintTemplateListRelationFilter;
  productBarcodes?: ProductBarcodeListRelationFilter;
  productCategories?: ProductCategoryListRelationFilter;
  productDepartments?: ProductDepartmentListRelationFilter;
  productGroups?: ProductGroupListRelationFilter;
  productTypes?: ProductTypeListRelationFilter;
  productUnits?: ProductUnitListRelationFilter;
  productVariants?: ProductVariantListRelationFilter;
  productionAvailabilities?: ProductionAvailabilityListRelationFilter;
  productionDocuments?: ProductionDocumentListRelationFilter;
  productionOrders?: ProductionOrderListRelationFilter;
  products?: ProductListRelationFilter;
  purchaseDetails?: PurchaseDetailListRelationFilter;
  purchasePriceTypes?: PurchasePriceTypeListRelationFilter;
  purchaseReturnDetails?: PurchaseReturnDetailListRelationFilter;
  purchaseReturns?: PurchaseReturnListRelationFilter;
  purchases?: PurchaseListRelationFilter;
  receiptVouchers?: ReceiptVoucherListRelationFilter;
  resourceTypes?: ResourceTypeListRelationFilter;
  resources?: ResourceListRelationFilter;
  roleGroups?: RoleGroupListRelationFilter;
  salaryItemGroups?: SalaryItemGroupListRelationFilter;
  salaryItemTypes?: SalaryItemTypeListRelationFilter;
  salaryItems?: SalaryItemListRelationFilter;
  salaryLaws?: SalaryLawListRelationFilter;
  saleDetails?: SaleDetailListRelationFilter;
  saleOrderDetails?: SaleOrderDetailListRelationFilter;
  saleOrders?: SaleOrderListRelationFilter;
  salePayments?: SalePaymentListRelationFilter;
  salePeople?: SalePersonListRelationFilter;
  salePriceTypes?: SalePriceTypeListRelationFilter;
  saleQuotationDetails?: SaleQuotationDetailListRelationFilter;
  saleQuotations?: SaleQuotationListRelationFilter;
  saleReturnDetails?: SaleReturnDetailListRelationFilter;
  saleReturns?: SaleReturnListRelationFilter;
  saleTaxes?: SaleTaxListRelationFilter;
  saleTeams?: SaleTeamListRelationFilter;
  sales?: SaleListRelationFilter;
  scrapReasons?: ScrapReasonListRelationFilter;
  settingGroups?: SettingGroupListRelationFilter;
  settings?: SettingListRelationFilter;
  shifts?: ShiftListRelationFilter;
  shippingStatuses?: ShippingStatusListRelationFilter;
  storeLocations?: StoreLocationListRelationFilter;
  storeTypes?: StoreTypeListRelationFilter;
  stores?: StoreListRelationFilter;
  suppliers?: SupplierListRelationFilter;
  tenancyName?: StringFilter;
  timeModes?: TimeModeListRelationFilter;
  timeoffTypes?: TimeoffTypeListRelationFilter;
  units?: UnitListRelationFilter;
  users?: UserListRelationFilter;
  voucherTypes?: VoucherTypeListRelationFilter;
  workCenterRoutings?: WorkCenterRoutingListRelationFilter;
  workCenters?: WorkCenterListRelationFilter;
};
