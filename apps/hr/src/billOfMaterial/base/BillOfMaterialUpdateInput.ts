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
import { BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput } from "./BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
  IsDate,
  IsBoolean,
  IsNumber,
} from "class-validator";

import { Type } from "class-transformer";
import { BillOfMaterialTypeWhereUniqueInput } from "../../billOfMaterialType/base/BillOfMaterialTypeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../../productVariant/base/ProductVariantWhereUniqueInput";
import { ProductionOrderUpdateManyWithoutBillOfMaterialsInput } from "./ProductionOrderUpdateManyWithoutBillOfMaterialsInput";
import { Decimal } from "decimal.js";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class BillOfMaterialUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput)
  @IsOptional()
  @Field(() => BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => BillOfMaterialTypeWhereUniqueInput, {
    nullable: true,
  })
  billOfMaterialTypeId?: BillOfMaterialTypeWhereUniqueInput;

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
  code?: string;

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
  daysToPrepareManufacturingOrder?: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

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
    type: () => ProductionOrderUpdateManyWithoutBillOfMaterialsInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderUpdateManyWithoutBillOfMaterialsInput)
  @IsOptional()
  @Field(() => ProductionOrderUpdateManyWithoutBillOfMaterialsInput, {
    nullable: true,
  })
  productionOrders?: ProductionOrderUpdateManyWithoutBillOfMaterialsInput;

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
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sequence?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

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

export { BillOfMaterialUpdateInput as BillOfMaterialUpdateInput };