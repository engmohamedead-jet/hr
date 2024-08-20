/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountListRelationFilter } from "../../account/base/AccountListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApplicationDependencyListRelationFilter } from "../../applicationDependency/base/ApplicationDependencyListRelationFilter";
import { ApplicationListRelationFilter } from "../../application/base/ApplicationListRelationFilter";
import { AttributeValueListRelationFilter } from "../../attributeValue/base/AttributeValueListRelationFilter";
import { AttributeListRelationFilter } from "../../attribute/base/AttributeListRelationFilter";
import { BankBranchListRelationFilter } from "../../bankBranch/base/BankBranchListRelationFilter";
import { BankTypeListRelationFilter } from "../../bankType/base/BankTypeListRelationFilter";
import { BarcodeTypeListRelationFilter } from "../../barcodeType/base/BarcodeTypeListRelationFilter";
import { BillOfMaterialDetailListRelationFilter } from "../../billOfMaterialDetail/base/BillOfMaterialDetailListRelationFilter";
import { BillOfMaterialTypeListRelationFilter } from "../../billOfMaterialType/base/BillOfMaterialTypeListRelationFilter";
import { BillOfMaterialListRelationFilter } from "../../billOfMaterial/base/BillOfMaterialListRelationFilter";
import { CashRepositoryListRelationFilter } from "../../cashRepository/base/CashRepositoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CurrencyListRelationFilter } from "../../currency/base/CurrencyListRelationFilter";
import { CustomerListRelationFilter } from "../../customer/base/CustomerListRelationFilter";
import { EmployeeClassListRelationFilter } from "../../employeeClass/base/EmployeeClassListRelationFilter";
import { EmployeeDepartmentListRelationFilter } from "../../employeeDepartment/base/EmployeeDepartmentListRelationFilter";
import { EmployeeListRelationFilter } from "../../employee/base/EmployeeListRelationFilter";
import { ExpenseItemListRelationFilter } from "../../expenseItem/base/ExpenseItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstallmentSaleFeeListRelationFilter } from "../../installmentSaleFee/base/InstallmentSaleFeeListRelationFilter";
import { InvoiceTypeListRelationFilter } from "../../invoiceType/base/InvoiceTypeListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderStatusListRelationFilter } from "../../orderStatus/base/OrderStatusListRelationFilter";
import { PaymentMethodListRelationFilter } from "../../paymentMethod/base/PaymentMethodListRelationFilter";
import { PaymentStatusListRelationFilter } from "../../paymentStatus/base/PaymentStatusListRelationFilter";
import { PaymentTermListRelationFilter } from "../../paymentTerm/base/PaymentTermListRelationFilter";
import { PaymentTypeListRelationFilter } from "../../paymentType/base/PaymentTypeListRelationFilter";
import { PaymentVoucherListRelationFilter } from "../../paymentVoucher/base/PaymentVoucherListRelationFilter";
import { PeriodListRelationFilter } from "../../period/base/PeriodListRelationFilter";
import { PrintTemplateContentListRelationFilter } from "../../printTemplateContent/base/PrintTemplateContentListRelationFilter";
import { PrintTemplateGroupListRelationFilter } from "../../printTemplateGroup/base/PrintTemplateGroupListRelationFilter";
import { PrintTemplateListRelationFilter } from "../../printTemplate/base/PrintTemplateListRelationFilter";
import { ProductBarcodeListRelationFilter } from "../../productBarcode/base/ProductBarcodeListRelationFilter";
import { ProductCategoryListRelationFilter } from "../../productCategory/base/ProductCategoryListRelationFilter";
import { ProductDepartmentListRelationFilter } from "../../productDepartment/base/ProductDepartmentListRelationFilter";
import { ProductGroupListRelationFilter } from "../../productGroup/base/ProductGroupListRelationFilter";
import { ProductTypeListRelationFilter } from "../../productType/base/ProductTypeListRelationFilter";
import { ProductUnitListRelationFilter } from "../../productUnit/base/ProductUnitListRelationFilter";
import { ProductVariantListRelationFilter } from "../../productVariant/base/ProductVariantListRelationFilter";
import { ProductionAvailabilityListRelationFilter } from "../../productionAvailability/base/ProductionAvailabilityListRelationFilter";
import { ProductionDocumentListRelationFilter } from "../../productionDocument/base/ProductionDocumentListRelationFilter";
import { ProductionOrderListRelationFilter } from "../../productionOrder/base/ProductionOrderListRelationFilter";
import { ProductListRelationFilter } from "../../product/base/ProductListRelationFilter";
import { PurchaseDetailListRelationFilter } from "../../purchaseDetail/base/PurchaseDetailListRelationFilter";
import { PurchasePriceTypeListRelationFilter } from "../../purchasePriceType/base/PurchasePriceTypeListRelationFilter";
import { PurchaseReturnDetailListRelationFilter } from "../../purchaseReturnDetail/base/PurchaseReturnDetailListRelationFilter";
import { PurchaseReturnListRelationFilter } from "../../purchaseReturn/base/PurchaseReturnListRelationFilter";
import { PurchaseListRelationFilter } from "../../purchase/base/PurchaseListRelationFilter";
import { ReceiptVoucherListRelationFilter } from "../../receiptVoucher/base/ReceiptVoucherListRelationFilter";
import { ResourceTypeListRelationFilter } from "../../resourceType/base/ResourceTypeListRelationFilter";
import { ResourceListRelationFilter } from "../../resource/base/ResourceListRelationFilter";
import { RoleGroupListRelationFilter } from "../../roleGroup/base/RoleGroupListRelationFilter";
import { SalaryItemGroupListRelationFilter } from "../../salaryItemGroup/base/SalaryItemGroupListRelationFilter";
import { SalaryItemTypeListRelationFilter } from "../../salaryItemType/base/SalaryItemTypeListRelationFilter";
import { SalaryItemListRelationFilter } from "../../salaryItem/base/SalaryItemListRelationFilter";
import { SalaryLawListRelationFilter } from "../../salaryLaw/base/SalaryLawListRelationFilter";
import { SaleDetailListRelationFilter } from "../../saleDetail/base/SaleDetailListRelationFilter";
import { SaleOrderDetailListRelationFilter } from "../../saleOrderDetail/base/SaleOrderDetailListRelationFilter";
import { SaleOrderListRelationFilter } from "../../saleOrder/base/SaleOrderListRelationFilter";
import { SalePaymentListRelationFilter } from "../../salePayment/base/SalePaymentListRelationFilter";
import { SalePersonListRelationFilter } from "../../salePerson/base/SalePersonListRelationFilter";
import { SalePriceTypeListRelationFilter } from "../../salePriceType/base/SalePriceTypeListRelationFilter";
import { SaleQuotationDetailListRelationFilter } from "../../saleQuotationDetail/base/SaleQuotationDetailListRelationFilter";
import { SaleQuotationListRelationFilter } from "../../saleQuotation/base/SaleQuotationListRelationFilter";
import { SaleReturnDetailListRelationFilter } from "../../saleReturnDetail/base/SaleReturnDetailListRelationFilter";
import { SaleReturnListRelationFilter } from "../../saleReturn/base/SaleReturnListRelationFilter";
import { SaleTaxListRelationFilter } from "../../saleTax/base/SaleTaxListRelationFilter";
import { SaleTeamListRelationFilter } from "../../saleTeam/base/SaleTeamListRelationFilter";
import { SaleListRelationFilter } from "../../sale/base/SaleListRelationFilter";
import { ScrapReasonListRelationFilter } from "../../scrapReason/base/ScrapReasonListRelationFilter";
import { SettingGroupListRelationFilter } from "../../settingGroup/base/SettingGroupListRelationFilter";
import { SettingListRelationFilter } from "../../setting/base/SettingListRelationFilter";
import { ShiftListRelationFilter } from "../../shift/base/ShiftListRelationFilter";
import { ShippingStatusListRelationFilter } from "../../shippingStatus/base/ShippingStatusListRelationFilter";
import { StoreLocationListRelationFilter } from "../../storeLocation/base/StoreLocationListRelationFilter";
import { StoreTypeListRelationFilter } from "../../storeType/base/StoreTypeListRelationFilter";
import { StoreListRelationFilter } from "../../store/base/StoreListRelationFilter";
import { SupplierListRelationFilter } from "../../supplier/base/SupplierListRelationFilter";
import { TimeModeListRelationFilter } from "../../timeMode/base/TimeModeListRelationFilter";
import { TimeoffTypeListRelationFilter } from "../../timeoffType/base/TimeoffTypeListRelationFilter";
import { UnitListRelationFilter } from "../../unit/base/UnitListRelationFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
import { VoucherTypeListRelationFilter } from "../../voucherType/base/VoucherTypeListRelationFilter";
import { WorkCenterRoutingListRelationFilter } from "../../workCenterRouting/base/WorkCenterRoutingListRelationFilter";
import { WorkCenterListRelationFilter } from "../../workCenter/base/WorkCenterListRelationFilter";

