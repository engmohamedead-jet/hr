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
import { StringFilter } from "../../util/StringFilter";
import { PaymentVoucherListRelationFilter } from "../../paymentVoucher/base/PaymentVoucherListRelationFilter";
import { ReceiptVoucherWhereUniqueInput } from "../../receiptVoucher/base/ReceiptVoucherWhereUniqueInput";

@InputType()
class AccountTransactionWhereInput {
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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentVoucherListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentVoucherListRelationFilter)
  @IsOptional()
  @Field(() => PaymentVoucherListRelationFilter, {
    nullable: true,
  })
  paymentVouchers?: PaymentVoucherListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReceiptVoucherWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReceiptVoucherWhereUniqueInput)
  @IsOptional()
  @Field(() => ReceiptVoucherWhereUniqueInput, {
    nullable: true,
  })
  receiptVouchers?: ReceiptVoucherWhereUniqueInput;
}

export { AccountTransactionWhereInput as AccountTransactionWhereInput };
