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
import { WorkSheetTypeWhereInput } from "./WorkSheetTypeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WorkSheetTypeCountArgs {
  @ApiProperty({
    required: false,
    type: () => WorkSheetTypeWhereInput,
  })
  @Field(() => WorkSheetTypeWhereInput, { nullable: true })
  @Type(() => WorkSheetTypeWhereInput)
  where?: WorkSheetTypeWhereInput;
}

export { WorkSheetTypeCountArgs as WorkSheetTypeCountArgs };
