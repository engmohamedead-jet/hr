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
import { CashRepositoryWhereUniqueInput } from "../../cashRepository/base/CashRepositoryWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceTypeWhereUniqueInput } from "../../invoiceType/base/InvoiceTypeWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PaymentTypeWhereUniqueInput } from "../../paymentType/base/PaymentTypeWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SaleDetailListRelationFilter } from "../../saleDetail/base/SaleDetailListRelationFilter";
import { SalePaymentListRelationFilter } from "../../salePayment/base/SalePaymentListRelationFilter";
import { SalePriceTypeWhereUniqueInput } from "../../salePriceType/base/SalePriceTypeWhereUniqueInput";
import { SaleReturnListRelationFilter } from "../../saleReturn/base/SaleReturnListRelationFilter";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class SaleWhereInput {
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
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  discountTotal?: DecimalFilter;

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
    type: () => InvoiceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvoiceTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => InvoiceTypeWhereUniqueInput, {
    nullable: true,
  })
  invoiceTypeId?: InvoiceTypeWhereUniqueInput;

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
  isCancelled?: BooleanFilter;

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
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  netTotal?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  nonTaxableTotal?: DecimalNullableFilter;

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
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  paid?: DecimalNullableFilter;

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
  paymentTerm?: PaymentTermWhereUniqueInput;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  referenceNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  remaining?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  saleDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => SaleDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleDetailListRelationFilter)
  @IsOptional()
  @Field(() => SaleDetailListRelationFilter, {
    nullable: true,
  })
  saleDetails?: SaleDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SalePaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SalePaymentListRelationFilter)
  @IsOptional()
  @Field(() => SalePaymentListRelationFilter, {
    nullable: true,
  })
  salePayments?: SalePaymentListRelationFilter;

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
  salePriceTypeId?: SalePriceTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SaleReturnListRelationFilter)
  @IsOptional()
  @Field(() => SaleReturnListRelationFilter, {
    nullable: true,
  })
  saleReturns?: SaleReturnListRelationFilter;

  @ApiProperty({
    required: false,
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  saleTotal?: DecimalFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  sequenceNumber?: StringFilter;

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
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  tax?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  taxRate?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  taxableTotal?: DecimalNullableFilter;

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

export { SaleWhereInput as SaleWhereInput };
