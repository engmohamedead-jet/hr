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
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { SaleDetailWhereUniqueInput } from "../../saleDetail/base/SaleDetailWhereUniqueInput";
import { Type } from "class-transformer";
import { SaleOrderDetailWhereUniqueInput } from "../../saleOrderDetail/base/SaleOrderDetailWhereUniqueInput";
import { SaleOrderWhereUniqueInput } from "../../saleOrder/base/SaleOrderWhereUniqueInput";
import { SaleQuotationDetailWhereUniqueInput } from "../../saleQuotationDetail/base/SaleQuotationDetailWhereUniqueInput";
import { SaleReturnDetailWhereUniqueInput } from "../../saleReturnDetail/base/SaleReturnDetailWhereUniqueInput";
import { SaleReturnWhereUniqueInput } from "../../saleReturn/base/SaleReturnWhereUniqueInput";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class SalePriceTypeUpdateInput {
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
  isActive?: boolean;

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
    type: () => SaleDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleDetailWhereUniqueInput, {
    nullable: true,
  })
  saleDetails?: SaleDetailWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SaleOrderDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderDetailWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleOrderDetailWhereUniqueInput, {
    nullable: true,
  })
  saleOrderDetails?: SaleOrderDetailWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SaleOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleOrderWhereUniqueInput, {
    nullable: true,
  })
  saleOrders?: SaleOrderWhereUniqueInput | null;

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
  saleQuotationDetails?: SaleQuotationDetailWhereUniqueInput | null;

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
  saleReturnDetails?: SaleReturnDetailWhereUniqueInput | null;

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
  saleReturns?: SaleReturnWhereUniqueInput | null;

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
  sales?: SaleWhereUniqueInput | null;

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

export { SalePriceTypeUpdateInput as SalePriceTypeUpdateInput };
