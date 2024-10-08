/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AccountTransactionDetailWhereUniqueInput } from "../../accountTransactionDetail/base/AccountTransactionDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AccountTransactionDetailUpdateManyWithoutTransactionTypesInput {
  @Field(() => [AccountTransactionDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountTransactionDetailWhereUniqueInput],
  })
  connect?: Array<AccountTransactionDetailWhereUniqueInput>;

  @Field(() => [AccountTransactionDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountTransactionDetailWhereUniqueInput],
  })
  disconnect?: Array<AccountTransactionDetailWhereUniqueInput>;

  @Field(() => [AccountTransactionDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AccountTransactionDetailWhereUniqueInput],
  })
  set?: Array<AccountTransactionDetailWhereUniqueInput>;
}

export { AccountTransactionDetailUpdateManyWithoutTransactionTypesInput as AccountTransactionDetailUpdateManyWithoutTransactionTypesInput };
