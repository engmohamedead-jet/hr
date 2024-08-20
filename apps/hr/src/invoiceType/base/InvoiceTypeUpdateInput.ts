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
import { PurchaseReturnUpdateManyWithoutInvoiceTypesInput } from "./PurchaseReturnUpdateManyWithoutInvoiceTypesInput";
import { Type } from "class-transformer";
import { PurchaseUpdateManyWithoutInvoiceTypesInput } from "./PurchaseUpdateManyWithoutInvoiceTypesInput";
import { SaleOrderUpdateManyWithoutInvoiceTypesInput } from "./SaleOrderUpdateManyWithoutInvoiceTypesInput";
import { SaleReturnUpdateManyWithoutInvoiceTypesInput } from "./SaleReturnUpdateManyWithoutInvoiceTypesInput";
import { SaleUpdateManyWithoutInvoiceTypesInput } from "./SaleUpdateManyWithoutInvoiceTypesInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class InvoiceTypeUpdateInput {
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
    type: () => PurchaseReturnUpdateManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnUpdateManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => PurchaseReturnUpdateManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  purchaseReturns?: PurchaseReturnUpdateManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseUpdateManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => PurchaseUpdateManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => PurchaseUpdateManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  purchases?: PurchaseUpdateManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => SaleOrderUpdateManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderUpdateManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => SaleOrderUpdateManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  saleOrders?: SaleOrderUpdateManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnUpdateManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnUpdateManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => SaleReturnUpdateManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  saleReturns?: SaleReturnUpdateManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => SaleUpdateManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => SaleUpdateManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => SaleUpdateManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  sales?: SaleUpdateManyWithoutInvoiceTypesInput;

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

export { InvoiceTypeUpdateInput as InvoiceTypeUpdateInput };
