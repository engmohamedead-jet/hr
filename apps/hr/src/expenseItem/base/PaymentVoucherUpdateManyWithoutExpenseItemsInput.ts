/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PaymentVoucherWhereUniqueInput } from "../../paymentVoucher/base/PaymentVoucherWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentVoucherUpdateManyWithoutExpenseItemsInput {
  @Field(() => [PaymentVoucherWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentVoucherWhereUniqueInput],
  })
  connect?: Array<PaymentVoucherWhereUniqueInput>;

  @Field(() => [PaymentVoucherWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentVoucherWhereUniqueInput],
  })
  disconnect?: Array<PaymentVoucherWhereUniqueInput>;

  @Field(() => [PaymentVoucherWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentVoucherWhereUniqueInput],
  })
  set?: Array<PaymentVoucherWhereUniqueInput>;
}

export { PaymentVoucherUpdateManyWithoutExpenseItemsInput as PaymentVoucherUpdateManyWithoutExpenseItemsInput };