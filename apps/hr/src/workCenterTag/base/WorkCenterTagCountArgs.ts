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
import { WorkCenterTagWhereInput } from "./WorkCenterTagWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WorkCenterTagCountArgs {
  @ApiProperty({
    required: false,
    type: () => WorkCenterTagWhereInput,
  })
  @Field(() => WorkCenterTagWhereInput, { nullable: true })
  @Type(() => WorkCenterTagWhereInput)
  where?: WorkCenterTagWhereInput;
}

export { WorkCenterTagCountArgs as WorkCenterTagCountArgs };
