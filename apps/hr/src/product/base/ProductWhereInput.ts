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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { BillOfMaterialDetailListRelationFilter } from "../../billOfMaterialDetail/base/BillOfMaterialDetailListRelationFilter";
import { BillOfMaterialListRelationFilter } from "../../billOfMaterial/base/BillOfMaterialListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProductBarcodeListRelationFilter } from "../../productBarcode/base/ProductBarcodeListRelationFilter";
import { ProductCategoryWhereUniqueInput } from "../../productCategory/base/ProductCategoryWhereUniqueInput";
import { ProductDepartmentWhereUniqueInput } from "../../productDepartment/base/ProductDepartmentWhereUniqueInput";
import { ProductGroupWhereUniqueInput } from "../../productGroup/base/ProductGroupWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../../productType/base/ProductTypeWhereUniqueInput";
import { ProductUnitListRelationFilter } from "../../productUnit/base/ProductUnitListRelationFilter";
import { ProductVariantListRelationFilter } from "../../productVariant/base/ProductVariantListRelationFilter";
import { ProductionOrderListRelationFilter } from "../../productionOrder/base/ProductionOrderListRelationFilter";
import { PurchaseDetailListRelationFilter } from "../../purchaseDetail/base/PurchaseDetailListRelationFilter";
import { PurchaseReturnDetailListRelationFilter } from "../../purchaseReturnDetail/base/PurchaseReturnDetailListRelationFilter";
import { SaleDetailListRelationFilter } from "../../saleDetail/base/SaleDetailListRelationFilter";
import { SaleOrderDetailListRelationFilter } from "../../saleOrderDetail/base/SaleOrderDetailListRelationFilter";
import { SaleQuotationDetailListRelationFilter } from "../../saleQuotationDetail/base/SaleQuotationDetailListRelationFilter";
import { SaleReturnDetailListRelationFilter } from "../../saleReturnDetail/base/SaleReturnDetailListRelationFilter";
import { SaleTaxWhereUniqueInput } from "../../saleTax/base/SaleTaxWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class ProductWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  barcode?: StringNullableFilter;

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
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  canExpire?: BooleanFilter;

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
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  costPrice?: DecimalFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  costPriceIncludesTax?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  currentStockQuantity?: DecimalFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  daysToManufacture?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreWhereUniqueInput, {
    nullable: true,
  })
  defaultStoreId?: StoreWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereUniqueInput)
  @IsOptional()
  @Field(() => UnitWhereUniqueInput, {
    nullable: true,
  })
  defaultUnitId?: UnitWhereUniqueInput;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  discontinuedDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  discountRate?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  expireAlarmInDays?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  expireIsDefaultAfterDaysFromPurchase?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  firstStockQuantity?: DecimalNullableFilter;

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
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isCompound?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isFavorite?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  maintainInventory?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  minimumSalePrice?: DecimalNullableFilter;

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
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  photo?: JsonFilter;

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
    type: () => ProductCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductCategoryWhereUniqueInput, {
    nullable: true,
  })
  productCategoryId?: ProductCategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductDepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductDepartmentWhereUniqueInput, {
    nullable: true,
  })
  productDepartmentId?: ProductDepartmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductGroupWhereUniqueInput, {
    nullable: true,
  })
  productGroupId?: ProductGroupWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductTypeWhereUniqueInput, {
    nullable: true,
  })
  productTypeId?: ProductTypeWhereUniqueInput;

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
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  profitRate?: DecimalNullableFilter;

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
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  reorderQuantity?: DecimalNullableFilter;

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
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  salePrice?: DecimalFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  salePriceIncludesTax?: BooleanFilter;

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
    type: () => SaleTaxWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleTaxWhereUniqueInput, {
    nullable: true,
  })
  saleTaxId?: SaleTaxWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenantId?: TenantWhereUniqueInput;
}

export { ProductWhereInput as ProductWhereInput };
