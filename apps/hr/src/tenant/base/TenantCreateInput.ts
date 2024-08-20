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
import { AccountCreateNestedManyWithoutTenantsInput } from "./AccountCreateNestedManyWithoutTenantsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { ApplicationDependencyCreateNestedManyWithoutTenantsInput } from "./ApplicationDependencyCreateNestedManyWithoutTenantsInput";
import { ApplicationCreateNestedManyWithoutTenantsInput } from "./ApplicationCreateNestedManyWithoutTenantsInput";
import { AttributeValueCreateNestedManyWithoutTenantsInput } from "./AttributeValueCreateNestedManyWithoutTenantsInput";
import { AttributeCreateNestedManyWithoutTenantsInput } from "./AttributeCreateNestedManyWithoutTenantsInput";
import { BankBranchCreateNestedManyWithoutTenantsInput } from "./BankBranchCreateNestedManyWithoutTenantsInput";
import { BankTypeCreateNestedManyWithoutTenantsInput } from "./BankTypeCreateNestedManyWithoutTenantsInput";
import { BarcodeTypeCreateNestedManyWithoutTenantsInput } from "./BarcodeTypeCreateNestedManyWithoutTenantsInput";
import { BillOfMaterialDetailCreateNestedManyWithoutTenantsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutTenantsInput";
import { BillOfMaterialTypeCreateNestedManyWithoutTenantsInput } from "./BillOfMaterialTypeCreateNestedManyWithoutTenantsInput";
import { BillOfMaterialCreateNestedManyWithoutTenantsInput } from "./BillOfMaterialCreateNestedManyWithoutTenantsInput";
import { CashRepositoryCreateNestedManyWithoutTenantsInput } from "./CashRepositoryCreateNestedManyWithoutTenantsInput";
import { CurrencyCreateNestedManyWithoutTenantsInput } from "./CurrencyCreateNestedManyWithoutTenantsInput";
import { CustomerCreateNestedManyWithoutTenantsInput } from "./CustomerCreateNestedManyWithoutTenantsInput";
import { EmployeeClassCreateNestedManyWithoutTenantsInput } from "./EmployeeClassCreateNestedManyWithoutTenantsInput";
import { EmployeeDepartmentCreateNestedManyWithoutTenantsInput } from "./EmployeeDepartmentCreateNestedManyWithoutTenantsInput";
import { EmployeeCreateNestedManyWithoutTenantsInput } from "./EmployeeCreateNestedManyWithoutTenantsInput";
import { InstallmentSaleFeeCreateNestedManyWithoutTenantsInput } from "./InstallmentSaleFeeCreateNestedManyWithoutTenantsInput";
import { InvoiceTypeCreateNestedManyWithoutTenantsInput } from "./InvoiceTypeCreateNestedManyWithoutTenantsInput";
import { OrderStatusCreateNestedManyWithoutTenantsInput } from "./OrderStatusCreateNestedManyWithoutTenantsInput";
import { PaymentMethodCreateNestedManyWithoutTenantsInput } from "./PaymentMethodCreateNestedManyWithoutTenantsInput";
import { PaymentStatusCreateNestedManyWithoutTenantsInput } from "./PaymentStatusCreateNestedManyWithoutTenantsInput";
import { PaymentTermCreateNestedManyWithoutTenantsInput } from "./PaymentTermCreateNestedManyWithoutTenantsInput";
import { PaymentTypeCreateNestedManyWithoutTenantsInput } from "./PaymentTypeCreateNestedManyWithoutTenantsInput";
import { PeriodCreateNestedManyWithoutTenantsInput } from "./PeriodCreateNestedManyWithoutTenantsInput";
import { PrintTemplateContentCreateNestedManyWithoutTenantsInput } from "./PrintTemplateContentCreateNestedManyWithoutTenantsInput";
import { PrintTemplateGroupCreateNestedManyWithoutTenantsInput } from "./PrintTemplateGroupCreateNestedManyWithoutTenantsInput";
import { PrintTemplateCreateNestedManyWithoutTenantsInput } from "./PrintTemplateCreateNestedManyWithoutTenantsInput";
import { ProductBarcodeCreateNestedManyWithoutTenantsInput } from "./ProductBarcodeCreateNestedManyWithoutTenantsInput";
import { ProductCategoryCreateNestedManyWithoutTenantsInput } from "./ProductCategoryCreateNestedManyWithoutTenantsInput";
import { ProductDepartmentCreateNestedManyWithoutTenantsInput } from "./ProductDepartmentCreateNestedManyWithoutTenantsInput";
import { ProductGroupCreateNestedManyWithoutTenantsInput } from "./ProductGroupCreateNestedManyWithoutTenantsInput";
import { ProductTypeCreateNestedManyWithoutTenantsInput } from "./ProductTypeCreateNestedManyWithoutTenantsInput";
import { ProductUnitCreateNestedManyWithoutTenantsInput } from "./ProductUnitCreateNestedManyWithoutTenantsInput";
import { ProductVariantCreateNestedManyWithoutTenantsInput } from "./ProductVariantCreateNestedManyWithoutTenantsInput";
import { ProductionAvailabilityCreateNestedManyWithoutTenantsInput } from "./ProductionAvailabilityCreateNestedManyWithoutTenantsInput";
import { ProductionDocumentCreateNestedManyWithoutTenantsInput } from "./ProductionDocumentCreateNestedManyWithoutTenantsInput";
import { ProductionOrderCreateNestedManyWithoutTenantsInput } from "./ProductionOrderCreateNestedManyWithoutTenantsInput";
import { ProductCreateNestedManyWithoutTenantsInput } from "./ProductCreateNestedManyWithoutTenantsInput";
import { PurchaseDetailCreateNestedManyWithoutTenantsInput } from "./PurchaseDetailCreateNestedManyWithoutTenantsInput";
import { PurchasePriceTypeCreateNestedManyWithoutTenantsInput } from "./PurchasePriceTypeCreateNestedManyWithoutTenantsInput";
import { PurchaseReturnDetailCreateNestedManyWithoutTenantsInput } from "./PurchaseReturnDetailCreateNestedManyWithoutTenantsInput";
import { PurchaseReturnCreateNestedManyWithoutTenantsInput } from "./PurchaseReturnCreateNestedManyWithoutTenantsInput";
import { PurchaseCreateNestedManyWithoutTenantsInput } from "./PurchaseCreateNestedManyWithoutTenantsInput";
import { ResourceTypeCreateNestedManyWithoutTenantsInput } from "./ResourceTypeCreateNestedManyWithoutTenantsInput";
import { ResourceCreateNestedManyWithoutTenantsInput } from "./ResourceCreateNestedManyWithoutTenantsInput";
import { RoleGroupCreateNestedManyWithoutTenantsInput } from "./RoleGroupCreateNestedManyWithoutTenantsInput";
import { SalaryItemGroupCreateNestedManyWithoutTenantsInput } from "./SalaryItemGroupCreateNestedManyWithoutTenantsInput";
import { SalaryItemTypeCreateNestedManyWithoutTenantsInput } from "./SalaryItemTypeCreateNestedManyWithoutTenantsInput";
import { SalaryItemCreateNestedManyWithoutTenantsInput } from "./SalaryItemCreateNestedManyWithoutTenantsInput";
import { SalaryLawCreateNestedManyWithoutTenantsInput } from "./SalaryLawCreateNestedManyWithoutTenantsInput";
import { SaleDetailCreateNestedManyWithoutTenantsInput } from "./SaleDetailCreateNestedManyWithoutTenantsInput";
import { SaleOrderDetailCreateNestedManyWithoutTenantsInput } from "./SaleOrderDetailCreateNestedManyWithoutTenantsInput";
import { SaleOrderCreateNestedManyWithoutTenantsInput } from "./SaleOrderCreateNestedManyWithoutTenantsInput";
import { SalePaymentCreateNestedManyWithoutTenantsInput } from "./SalePaymentCreateNestedManyWithoutTenantsInput";
import { SalePersonCreateNestedManyWithoutTenantsInput } from "./SalePersonCreateNestedManyWithoutTenantsInput";
import { SalePriceTypeCreateNestedManyWithoutTenantsInput } from "./SalePriceTypeCreateNestedManyWithoutTenantsInput";
import { SaleQuotationDetailCreateNestedManyWithoutTenantsInput } from "./SaleQuotationDetailCreateNestedManyWithoutTenantsInput";
import { SaleQuotationCreateNestedManyWithoutTenantsInput } from "./SaleQuotationCreateNestedManyWithoutTenantsInput";
import { SaleReturnDetailCreateNestedManyWithoutTenantsInput } from "./SaleReturnDetailCreateNestedManyWithoutTenantsInput";
import { SaleReturnCreateNestedManyWithoutTenantsInput } from "./SaleReturnCreateNestedManyWithoutTenantsInput";
import { SaleTaxCreateNestedManyWithoutTenantsInput } from "./SaleTaxCreateNestedManyWithoutTenantsInput";
import { SaleTeamCreateNestedManyWithoutTenantsInput } from "./SaleTeamCreateNestedManyWithoutTenantsInput";
import { SaleCreateNestedManyWithoutTenantsInput } from "./SaleCreateNestedManyWithoutTenantsInput";
import { ScrapReasonCreateNestedManyWithoutTenantsInput } from "./ScrapReasonCreateNestedManyWithoutTenantsInput";
import { ShippingStatusCreateNestedManyWithoutTenantsInput } from "./ShippingStatusCreateNestedManyWithoutTenantsInput";
import { StoreCreateNestedManyWithoutTenantsInput } from "./StoreCreateNestedManyWithoutTenantsInput";
import { SupplierCreateNestedManyWithoutTenantsInput } from "./SupplierCreateNestedManyWithoutTenantsInput";
import { UnitCreateNestedManyWithoutTenantsInput } from "./UnitCreateNestedManyWithoutTenantsInput";
import { UserCreateNestedManyWithoutTenantsInput } from "./UserCreateNestedManyWithoutTenantsInput";
import { WorkCenterRoutingCreateNestedManyWithoutTenantsInput } from "./WorkCenterRoutingCreateNestedManyWithoutTenantsInput";
import { WorkCenterCreateNestedManyWithoutTenantsInput } from "./WorkCenterCreateNestedManyWithoutTenantsInput";

@InputType()
class TenantCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => AccountCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => AccountCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationDependencyCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDependencyCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ApplicationDependencyCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  applicationDependencies?: ApplicationDependencyCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ApplicationCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  applications?: ApplicationCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => AttributeValueCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => AttributeValueCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => AttributeValueCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  attributeValues?: AttributeValueCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => AttributeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => AttributeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => AttributeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  attributes?: AttributeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => BankBranchCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => BankBranchCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => BankBranchCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  bankBranches?: BankBranchCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => BankTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => BankTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => BankTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  bankTypes?: BankTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => BarcodeTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => BarcodeTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => BarcodeTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  barcodeTypes?: BarcodeTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => BillOfMaterialDetailCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => BillOfMaterialTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  billOfMaterialTypes?: BillOfMaterialTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => BillOfMaterialCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => CashRepositoryCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => CashRepositoryCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => CashRepositoryCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  cashRepositories?: CashRepositoryCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  creatorUserId?: string | null;

  @ApiProperty({
    required: false,
    type: () => CurrencyCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => CurrencyCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => CurrencyCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  currencies?: CurrencyCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => CustomerCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => CustomerCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  customers?: CustomerCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeClassCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeClassCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => EmployeeClassCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  employeeClasses?: EmployeeClassCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeDepartmentCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeDepartmentCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => EmployeeDepartmentCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  employeeDepartments?: EmployeeDepartmentCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => EmployeeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  employees?: EmployeeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => InstallmentSaleFeeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFeeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => InstallmentSaleFeeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  installmentSaleFees?: InstallmentSaleFeeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => InvoiceTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => InvoiceTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  invoiceTypes?: InvoiceTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastModifierUserIdl?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  normalizedName!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderStatusCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => OrderStatusCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => OrderStatusCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  orderStatuses?: OrderStatusCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PaymentMethodCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PaymentMethodCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  paymentMethods?: PaymentMethodCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PaymentStatusCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PaymentStatusCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PaymentStatusCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  paymentStatuses?: PaymentStatusCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTermCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PaymentTermCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  paymentTerms?: PaymentTermCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PaymentTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PaymentTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PaymentTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  paymentTypes?: PaymentTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PeriodCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PeriodCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PeriodCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  periods?: PeriodCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateContentCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateContentCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PrintTemplateContentCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  printTemplateContents?: PrintTemplateContentCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateGroupCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateGroupCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PrintTemplateGroupCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  printTemplateGroups?: PrintTemplateGroupCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PrintTemplateCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  printTemplates?: PrintTemplateCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductBarcodeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductBarcodeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductBarcodeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productBarcodes?: ProductBarcodeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductCategoryCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductCategoryCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductCategoryCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productCategories?: ProductCategoryCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductDepartmentCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductDepartmentCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productDepartments?: ProductDepartmentCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductGroupCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductGroupCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductGroupCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productGroups?: ProductGroupCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productTypes?: ProductTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductUnitCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductUnitCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductUnitCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productUnits?: ProductUnitCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductVariantCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductVariantCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productVariants?: ProductVariantCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductionAvailabilityCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductionAvailabilityCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductionAvailabilityCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productionAvailabilities?: ProductionAvailabilityCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductionDocumentCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductionDocumentCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductionDocumentCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productionDocuments?: ProductionDocumentCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductionOrderCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  productionOrders?: ProductionOrderCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseDetailCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseDetailCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PurchaseDetailCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  purchaseDetails?: PurchaseDetailCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PurchasePriceTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PurchasePriceTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PurchasePriceTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  purchasePriceTypes?: PurchasePriceTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnDetailCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnDetailCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PurchaseReturnDetailCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  purchaseReturnDetails?: PurchaseReturnDetailCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PurchaseReturnCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => PurchaseCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  purchases?: PurchaseCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ResourceTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ResourceTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  resourceTypes?: ResourceTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ResourceCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ResourceCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  resources?: ResourceCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => RoleGroupCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => RoleGroupCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => RoleGroupCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  roleGroups?: RoleGroupCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SalaryItemGroupCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SalaryItemGroupCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SalaryItemGroupCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  salaryItemGroups?: SalaryItemGroupCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SalaryItemTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SalaryItemTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SalaryItemTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  salaryItemTypes?: SalaryItemTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SalaryItemCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SalaryItemCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SalaryItemCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  salaryItems?: SalaryItemCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SalaryLawCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SalaryLawCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SalaryLawCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  salaryLaws?: SalaryLawCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleDetailCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleDetailCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleDetails?: SaleDetailCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleOrderDetailCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderDetailCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleOrderDetailCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleOrderDetails?: SaleOrderDetailCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleOrderCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleOrderCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleOrders?: SaleOrderCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SalePaymentCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SalePaymentCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SalePaymentCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  salePayments?: SalePaymentCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SalePersonCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SalePersonCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SalePersonCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  salePeople?: SalePersonCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SalePriceTypeCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SalePriceTypeCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SalePriceTypeCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  salePriceTypes?: SalePriceTypeCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationDetailCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleQuotationDetailCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleQuotationDetailCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleQuotationDetails?: SaleQuotationDetailCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleQuotationCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleQuotationCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleQuotations?: SaleQuotationCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleReturnDetailCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleReturnDetails?: SaleReturnDetailCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleReturnCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleReturns?: SaleReturnCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleTaxCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleTaxCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleTaxes?: SaleTaxCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleTeamCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleTeamCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleTeamCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  saleTeams?: SaleTeamCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SaleCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SaleCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SaleCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  sales?: SaleCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ScrapReasonCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ScrapReasonCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ScrapReasonCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  scrapReasons?: ScrapReasonCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ShippingStatusCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ShippingStatusCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ShippingStatusCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  shippingStatuses?: ShippingStatusCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => StoreCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => StoreCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => StoreCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  stores?: StoreCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => SupplierCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => SupplierCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => SupplierCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  suppliers?: SupplierCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  tenancyName!: string;

  @ApiProperty({
    required: false,
    type: () => UnitCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => UnitCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => UnitCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  units?: UnitCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => WorkCenterRoutingCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterRoutingCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => WorkCenterRoutingCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  workCenterRoutings?: WorkCenterRoutingCreateNestedManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => WorkCenterCreateNestedManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterCreateNestedManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => WorkCenterCreateNestedManyWithoutTenantsInput, {
    nullable: true,
  })
  workCenters?: WorkCenterCreateNestedManyWithoutTenantsInput;
}

export { TenantCreateInput as TenantCreateInput };
