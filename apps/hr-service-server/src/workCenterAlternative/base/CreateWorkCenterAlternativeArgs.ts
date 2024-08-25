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
import { WorkCenterAlternativeCreateInput } from "./WorkCenterAlternativeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateWorkCenterAlternativeArgs {
  @ApiProperty({
    required: true,
    type: () => WorkCenterAlternativeCreateInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterAlternativeCreateInput)
  @Field(() => WorkCenterAlternativeCreateInput, { nullable: false })
  data!: WorkCenterAlternativeCreateInput;
}

export { CreateWorkCenterAlternativeArgs as CreateWorkCenterAlternativeArgs };
