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
import { ProductGroupListRelationFilter } from "../../productGroup/base/ProductGroupListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountListRelationFilter } from "./AccountListRelationFilter";

@InputType()
class AccountWhereInput {
  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  SaleReturnAccountProductGroups?: ProductGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  accountNumber?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  aleAccountProductGroups?: ProductGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  costOfGoodsSoldAccountProductGroups?: ProductGroupListRelationFilter;

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
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  inventoryAccountProductGroups?: ProductGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isMasterAccount?: BooleanNullableFilter;

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
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  parentAccountId?: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => AccountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AccountListRelationFilter)
  @IsOptional()
  @Field(() => AccountListRelationFilter, {
    nullable: true,
  })
  parentAccounts?: AccountListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  purchaseAccountProductGroups?: ProductGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  purchaseDiscountAccountProductGroups?: ProductGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  purchaseReturnAccountProductGroups?: ProductGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductGroupListRelationFilter, {
    nullable: true,
  })
  saleDiscountAccountProductGroups?: ProductGroupListRelationFilter;
}

export { AccountWhereInput as AccountWhereInput };
