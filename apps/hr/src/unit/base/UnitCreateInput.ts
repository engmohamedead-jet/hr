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
import { BillOfMaterialDetailCreateNestedManyWithoutUnitsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutUnitsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { BillOfMaterialCreateNestedManyWithoutUnitsInput } from "./BillOfMaterialCreateNestedManyWithoutUnitsInput";
import { ProductUnitWhereUniqueInput } from "../../productUnit/base/ProductUnitWhereUniqueInput";
import { ProductUnitCreateNestedManyWithoutUnitsInput } from "./ProductUnitCreateNestedManyWithoutUnitsInput";
import { ProductionOrderCreateNestedManyWithoutUnitsInput } from "./ProductionOrderCreateNestedManyWithoutUnitsInput";
import { ProductCreateNestedManyWithoutUnitsInput } from "./ProductCreateNestedManyWithoutUnitsInput";
import { PurchaseDetailCreateNestedManyWithoutUnitsInput } from "./PurchaseDetailCreateNestedManyWithoutUnitsInput";
import { PurchaseReturnDetailCreateNestedManyWithoutUnitsInput } from "./PurchaseReturnDetailCreateNestedManyWithoutUnitsInput";
import { SaleDetailCreateNestedManyWithoutUnitsInput } from "./SaleDetailCreateNestedManyWithoutUnitsInput";
import { SaleQuotationDetailCreateNestedManyWithoutUnitsInput } from "./SaleQuotationDetailCreateNestedManyWithoutUnitsInput";
import { SaleReturnDetailCreateNestedManyWithoutUnitsInput } from "./SaleReturnDetailCreateNestedManyWithoutUnitsInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class UnitCreateInput {
  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => BillOfMaterialDetailCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => BillOfMaterialCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutUnitsInput;

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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

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
    type: () => ProductUnitCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => ProductUnitCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => ProductUnitCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  productUnits?: ProductUnitCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => ProductionOrderCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  productionOrders?: ProductionOrderCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseDetailCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseDetailCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => PurchaseDetailCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  purchaseDetails?: PurchaseDetailCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnDetailCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnDetailCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => PurchaseReturnDetailCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  purchaseReturnDetails?: PurchaseReturnDetailCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => SaleDetailCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => SaleDetailCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  saleDetails?: SaleDetailCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationDetailCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => SaleQuotationDetailCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => SaleQuotationDetailCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  saleQuotationDetails?: SaleQuotationDetailCreateNestedManyWithoutUnitsInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => SaleReturnDetailCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  saleReturnDetails?: SaleReturnDetailCreateNestedManyWithoutUnitsInput;

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

export { UnitCreateInput as UnitCreateInput };
