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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { Type } from "class-transformer";
import { ProductGroupWhereUniqueInput } from "./ProductGroupWhereUniqueInput";
import { ProductGroupUpdateManyWithoutProductGroupsInput } from "./ProductGroupUpdateManyWithoutProductGroupsInput";
import { ProductUpdateManyWithoutProductGroupsInput } from "./ProductUpdateManyWithoutProductGroupsInput";
import { SaleTaxWhereUniqueInput } from "../../saleTax/base/SaleTaxWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class ProductGroupUpdateInput {
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
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  costOfGoodsSoldAccount?: AccountWhereUniqueInput | null;

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
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  excludeFromPurchase?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  excludeFromSale?: boolean;

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
  inventoryAccount?: AccountWhereUniqueInput | null;

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
  isDefault?: boolean;

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
  name?: string;

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
  normalizedName?: string;

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
    type: () => ProductGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductGroupWhereUniqueInput, {
    nullable: true,
  })
  parentProductGroupId?: ProductGroupWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProductGroupUpdateManyWithoutProductGroupsInput,
  })
  @ValidateNested()
  @Type(() => ProductGroupUpdateManyWithoutProductGroupsInput)
  @IsOptional()
  @Field(() => ProductGroupUpdateManyWithoutProductGroupsInput, {
    nullable: true,
  })
  productGroups?: ProductGroupUpdateManyWithoutProductGroupsInput;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutProductGroupsInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutProductGroupsInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutProductGroupsInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutProductGroupsInput;

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
  purchaseAccountId?: AccountWhereUniqueInput | null;

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
  purchaseDiscountAccountId?: AccountWhereUniqueInput | null;

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
  purchaseReturnAccountId?: AccountWhereUniqueInput | null;

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
  saleAccountId?: AccountWhereUniqueInput | null;

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
  saleDiscountAccountId?: AccountWhereUniqueInput | null;

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
  saleReturnAccountId?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SaleTaxWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleTaxWhereUniqueInput, {
    nullable: true,
  })
  saleTaxId?: SaleTaxWhereUniqueInput | null;

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

export { ProductGroupUpdateInput as ProductGroupUpdateInput };
