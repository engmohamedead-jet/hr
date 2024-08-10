/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BankAccountWhereUniqueInput } from "../../bankAccount/base/BankAccountWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BankAccountUpdateManyWithoutBankBranchesInput {
  @Field(() => [BankAccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BankAccountWhereUniqueInput],
  })
  connect?: Array<BankAccountWhereUniqueInput>;

  @Field(() => [BankAccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BankAccountWhereUniqueInput],
  })
  disconnect?: Array<BankAccountWhereUniqueInput>;

  @Field(() => [BankAccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BankAccountWhereUniqueInput],
  })
  set?: Array<BankAccountWhereUniqueInput>;
}

export { BankAccountUpdateManyWithoutBankBranchesInput as BankAccountUpdateManyWithoutBankBranchesInput };
