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
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductGroupUpdateManyWithoutProductGroupsInput } from "./ProductGroupUpdateManyWithoutProductGroupsInput";
import { ProductGroupWhereUniqueInput } from "./ProductGroupWhereUniqueInput";
import { ProductUpdateManyWithoutProductGroupsInput } from "./ProductUpdateManyWithoutProductGroupsInput";
import { SaleTaxWhereUniqueInput } from "../../saleTax/base/SaleTaxWhereUniqueInput";

@InputType()
class ProductGroupUpdateInput {
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
  PurchaseDiscountAccountId?: AccountWhereUniqueInput | null;

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
  SaleReturnAccountId?: AccountWhereUniqueInput | null;

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
  account?: AccountWhereUniqueInput | null;

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
  excludeFromPurchase?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  excludeFromSale?: boolean | null;

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
  inventoryAccountId?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDefault?: boolean | null;

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
  notes?: string | null;

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
  parentProductGroupId?: ProductGroupUpdateManyWithoutProductGroupsInput;

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
  productGroups?: ProductGroupWhereUniqueInput | null;

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
    type: () => SaleTaxWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleTaxWhereUniqueInput, {
    nullable: true,
  })
  saleTaxId?: SaleTaxWhereUniqueInput | null;
}

export { ProductGroupUpdateInput as ProductGroupUpdateInput };
