/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsBoolean,
  IsNumber,
  Max,
  Min,
  IsInt,
  IsDate,
} from "class-validator";

import { BillOfMaterialDetailUpdateManyWithoutProductsInput } from "./BillOfMaterialDetailUpdateManyWithoutProductsInput";
import { Type } from "class-transformer";
import { BillOfMaterialUpdateManyWithoutProductsInput } from "./BillOfMaterialUpdateManyWithoutProductsInput";
import { Decimal } from "decimal.js";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ProductBarcodeUpdateManyWithoutProductsInput } from "./ProductBarcodeUpdateManyWithoutProductsInput";
import { ProductCategoryWhereUniqueInput } from "../../productCategory/base/ProductCategoryWhereUniqueInput";
import { ProductDepartmentWhereUniqueInput } from "../../productDepartment/base/ProductDepartmentWhereUniqueInput";
import { ProductGroupWhereUniqueInput } from "../../productGroup/base/ProductGroupWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../../productType/base/ProductTypeWhereUniqueInput";
import { ProductUnitUpdateManyWithoutProductsInput } from "./ProductUnitUpdateManyWithoutProductsInput";
import { ProductVariantUpdateManyWithoutProductsInput } from "./ProductVariantUpdateManyWithoutProductsInput";
import { ProductionOrderUpdateManyWithoutProductsInput } from "./ProductionOrderUpdateManyWithoutProductsInput";
import { PurchaseDetailUpdateManyWithoutProductsInput } from "./PurchaseDetailUpdateManyWithoutProductsInput";
import { PurchaseReturnDetailUpdateManyWithoutProductsInput } from "./PurchaseReturnDetailUpdateManyWithoutProductsInput";
import { SaleDetailUpdateManyWithoutProductsInput } from "./SaleDetailUpdateManyWithoutProductsInput";
import { SaleQuotationDetailUpdateManyWithoutProductsInput } from "./SaleQuotationDetailUpdateManyWithoutProductsInput";
import { SaleReturnDetailUpdateManyWithoutProductsInput } from "./SaleReturnDetailUpdateManyWithoutProductsInput";
import { SaleTaxWhereUniqueInput } from "../../saleTax/base/SaleTaxWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class ProductUpdateInput {
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
  barcode?: string | null;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => BillOfMaterialDetailUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => BillOfMaterialUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  billOfMaterials?: BillOfMaterialUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  canExpire?: boolean;

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
    type: Number,
  })
  @IsNumber()
  @Max(999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  costPrice?: Decimal;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  costPriceIncludesTax?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-99999999999)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  currentStockQuantity?: Decimal;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  daysToManufacture?: number | null;

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
  defaultStoreId?: StoreWhereUniqueInput | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  discontinuedDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(100)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  discountRate?: Decimal | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  expireAlarmInDays?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  expireIsDefaultAfterDaysFromPurchase?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-99999999999)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  firstStockQuantity?: Decimal | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isCompound?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFavorite?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  maintainInventory?: boolean;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  minimumSalePrice?: Decimal | null;

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
  name?: string;

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
  normalizedName?: string;

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
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  photo?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ProductBarcodeUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => ProductBarcodeUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => ProductBarcodeUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  productBarcodes?: ProductBarcodeUpdateManyWithoutProductsInput;

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
  productCategoryId?: ProductCategoryWhereUniqueInput | null;

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
  productDepartmentId?: ProductDepartmentWhereUniqueInput | null;

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
  productGroupId?: ProductGroupWhereUniqueInput | null;

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
    type: () => ProductUnitUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => ProductUnitUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => ProductUnitUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  productUnits?: ProductUnitUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => ProductVariantUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => ProductVariantUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  productVariants?: ProductVariantUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => ProductionOrderUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  productionOrders?: ProductionOrderUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(100)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  profitRate?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => PurchaseDetailUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseDetailUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => PurchaseDetailUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  purchaseDetails?: PurchaseDetailUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnDetailUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnDetailUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => PurchaseReturnDetailUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  purchaseReturnDetails?: PurchaseReturnDetailUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  reorderQuantity?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => SaleDetailUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => SaleDetailUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  saleDetails?: SaleDetailUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  salePrice?: Decimal;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  salePriceIncludesTax?: boolean;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationDetailUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => SaleQuotationDetailUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => SaleQuotationDetailUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  saleQuotationDetails?: SaleQuotationDetailUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => SaleReturnDetailUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  saleReturnDetails?: SaleReturnDetailUpdateManyWithoutProductsInput;

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
  saleTaxId?: SaleTaxWhereUniqueInput | null;

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
  tenantId?: TenantWhereUniqueInput | null;
}

export { ProductUpdateInput as ProductUpdateInput };
