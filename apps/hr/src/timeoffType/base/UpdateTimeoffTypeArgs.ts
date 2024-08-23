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
import { TimeoffTypeWhereUniqueInput } from "./TimeoffTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TimeoffTypeUpdateInput } from "./TimeoffTypeUpdateInput";

@ArgsType()
class UpdateTimeoffTypeArgs {
  @ApiProperty({
    required: true,
    type: () => TimeoffTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeoffTypeWhereUniqueInput)
  @Field(() => TimeoffTypeWhereUniqueInput, { nullable: false })
  where!: TimeoffTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TimeoffTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => TimeoffTypeUpdateInput)
  @Field(() => TimeoffTypeUpdateInput, { nullable: false })
  data!: TimeoffTypeUpdateInput;
}

export { UpdateTimeoffTypeArgs as UpdateTimeoffTypeArgs };