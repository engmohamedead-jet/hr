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
import { BillOfMaterialWhereUniqueInput } from "../../billOfMaterial/base/BillOfMaterialWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../../productVariant/base/ProductVariantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";
import { WorkCenterRoutingWhereUniqueInput } from "../../workCenterRouting/base/WorkCenterRoutingWhereUniqueInput";

@InputType()
class BillOfMaterialDetailWhereInput {
  @ApiProperty({
    required: false,
    type: () => BillOfMaterialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialWhereUniqueInput)
  @IsOptional()
  @Field(() => BillOfMaterialWhereUniqueInput, {
    nullable: true,
  })
  billOfMaterial?: BillOfMaterialWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  costShare?: DecimalNullableFilter;

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
  isManualConsumption?: BooleanNullableFilter;

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
  productVariantId?: ProductVariantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  quantity?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  sequence?: IntNullableFilter;

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
  tenant?: TenantWhereUniqueInput;

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

  @ApiProperty({
    required: false,
    type: () => WorkCenterRoutingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterRoutingWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkCenterRoutingWhereUniqueInput, {
    nullable: true,
  })
  workCenterRoutingId?: WorkCenterRoutingWhereUniqueInput;
}

export { BillOfMaterialDetailWhereInput as BillOfMaterialDetailWhereInput };
