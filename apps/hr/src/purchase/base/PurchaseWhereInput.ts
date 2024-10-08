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
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceTypeWhereUniqueInput } from "../../invoiceType/base/InvoiceTypeWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";
import { PaymentTypeWhereUniqueInput } from "../../paymentType/base/PaymentTypeWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { PurchaseDetailListRelationFilter } from "../../purchaseDetail/base/PurchaseDetailListRelationFilter";
import { PurchasePriceTypeWhereUniqueInput } from "../../purchasePriceType/base/PurchasePriceTypeWhereUniqueInput";
import { PurchaseReturnListRelationFilter } from "../../purchaseReturn/base/PurchaseReturnListRelationFilter";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class PurchaseWhereInput {
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
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  netTotal?: DecimalFilter;

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
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  paid?: DecimalFilter;

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
  paymentTermId?: PaymentTermWhereUniqueInput;

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
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  purchaseDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseDetailListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseDetailListRelationFilter, {
    nullable: true,
  })
  purchaseDetails?: PurchaseDetailListRelationFilter;

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
    type: () => PurchaseReturnListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseReturnListRelationFilter, {
    nullable: true,
  })
  purchaseReturns?: PurchaseReturnListRelationFilter;

  @ApiProperty({
    required: false,
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  purchaseTotal?: DecimalFilter;

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
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  remaining?: DecimalFilter;

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

export { PurchaseWhereInput as PurchaseWhereInput };
