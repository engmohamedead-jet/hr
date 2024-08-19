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
  IsNumber,
  Max,
  IsBoolean,
  ValidateNested,
  IsInt,
} from "class-validator";

import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { Type } from "class-transformer";
import { ProductVariantWhereUniqueInput } from "../../productVariant/base/ProductVariantWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../../salePriceType/base/SalePriceTypeWhereUniqueInput";
import { SaleReturnWhereUniqueInput } from "../../saleReturn/base/SaleReturnWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class SaleReturnDetailUpdateInput {
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
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  discount?: Decimal | null;

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
  isError?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isReplicated?: boolean;

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
  price?: Decimal;

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
  priceTotal?: Decimal;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  productId?: ProductWhereUniqueInput;

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
  productSerialNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductVariantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductVariantWhereUniqueInput, {
    nullable: true,
  })
  productVariantId?: ProductVariantWhereUniqueInput | null;

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
  quantity?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => SalePriceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalePriceTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => SalePriceTypeWhereUniqueInput, {
    nullable: true,
  })
  salePriceType?: SalePriceTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SaleReturnWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleReturnWhereUniqueInput, {
    nullable: true,
  })
  saleReturnId?: SaleReturnWhereUniqueInput;

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
  sequence?: number;

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
  unitId?: UnitWhereUniqueInput;
}

export { SaleReturnDetailUpdateInput as SaleReturnDetailUpdateInput };