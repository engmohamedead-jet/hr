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
  IsNumber,
  Max,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
  IsBoolean,
  IsDate,
  IsInt,
  Min,
} from "class-validator";

import { Decimal } from "decimal.js";
import { BankWhereUniqueInput } from "../../bank/base/BankWhereUniqueInput";
import { Type } from "class-transformer";
import { BankBranchWhereUniqueInput } from "../../bankBranch/base/BankBranchWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import { PaymentMethodWhereUniqueInput } from "../../paymentMethod/base/PaymentMethodWhereUniqueInput";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class SalePaymentUpdateInput {
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
  LocalCurrencyRatl?: Decimal;

  @ApiProperty({
    required: false,
    type: () => BankWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BankWhereUniqueInput)
  @IsOptional()
  @Field(() => BankWhereUniqueInput, {
    nullable: true,
  })
  bank?: BankWhereUniqueInput | null;

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
  bankBrach?: string;

  @ApiProperty({
    required: false,
    type: () => BankBranchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BankBranchWhereUniqueInput)
  @IsOptional()
  @Field(() => BankBranchWhereUniqueInput, {
    nullable: true,
  })
  bankBranch?: BankBranchWhereUniqueInput | null;

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
  chequeNumber?: string | null;

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
  creditCardNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => CurrencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyWhereUniqueInput)
  @IsOptional()
  @Field(() => CurrencyWhereUniqueInput, {
    nullable: true,
  })
  currencyId?: CurrencyWhereUniqueInput | null;

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
  foreignCurrencyRate?: Decimal;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isCheque?: boolean | null;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paidValue?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate?: Date;

  @ApiProperty({
    required: false,
    type: () => PaymentMethodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentMethodWhereUniqueInput, {
    nullable: true,
  })
  paymentMethodId?: PaymentMethodWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: () => SaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleWhereUniqueInput, {
    nullable: true,
  })
  saleId?: SaleWhereUniqueInput | null;

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
  seqeunce?: number;

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
  tenant?: TenantWhereUniqueInput | null;
}

export { SalePaymentUpdateInput as SalePaymentUpdateInput };
