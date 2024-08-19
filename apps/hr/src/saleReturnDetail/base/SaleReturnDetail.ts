/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  IsNumber,
  Max,
  IsBoolean,
  ValidateNested,
  IsInt,
} from "class-validator";

import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { Product } from "../../product/base/Product";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { SalePriceType } from "../../salePriceType/base/SalePriceType";
import { SaleReturn } from "../../saleReturn/base/SaleReturn";
import { Tenant } from "../../tenant/base/Tenant";
import { Unit } from "../../unit/base/Unit";

@ObjectType()
class SaleReturnDetail {
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
  barcode!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  discount!: Decimal | null;

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
  discountRate!: Decimal | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
    type: () => Product,
  })
  @ValidateNested()
  @Type(() => Product)
  productId?: Product;

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
  productSerialNumber!: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductVariant,
  })
  @ValidateNested()
  @Type(() => ProductVariant)
  @IsOptional()
  productVariantId?: ProductVariant | null;

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
  quantity!: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => SalePriceType,
  })
  @ValidateNested()
  @Type(() => SalePriceType)
  @IsOptional()
  salePriceType?: SalePriceType | null;

  @ApiProperty({
    required: true,
    type: () => SaleReturn,
  })
  @ValidateNested()
  @Type(() => SaleReturn)
  saleReturnId?: SaleReturn;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  sequence!: number;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenantId?: Tenant | null;

  @ApiProperty({
    required: true,
    type: () => Unit,
  })
  @ValidateNested()
  @Type(() => Unit)
  unitId?: Unit;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { SaleReturnDetail as SaleReturnDetail };
