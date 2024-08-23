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
import { DailyMovementRequestWhereUniqueInput } from "./DailyMovementRequestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DailyMovementRequestUpdateInput } from "./DailyMovementRequestUpdateInput";

@ArgsType()
class UpdateDailyMovementRequestArgs {
  @ApiProperty({
    required: true,
    type: () => DailyMovementRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestWhereUniqueInput)
  @Field(() => DailyMovementRequestWhereUniqueInput, { nullable: false })
  where!: DailyMovementRequestWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DailyMovementRequestUpdateInput,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestUpdateInput)
  @Field(() => DailyMovementRequestUpdateInput, { nullable: false })
  data!: DailyMovementRequestUpdateInput;
}

export { UpdateDailyMovementRequestArgs as UpdateDailyMovementRequestArgs };
