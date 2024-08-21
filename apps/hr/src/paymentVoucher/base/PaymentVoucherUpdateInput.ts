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
import { AccountTransactionWhereUniqueInput } from "../../accountTransaction/base/AccountTransactionWhereUniqueInput";

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
import { CashRepositoryWhereUniqueInput } from "../../cashRepository/base/CashRepositoryWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { ExpenseItemWhereUniqueInput } from "../../expenseItem/base/ExpenseItemWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { VoucherTypeWhereUniqueInput } from "../../voucherType/base/VoucherTypeWhereUniqueInput";

@InputType()
class PaymentVoucherUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountTransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountTransactionWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountTransactionWhereUniqueInput, {
    nullable: true,
  })
  accountTransactionId?: AccountTransactionWhereUniqueInput | null;

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
  amount?: Decimal | null;

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
    type: () => CurrencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyWhereUniqueInput)
  @IsOptional()
  @Field(() => CurrencyWhereUniqueInput, {
    nullable: true,
  })
  currency?: CurrencyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employeeId?: EmployeeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ExpenseItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExpenseItemWhereUniqueInput)
  @IsOptional()
  @Field(() => ExpenseItemWhereUniqueInput, {
    nullable: true,
  })
  expenseItemId?: ExpenseItemWhereUniqueInput | null;

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
  note?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentVoucherDate?: Date;

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
  statementReference?: string | null;

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
  supplier?: SupplierWhereUniqueInput | null;

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

  @ApiProperty({
    required: false,
    type: () => VoucherTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VoucherTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => VoucherTypeWhereUniqueInput, {
    nullable: true,
  })
  voucherTypeId?: VoucherTypeWhereUniqueInput | null;
}

export { PaymentVoucherUpdateInput as PaymentVoucherUpdateInput };
