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
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseDetailWhereUniqueInput } from "../../purchaseDetail/base/PurchaseDetailWhereUniqueInput";
import { PurchaseReturnDetailWhereUniqueInput } from "../../purchaseReturnDetail/base/PurchaseReturnDetailWhereUniqueInput";
import { PurchaseReturnWhereUniqueInput } from "../../purchaseReturn/base/PurchaseReturnWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../../purchase/base/PurchaseWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class PurchasePriceTypeWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isActive?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isDefault?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  normalizedName?: StringFilter;

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
    type: () => PurchaseDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => PurchaseDetailWhereUniqueInput, {
    nullable: true,
  })
  purchaseDetails?: PurchaseDetailWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => PurchaseReturnDetailWhereUniqueInput, {
    nullable: true,
  })
  purchaseReturnDetails?: PurchaseReturnDetailWhereUniqueInput;

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
  purchaseReturns?: PurchaseReturnWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseWhereUniqueInput)
  @IsOptional()
  @Field(() => PurchaseWhereUniqueInput, {
    nullable: true,
  })
  purchases?: PurchaseWhereUniqueInput;

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
}

export { PurchasePriceTypeWhereInput as PurchasePriceTypeWhereInput };
