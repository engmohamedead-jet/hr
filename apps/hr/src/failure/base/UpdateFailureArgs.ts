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
import { FailureWhereUniqueInput } from "./FailureWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FailureUpdateInput } from "./FailureUpdateInput";

@ArgsType()
class UpdateFailureArgs {
  @ApiProperty({
    required: true,
    type: () => FailureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FailureWhereUniqueInput)
  @Field(() => FailureWhereUniqueInput, { nullable: false })
  where!: FailureWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FailureUpdateInput,
  })
  @ValidateNested()
  @Type(() => FailureUpdateInput)
  @Field(() => FailureUpdateInput, { nullable: false })
  data!: FailureUpdateInput;
}

export { UpdateFailureArgs as UpdateFailureArgs };
