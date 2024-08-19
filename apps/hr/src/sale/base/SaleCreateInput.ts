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
import { CashRepositoryWhereUniqueInput } from "../../cashRepository/base/CashRepositoryWhereUniqueInput";

import {
  ValidateNested,
  IsNumber,
  Max,
  IsOptional,
  IsBoolean,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";

import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Decimal } from "decimal.js";
import { InvoiceTypeWhereUniqueInput } from "../../invoiceType/base/InvoiceTypeWhereUniqueInput";
import { PaymentTypeWhereUniqueInput } from "../../paymentType/base/PaymentTypeWhereUniqueInput";
import { SaleDetailCreateNestedManyWithoutSalesInput } from "./SaleDetailCreateNestedManyWithoutSalesInput";
import { SalePriceTypeWhereUniqueInput } from "../../salePriceType/base/SalePriceTypeWhereUniqueInput";
import { SaleReturnCreateNestedManyWithoutSalesInput } from "./SaleReturnCreateNestedManyWithoutSalesInput";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class SaleCreateInput {
  @ApiProperty({
    required: true,
    type: () => CashRepositoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CashRepositoryWhereUniqueInput)
  @Field(() => CashRepositoryWhereUniqueInput)
  cashRepositoryId!: CashRepositoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  customerId!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Float)
  discountTotal!: Decimal;

  @ApiProperty({
    required: false,
    type: () => InvoiceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvoiceTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => InvoiceTypeWhereUniqueInput, {
    nullable: true,
  })
  invoiceTypeId?: InvoiceTypeWhereUniqueInput | null;

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
  isCancelled!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isReplicated!: boolean;

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
  netTotal?: Decimal | null;

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
  nonTaxableTotal?: Decimal | null;

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
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  paid?: Decimal | null;

  @ApiProperty({
    required: true,
    type: () => PaymentTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTypeWhereUniqueInput)
  @Field(() => PaymentTypeWhereUniqueInput)
  paymentTypeId!: PaymentTypeWhereUniqueInput;

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
  referenceNumber?: string | null;

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
  remaining?: Decimal | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  saleDate!: Date;

  @ApiProperty({
    required: false,
    type: () => SaleDetailCreateNestedManyWithoutSalesInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailCreateNestedManyWithoutSalesInput)
  @IsOptional()
  @Field(() => SaleDetailCreateNestedManyWithoutSalesInput, {
    nullable: true,
  })
  saleDetails?: SaleDetailCreateNestedManyWithoutSalesInput;

  @ApiProperty({
    required: true,
    type: () => SalePriceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalePriceTypeWhereUniqueInput)
  @Field(() => SalePriceTypeWhereUniqueInput)
  salePriceTypeId!: SalePriceTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnCreateNestedManyWithoutSalesInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnCreateNestedManyWithoutSalesInput)
  @IsOptional()
  @Field(() => SaleReturnCreateNestedManyWithoutSalesInput, {
    nullable: true,
  })
  saleReturns?: SaleReturnCreateNestedManyWithoutSalesInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Float)
  saleTotal!: Decimal;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  sequenceNumber!: string;

  @ApiProperty({
    required: true,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @Field(() => StoreWhereUniqueInput)
  storeId!: StoreWhereUniqueInput;

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
  tax?: Decimal | null;

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
  taxRate?: Decimal | null;

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
  taxableTotal?: Decimal | null;

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

export { SaleCreateInput as SaleCreateInput };