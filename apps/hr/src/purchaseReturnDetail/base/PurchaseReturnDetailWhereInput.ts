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
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../../productVariant/base/ProductVariantWhereUniqueInput";
import { PurchasePriceTypeWhereUniqueInput } from "../../purchasePriceType/base/PurchasePriceTypeWhereUniqueInput";
import { PurchaseReturnWhereUniqueInput } from "../../purchaseReturn/base/PurchaseReturnWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class PurchaseReturnDetailWhereInput {
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
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  discount?: DecimalNullableFilter;

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
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isError?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isReplicated?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isTaxed?: BooleanFilter;

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
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  price?: DecimalFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  priceTotal?: DecimalNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  productSerialNumber?: StringNullableFilter;

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
    type: () => PurchasePriceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchasePriceTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => PurchasePriceTypeWhereUniqueInput, {
    nullable: true,
  })
  purchasePriceTypeId?: PurchasePriceTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnWhereUniqueInput)
  @IsOptional()
  @Field(() => PurchaseReturnWhereUniqueInput, {
    nullable: true,
  })
  purchaseReturnId?: PurchaseReturnWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  quantity?: DecimalFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  sequence?: IntFilter;

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

export { PurchaseReturnDetailWhereInput as PurchaseReturnDetailWhereInput };