@InputType()
class TenantWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AccountListRelationFilter)
  @IsOptional()
  @Field(() => AccountListRelationFilter, {
    nullable: true,
  })
  accounts?: AccountListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ApplicationDependencyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ApplicationDependencyListRelationFilter)
  @IsOptional()
  @Field(() => ApplicationDependencyListRelationFilter, {
    nullable: true,
  })
  applicationDependencies?: ApplicationDependencyListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ApplicationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ApplicationListRelationFilter)
  @IsOptional()
  @Field(() => ApplicationListRelationFilter, {
    nullable: true,
  })
  applications?: ApplicationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AttributeValueListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttributeValueListRelationFilter)
  @IsOptional()
  @Field(() => AttributeValueListRelationFilter, {
    nullable: true,
  })
  attributeValues?: AttributeValueListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AttributeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttributeListRelationFilter)
  @IsOptional()
  @Field(() => AttributeListRelationFilter, {
    nullable: true,
  })
  attributes?: AttributeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BankBranchListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BankBranchListRelationFilter)
  @IsOptional()
  @Field(() => BankBranchListRelationFilter, {
    nullable: true,
  })
  bankBranches?: BankBranchListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BankTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BankTypeListRelationFilter)
  @IsOptional()
  @Field(() => BankTypeListRelationFilter, {
    nullable: true,
  })
  bankTypes?: BankTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BarcodeTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BarcodeTypeListRelationFilter)
  @IsOptional()
  @Field(() => BarcodeTypeListRelationFilter, {
    nullable: true,
  })
  barcodeTypes?: BarcodeTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailListRelationFilter)
  @IsOptional()
  @Field(() => BillOfMaterialDetailListRelationFilter, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialTypeListRelationFilter)
  @IsOptional()
  @Field(() => BillOfMaterialTypeListRelationFilter, {
    nullable: true,
  })
  billOfMaterialTypes?: BillOfMaterialTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialListRelationFilter)
  @IsOptional()
  @Field(() => BillOfMaterialListRelationFilter, {
    nullable: true,
  })
  billOfMaterials?: BillOfMaterialListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CashRepositoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CashRepositoryListRelationFilter)
  @IsOptional()
  @Field(() => CashRepositoryListRelationFilter, {
    nullable: true,
  })
  cashRepositories?: CashRepositoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  creatorUserId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CurrencyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CurrencyListRelationFilter)
  @IsOptional()
  @Field(() => CurrencyListRelationFilter, {
    nullable: true,
  })
  currencies?: CurrencyListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerListRelationFilter)
  @IsOptional()
  @Field(() => CustomerListRelationFilter, {
    nullable: true,
  })
  customers?: CustomerListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EmployeeClassListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeClassListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeClassListRelationFilter, {
    nullable: true,
  })
  employeeClasses?: EmployeeClassListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EmployeeDepartmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeDepartmentListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeDepartmentListRelationFilter, {
    nullable: true,
  })
  employeeDepartments?: EmployeeDepartmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeListRelationFilter, {
    nullable: true,
  })
  employees?: EmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ExpenseItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExpenseItemListRelationFilter)
  @IsOptional()
  @Field(() => ExpenseItemListRelationFilter, {
    nullable: true,
  })
  expenseItems?: ExpenseItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => InstallmentSaleFeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFeeListRelationFilter)
  @IsOptional()
  @Field(() => InstallmentSaleFeeListRelationFilter, {
    nullable: true,
  })
  installmentSaleFees?: InstallmentSaleFeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InvoiceTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InvoiceTypeListRelationFilter)
  @IsOptional()
  @Field(() => InvoiceTypeListRelationFilter, {
    nullable: true,
  })
  invoiceTypes?: InvoiceTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isActive?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastModifierUserIdl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  normalizedName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  note?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OrderStatusListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderStatusListRelationFilter)
  @IsOptional()
  @Field(() => OrderStatusListRelationFilter, {
    nullable: true,
  })
  orderStatuses?: OrderStatusListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentMethodListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentMethodListRelationFilter)
  @IsOptional()
  @Field(() => PaymentMethodListRelationFilter, {
    nullable: true,
  })
  paymentMethods?: PaymentMethodListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentStatusListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentStatusListRelationFilter)
  @IsOptional()
  @Field(() => PaymentStatusListRelationFilter, {
    nullable: true,
  })
  paymentStatuses?: PaymentStatusListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentTermListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentTermListRelationFilter)
  @IsOptional()
  @Field(() => PaymentTermListRelationFilter, {
    nullable: true,
  })
  paymentTerms?: PaymentTermListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentTypeListRelationFilter)
  @IsOptional()
  @Field(() => PaymentTypeListRelationFilter, {
    nullable: true,
  })
  paymentTypes?: PaymentTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentVoucherListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentVoucherListRelationFilter)
  @IsOptional()
  @Field(() => PaymentVoucherListRelationFilter, {
    nullable: true,
  })
  paymentVouchers?: PaymentVoucherListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PeriodListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PeriodListRelationFilter)
  @IsOptional()
  @Field(() => PeriodListRelationFilter, {
    nullable: true,
  })
  periods?: PeriodListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateContentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PrintTemplateContentListRelationFilter)
  @IsOptional()
  @Field(() => PrintTemplateContentListRelationFilter, {
    nullable: true,
  })
  printTemplateContents?: PrintTemplateContentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PrintTemplateGroupListRelationFilter)
  @IsOptional()
  @Field(() => PrintTemplateGroupListRelationFilter, {
    nullable: true,
  })
  printTemplateGroups?: PrintTemplateGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PrintTemplateListRelationFilter)
  @IsOptional()
  @Field(() => PrintTemplateListRelationFilter, {
    nullable: true,
  })
  printTemplates?: PrintTemplateListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductBarcodeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductBarcodeListRelationFilter)
  @IsOptional()
  @Field(() => ProductBarcodeListRelationFilter, {
    nullable: true,
  })
  productBarcodes?: ProductBarcodeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductCategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductCategoryListRelationFilter)
  @IsOptional()
  @Field(() => ProductCategoryListRelationFilter, {
    nullable: true,
  })
  productCategories?: ProductCategoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductDepartmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentListRelationFilter)
  @IsOptional()
  @Field(() => ProductDepartmentListRelationFilter, {
    nullable: true,
  })
  productDepartments?: ProductDepartmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  productGroups?: ProductGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductTypeListRelationFilter)
  @IsOptional()
  @Field(() => ProductTypeListRelationFilter, {
    nullable: true,
  })
  productTypes?: ProductTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductUnitListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductUnitListRelationFilter)
  @IsOptional()
  @Field(() => ProductUnitListRelationFilter, {
    nullable: true,
  })
  productUnits?: ProductUnitListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductVariantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductVariantListRelationFilter)
  @IsOptional()
  @Field(() => ProductVariantListRelationFilter, {
    nullable: true,
  })
  productVariants?: ProductVariantListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductionAvailabilityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductionAvailabilityListRelationFilter)
  @IsOptional()
  @Field(() => ProductionAvailabilityListRelationFilter, {
    nullable: true,
  })
  productionAvailabilities?: ProductionAvailabilityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductionDocumentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductionDocumentListRelationFilter)
  @IsOptional()
  @Field(() => ProductionDocumentListRelationFilter, {
    nullable: true,
  })
  productionDocuments?: ProductionDocumentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductionOrderListRelationFilter)
  @IsOptional()
  @Field(() => ProductionOrderListRelationFilter, {
    nullable: true,
  })
  productionOrders?: ProductionOrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductListRelationFilter)
  @IsOptional()
  @Field(() => ProductListRelationFilter, {
    nullable: true,
  })
  products?: ProductListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseDetailListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseDetailListRelationFilter, {
    nullable: true,
  })
  purchaseDetails?: PurchaseDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PurchasePriceTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchasePriceTypeListRelationFilter)
  @IsOptional()
  @Field(() => PurchasePriceTypeListRelationFilter, {
    nullable: true,
  })
  purchasePriceTypes?: PurchasePriceTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnDetailListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseReturnDetailListRelationFilter, {
    nullable: true,
  })
  purchaseReturnDetails?: PurchaseReturnDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseReturnListRelationFilter, {
    nullable: true,
  })
  purchaseReturns?: PurchaseReturnListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseListRelationFilter, {
    nullable: true,
  })
  purchases?: PurchaseListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReceiptVoucherListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReceiptVoucherListRelationFilter)
  @IsOptional()
  @Field(() => ReceiptVoucherListRelationFilter, {
    nullable: true,
  })
  receiptVouchers?: ReceiptVoucherListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ResourceTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResourceTypeListRelationFilter)
  @IsOptional()
  @Field(() => ResourceTypeListRelationFilter, {
    nullable: true,
  })
  resourceTypes?: ResourceTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ResourceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResourceListRelationFilter)
  @IsOptional()
  @Field(() => ResourceListRelationFilter, {
    nullable: true,
  })
  resources?: ResourceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RoleGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RoleGroupListRelationFilter)
  @IsOptional()
  @Field(() => RoleGroupListRelationFilter, {
    nullable: true,
  })
  roleGroups?: RoleGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalaryItemGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalaryItemGroupListRelationFilter)
  @IsOptional()
  @Field(() => SalaryItemGroupListRelationFilter, {
    nullable: true,
  })
  salaryItemGroups?: SalaryItemGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalaryItemTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalaryItemTypeListRelationFilter)
  @IsOptional()
  @Field(() => SalaryItemTypeListRelationFilter, {
    nullable: true,
  })
  salaryItemTypes?: SalaryItemTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalaryItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalaryItemListRelationFilter)
  @IsOptional()
  @Field(() => SalaryItemListRelationFilter, {
    nullable: true,
  })
  salaryItems?: SalaryItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalaryLawListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalaryLawListRelationFilter)
  @IsOptional()
  @Field(() => SalaryLawListRelationFilter, {
    nullable: true,
  })
  salaryLaws?: SalaryLawListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleDetailListRelationFilter)
  @IsOptional()
  @Field(() => SaleDetailListRelationFilter, {
    nullable: true,
  })
  saleDetails?: SaleDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleOrderDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleOrderDetailListRelationFilter)
  @IsOptional()
  @Field(() => SaleOrderDetailListRelationFilter, {
    nullable: true,
  })
  saleOrderDetails?: SaleOrderDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleOrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleOrderListRelationFilter)
  @IsOptional()
  @Field(() => SaleOrderListRelationFilter, {
    nullable: true,
  })
  saleOrders?: SaleOrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalePaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalePaymentListRelationFilter)
  @IsOptional()
  @Field(() => SalePaymentListRelationFilter, {
    nullable: true,
  })
  salePayments?: SalePaymentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalePersonListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalePersonListRelationFilter)
  @IsOptional()
  @Field(() => SalePersonListRelationFilter, {
    nullable: true,
  })
  salePeople?: SalePersonListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalePriceTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalePriceTypeListRelationFilter)
  @IsOptional()
  @Field(() => SalePriceTypeListRelationFilter, {
    nullable: true,
  })
  salePriceTypes?: SalePriceTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleQuotationDetailListRelationFilter)
  @IsOptional()
  @Field(() => SaleQuotationDetailListRelationFilter, {
    nullable: true,
  })
  saleQuotationDetails?: SaleQuotationDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleQuotationListRelationFilter)
  @IsOptional()
  @Field(() => SaleQuotationListRelationFilter, {
    nullable: true,
  })
  saleQuotations?: SaleQuotationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailListRelationFilter)
  @IsOptional()
  @Field(() => SaleReturnDetailListRelationFilter, {
    nullable: true,
  })
  saleReturnDetails?: SaleReturnDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleReturnListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleReturnListRelationFilter)
  @IsOptional()
  @Field(() => SaleReturnListRelationFilter, {
    nullable: true,
  })
  saleReturns?: SaleReturnListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleTaxListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleTaxListRelationFilter)
  @IsOptional()
  @Field(() => SaleTaxListRelationFilter, {
    nullable: true,
  })
  saleTaxes?: SaleTaxListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleTeamListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleTeamListRelationFilter)
  @IsOptional()
  @Field(() => SaleTeamListRelationFilter, {
    nullable: true,
  })
  saleTeams?: SaleTeamListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SaleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleListRelationFilter)
  @IsOptional()
  @Field(() => SaleListRelationFilter, {
    nullable: true,
  })
  sales?: SaleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ScrapReasonListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ScrapReasonListRelationFilter)
  @IsOptional()
  @Field(() => ScrapReasonListRelationFilter, {
    nullable: true,
  })
  scrapReasons?: ScrapReasonListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SettingGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SettingGroupListRelationFilter)
  @IsOptional()
  @Field(() => SettingGroupListRelationFilter, {
    nullable: true,
  })
  settingGroups?: SettingGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SettingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SettingListRelationFilter)
  @IsOptional()
  @Field(() => SettingListRelationFilter, {
    nullable: true,
  })
  settings?: SettingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ShiftListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ShiftListRelationFilter)
  @IsOptional()
  @Field(() => ShiftListRelationFilter, {
    nullable: true,
  })
  shifts?: ShiftListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ShippingStatusListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ShippingStatusListRelationFilter)
  @IsOptional()
  @Field(() => ShippingStatusListRelationFilter, {
    nullable: true,
  })
  shippingStatuses?: ShippingStatusListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StoreLocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StoreLocationListRelationFilter)
  @IsOptional()
  @Field(() => StoreLocationListRelationFilter, {
    nullable: true,
  })
  storeLocations?: StoreLocationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StoreTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StoreTypeListRelationFilter)
  @IsOptional()
  @Field(() => StoreTypeListRelationFilter, {
    nullable: true,
  })
  storeTypes?: StoreTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StoreListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StoreListRelationFilter)
  @IsOptional()
  @Field(() => StoreListRelationFilter, {
    nullable: true,
  })
  stores?: StoreListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SupplierListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SupplierListRelationFilter)
  @IsOptional()
  @Field(() => SupplierListRelationFilter, {
    nullable: true,
  })
  suppliers?: SupplierListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  tenancyName?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TimeModeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TimeModeListRelationFilter)
  @IsOptional()
  @Field(() => TimeModeListRelationFilter, {
    nullable: true,
  })
  timeModes?: TimeModeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TimeoffTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TimeoffTypeListRelationFilter)
  @IsOptional()
  @Field(() => TimeoffTypeListRelationFilter, {
    nullable: true,
  })
  timeoffTypes?: TimeoffTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UnitListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UnitListRelationFilter)
  @IsOptional()
  @Field(() => UnitListRelationFilter, {
    nullable: true,
  })
  units?: UnitListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  users?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => VoucherTypeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VoucherTypeListRelationFilter)
  @IsOptional()
  @Field(() => VoucherTypeListRelationFilter, {
    nullable: true,
  })
  voucherTypes?: VoucherTypeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WorkCenterRoutingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WorkCenterRoutingListRelationFilter)
  @IsOptional()
  @Field(() => WorkCenterRoutingListRelationFilter, {
    nullable: true,
  })
  workCenterRoutings?: WorkCenterRoutingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WorkCenterListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WorkCenterListRelationFilter)
  @IsOptional()
  @Field(() => WorkCenterListRelationFilter, {
    nullable: true,
  })
  workCenters?: WorkCenterListRelationFilter;
}

export { TenantWhereInput as TenantWhereInput };
