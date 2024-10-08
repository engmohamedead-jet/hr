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
import { BillOfMaterialDetail } from "../../billOfMaterialDetail/base/BillOfMaterialDetail";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsInt,
  Min,
  Max,
  IsBoolean,
  IsNumber,
} from "class-validator";

import { Type } from "class-transformer";
import { BillOfMaterialType } from "../../billOfMaterialType/base/BillOfMaterialType";
import { Product } from "../../product/base/Product";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { ProductionOrder } from "../../productionOrder/base/ProductionOrder";
import { Decimal } from "decimal.js";
import { Tenant } from "../../tenant/base/Tenant";
import { Unit } from "../../unit/base/Unit";

@ObjectType()
class BillOfMaterial {
  @ApiProperty({
    required: false,
    type: () => [BillOfMaterialDetail],
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetail)
  @IsOptional()
  billOfMaterialDetails?: Array<BillOfMaterialDetail>;

  @ApiProperty({
    required: true,
    type: () => BillOfMaterialType,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialType)
  billOfMaterialTypeId?: BillOfMaterialType;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @Field(() => Number)
  daysToPrepareManufacturingOrder!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate!: Date | null;

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
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note!: string | null;

  @ApiProperty({
    required: true,
    type: () => Product,
  })
  @ValidateNested()
  @Type(() => Product)
  productId?: Product;

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
    type: () => [ProductionOrder],
  })
  @ValidateNested()
  @Type(() => ProductionOrder)
  @IsOptional()
  productionOrders?: Array<ProductionOrder>;

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
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sequence!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate!: Date | null;

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

export { BillOfMaterial as BillOfMaterial };
