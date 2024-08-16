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
import { WorkCenterWhereUniqueInput } from "./WorkCenterWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WorkCenterUpdateInput } from "./WorkCenterUpdateInput";

@ArgsType()
class UpdateWorkCenterArgs {
  @ApiProperty({
    required: true,
    type: () => WorkCenterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterWhereUniqueInput)
  @Field(() => WorkCenterWhereUniqueInput, { nullable: false })
  where!: WorkCenterWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WorkCenterUpdateInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterUpdateInput)
  @Field(() => WorkCenterUpdateInput, { nullable: false })
  data!: WorkCenterUpdateInput;
}

export { UpdateWorkCenterArgs as UpdateWorkCenterArgs };