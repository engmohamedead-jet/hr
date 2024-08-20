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
import { AccountTransactionWhereUniqueInput } from "../../accountTransaction/base/AccountTransactionWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CashRepositoryWhereUniqueInput } from "../../cashRepository/base/CashRepositoryWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { ExpenseItemWhereUniqueInput } from "../../expenseItem/base/ExpenseItemWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { VoucherTypeWhereUniqueInput } from "../../voucherType/base/VoucherTypeWhereUniqueInput";

@InputType()
class PaymentVoucherWhereInput {
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
  accountTransactionId?: AccountTransactionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  amount?: DecimalNullableFilter;

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
  employeeId?: EmployeeWhereUniqueInput;

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
  expenseItemId?: ExpenseItemWhereUniqueInput;

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
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  paymentVoucherDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  statementReference?: StringNullableFilter;

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
  supplier?: SupplierWhereUniqueInput;

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
  voucherTypeId?: VoucherTypeWhereUniqueInput;
}

export { PaymentVoucherWhereInput as PaymentVoucherWhereInput };
