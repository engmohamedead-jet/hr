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
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { SaleDetailWhereUniqueInput } from "../../saleDetail/base/SaleDetailWhereUniqueInput";
import { SaleQuotationDetailWhereUniqueInput } from "../../saleQuotationDetail/base/SaleQuotationDetailWhereUniqueInput";
import { SaleReturnDetailWhereUniqueInput } from "../../saleReturnDetail/base/SaleReturnDetailWhereUniqueInput";
import { SaleReturnWhereUniqueInput } from "../../saleReturn/base/SaleReturnWhereUniqueInput";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class SalePriceTypeWhereInput {
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
    type: () => SaleDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleDetailWhereUniqueInput, {
    nullable: true,
  })
  saleDetails?: SaleDetailWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SaleQuotationDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleQuotationDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleQuotationDetailWhereUniqueInput, {
    nullable: true,
  })
  saleQuotationDetails?: SaleQuotationDetailWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleReturnDetailWhereUniqueInput, {
    nullable: true,
  })
  saleReturnDetails?: SaleReturnDetailWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleReturnWhereUniqueInput, {
    nullable: true,
  })
  saleReturns?: SaleReturnWhereUniqueInput;

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
  sales?: SaleWhereUniqueInput;

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

export { SalePriceTypeWhereInput as SalePriceTypeWhereInput };
