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
  IsOptional,
  IsNumber,
  Max,
  IsBoolean,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";

import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { InvoiceTypeWhereUniqueInput } from "../../invoiceType/base/InvoiceTypeWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PaymentTypeWhereUniqueInput } from "../../paymentType/base/PaymentTypeWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../../purchase/base/PurchaseWhereUniqueInput";
import { PurchasePriceTypeWhereUniqueInput } from "../../purchasePriceType/base/PurchasePriceTypeWhereUniqueInput";
import { PurchaseReturnDetailUpdateManyWithoutPurchaseReturnsInput } from "./PurchaseReturnDetailUpdateManyWithoutPurchaseReturnsInput";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class PurchaseReturnUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CashRepositoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CashRepositoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CashRepositoryWhereUniqueInput, {
    nullable: true,
  })
  cashRepositoryId?: CashRepositoryWhereUniqueInput;

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
  discountTotal?: Decimal;

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
  isCancelled?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isReplicated?: boolean;

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
  netTotal?: Decimal;

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
  paid?: Decimal;

  @ApiProperty({
    required: false,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentTermWhereUniqueInput, {
    nullable: true,
  })
  paymentTermId?: PaymentTermWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PaymentTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentTypeWhereUniqueInput, {
    nullable: true,
  })
  paymentTypeId?: PaymentTypeWhereUniqueInput;

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
  purchaseId?: PurchaseWhereUniqueInput | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  purchaseReturnDate?: Date;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnDetailUpdateManyWithoutPurchaseReturnsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnDetailUpdateManyWithoutPurchaseReturnsInput)
  @IsOptional()
  @Field(() => PurchaseReturnDetailUpdateManyWithoutPurchaseReturnsInput, {
    nullable: true,
  })
  purchaseReturnDetails?: PurchaseReturnDetailUpdateManyWithoutPurchaseReturnsInput;

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
  purchaseReturnTotal?: Decimal;

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
  remaining?: Decimal;

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
  sequenceNumber?: string;

  @ApiProperty({
    required: false,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreWhereUniqueInput, {
    nullable: true,
  })
  storeId?: StoreWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplierId?: SupplierWhereUniqueInput;

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
  @Max(10)
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

export { PurchaseReturnUpdateInput as PurchaseReturnUpdateInput };
