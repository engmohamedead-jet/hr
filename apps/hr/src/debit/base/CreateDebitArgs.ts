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
import { DebitCreateInput } from "./DebitCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateDebitArgs {
  @ApiProperty({
    required: true,
    type: () => DebitCreateInput,
  })
  @ValidateNested()
  @Type(() => DebitCreateInput)
  @Field(() => DebitCreateInput, { nullable: false })
  data!: DebitCreateInput;
}

export { CreateDebitArgs as CreateDebitArgs };
