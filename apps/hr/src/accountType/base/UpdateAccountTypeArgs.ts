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
import { AccountTypeWhereUniqueInput } from "./AccountTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AccountTypeUpdateInput } from "./AccountTypeUpdateInput";

@ArgsType()
class UpdateAccountTypeArgs {
  @ApiProperty({
    required: true,
    type: () => AccountTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountTypeWhereUniqueInput)
  @Field(() => AccountTypeWhereUniqueInput, { nullable: false })
  where!: AccountTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AccountTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => AccountTypeUpdateInput)
  @Field(() => AccountTypeUpdateInput, { nullable: false })
  data!: AccountTypeUpdateInput;
}

export { UpdateAccountTypeArgs as UpdateAccountTypeArgs };