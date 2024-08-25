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
import { WorkCenterAlternativeWhereUniqueInput } from "./WorkCenterAlternativeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class WorkCenterAlternativeFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => WorkCenterAlternativeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterAlternativeWhereUniqueInput)
  @Field(() => WorkCenterAlternativeWhereUniqueInput, { nullable: false })
  where!: WorkCenterAlternativeWhereUniqueInput;
}

export { WorkCenterAlternativeFindUniqueArgs as WorkCenterAlternativeFindUniqueArgs };
