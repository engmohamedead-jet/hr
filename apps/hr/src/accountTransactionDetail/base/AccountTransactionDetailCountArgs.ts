/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountTransactionDetailWhereInput } from "./AccountTransactionDetailWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AccountTransactionDetailCountArgs {
  @ApiProperty({
    required: false,
    type: () => AccountTransactionDetailWhereInput,
  })
  @Field(() => AccountTransactionDetailWhereInput, { nullable: true })
  @Type(() => AccountTransactionDetailWhereInput)
  where?: AccountTransactionDetailWhereInput;
}

export { AccountTransactionDetailCountArgs as AccountTransactionDetailCountArgs };