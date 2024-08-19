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
  Min,
} from "class-validator";

import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { Type } from "class-transformer";
import { ProductVariantWhereUniqueInput } from "../../productVariant/base/ProductVariantWhereUniqueInput";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../../salePriceType/base/SalePriceTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class SaleDetailCreateInput {
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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isError!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isReplicated!: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isTaxed?: boolean | null;

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
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(999999999)
  @Field(() => Float)
  price!: Decimal;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(999999999)
  @Field(() => Float)
  priceTotal!: Decimal;

  @ApiProperty({
    required: true,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @Field(() => ProductWhereUniqueInput)
  productId!: ProductWhereUniqueInput;

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
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Float)
  quantity!: Decimal;

  @ApiProperty({
    required: true,
    type: () => SaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleWhereUniqueInput)
  @Field(() => SaleWhereUniqueInput)
  saleId!: SaleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalePriceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalePriceTypeWhereUniqueInput)
  @Field(() => SalePriceTypeWhereUniqueInput)
  salePriceTypeId!: SalePriceTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @Field(() => Number)
  sequence!: number;

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
    required: true,
    type: () => UnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereUniqueInput)
  @Field(() => UnitWhereUniqueInput)
  unitId!: UnitWhereUniqueInput;
}

export { SaleDetailCreateInput as SaleDetailCreateInput };
