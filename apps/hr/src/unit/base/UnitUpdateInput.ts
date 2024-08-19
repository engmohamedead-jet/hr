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
import { BillOfMaterialDetailUpdateManyWithoutUnitsInput } from "./BillOfMaterialDetailUpdateManyWithoutUnitsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { BillOfMaterialUpdateManyWithoutUnitsInput } from "./BillOfMaterialUpdateManyWithoutUnitsInput";
import { ProductUnitWhereUniqueInput } from "../../productUnit/base/ProductUnitWhereUniqueInput";
import { ProductUnitUpdateManyWithoutUnitsInput } from "./ProductUnitUpdateManyWithoutUnitsInput";
import { ProductionOrderUpdateManyWithoutUnitsInput } from "./ProductionOrderUpdateManyWithoutUnitsInput";
import { ProductUpdateManyWithoutUnitsInput } from "./ProductUpdateManyWithoutUnitsInput";
import { PurchaseDetailUpdateManyWithoutUnitsInput } from "./PurchaseDetailUpdateManyWithoutUnitsInput";
import { PurchaseReturnDetailUpdateManyWithoutUnitsInput } from "./PurchaseReturnDetailUpdateManyWithoutUnitsInput";
import { SaleDetailUpdateManyWithoutUnitsInput } from "./SaleDetailUpdateManyWithoutUnitsInput";
import { SaleQuotationDetailUpdateManyWithoutUnitsInput } from "./SaleQuotationDetailUpdateManyWithoutUnitsInput";
import { SaleReturnDetailUpdateManyWithoutUnitsInput } from "./SaleReturnDetailUpdateManyWithoutUnitsInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class UnitUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => BillOfMaterialDetailUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => BillOfMaterialUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  billOfMaterials?: BillOfMaterialUpdateManyWithoutUnitsInput;

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
  description?: string | null;

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
  isDefault?: boolean | null;

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
    type: () => ProductUnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductUnitWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductUnitWhereUniqueInput, {
    nullable: true,
  })
  productUnitCompareUnits?: ProductUnitWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProductUnitUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => ProductUnitUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => ProductUnitUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  productUnits?: ProductUnitUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => ProductionOrderUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  productionOrders?: ProductionOrderUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseDetailUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseDetailUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => PurchaseDetailUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  purchaseDetails?: PurchaseDetailUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnDetailUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnDetailUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => PurchaseReturnDetailUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  purchaseReturnDetails?: PurchaseReturnDetailUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => SaleDetailUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => SaleDetailUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  saleDetails?: SaleDetailUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationDetailUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => SaleQuotationDetailUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => SaleQuotationDetailUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  saleQuotationDetails?: SaleQuotationDetailUpdateManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailUpdateManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailUpdateManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => SaleReturnDetailUpdateManyWithoutUnitsInput, {
    nullable: true,
  })
  saleReturnDetails?: SaleReturnDetailUpdateManyWithoutUnitsInput;

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

export { UnitUpdateInput as UnitUpdateInput };
