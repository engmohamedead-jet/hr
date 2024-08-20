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
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
  IsNumber,
  Max,
  IsBoolean,
  Min,
} from "class-validator";

import { CashRepositoryWhereUniqueInput } from "../../cashRepository/base/CashRepositoryWhereUniqueInput";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Decimal } from "decimal.js";
import { InvoiceTypeWhereUniqueInput } from "../../invoiceType/base/InvoiceTypeWhereUniqueInput";
import { OrderStatusWhereUniqueInput } from "../../orderStatus/base/OrderStatusWhereUniqueInput";
import { PaymentStatusWhereUniqueInput } from "../../paymentStatus/base/PaymentStatusWhereUniqueInput";
import { PaymentTypeWhereUniqueInput } from "../../paymentType/base/PaymentTypeWhereUniqueInput";
import { SaleOrderDetailUpdateManyWithoutSaleOrdersInput } from "./SaleOrderDetailUpdateManyWithoutSaleOrdersInput";
import { SalePriceTypeWhereUniqueInput } from "../../salePriceType/base/SalePriceTypeWhereUniqueInput";
import { SaleQuotationWhereUniqueInput } from "../../saleQuotation/base/SaleQuotationWhereUniqueInput";
import { ShippingStatusWhereUniqueInput } from "../../shippingStatus/base/ShippingStatusWhereUniqueInput";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class SaleOrderUpdateInput {
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
  billingAddress?: string | null;

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
  cashRepositoryId?: CashRepositoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customerId?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deliveryDate?: Date | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expectedDeliveryDate?: Date | null;

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
    type: () => OrderStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderStatusWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderStatusWhereUniqueInput, {
    nullable: true,
  })
  orderStatus?: OrderStatusWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PaymentStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentStatusWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentStatusWhereUniqueInput, {
    nullable: true,
  })
  paymentStatus?: PaymentStatusWhereUniqueInput | null;

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
  paymentTypeId?: PaymentTypeWhereUniqueInput | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  saleOrderDate?: Date;

  @ApiProperty({
    required: false,
    type: () => SaleOrderDetailUpdateManyWithoutSaleOrdersInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderDetailUpdateManyWithoutSaleOrdersInput)
  @IsOptional()
  @Field(() => SaleOrderDetailUpdateManyWithoutSaleOrdersInput, {
    nullable: true,
  })
  saleOrderDetails?: SaleOrderDetailUpdateManyWithoutSaleOrdersInput;

  @ApiProperty({
    required: false,
    type: () => SalePriceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalePriceTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => SalePriceTypeWhereUniqueInput, {
    nullable: true,
  })
  salePriceType?: SalePriceTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  salePriceTypeId?: number;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleQuotationWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleQuotationWhereUniqueInput, {
    nullable: true,
  })
  saleQuotation?: SaleQuotationWhereUniqueInput | null;

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
  saleTotal?: Decimal;

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
  shippingAddress?: string | null;

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
  shippingCost?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => ShippingStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShippingStatusWhereUniqueInput)
  @IsOptional()
  @Field(() => ShippingStatusWhereUniqueInput, {
    nullable: true,
  })
  shippingStatus?: ShippingStatusWhereUniqueInput | null;

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
  storeId?: StoreWhereUniqueInput | null;

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
  tenant?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  transactionDateTime?: Date | null;
}

export { SaleOrderUpdateInput as SaleOrderUpdateInput };