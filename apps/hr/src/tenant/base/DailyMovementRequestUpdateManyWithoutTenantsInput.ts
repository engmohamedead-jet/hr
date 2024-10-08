/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DailyMovementRequestWhereUniqueInput } from "../../dailyMovementRequest/base/DailyMovementRequestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DailyMovementRequestUpdateManyWithoutTenantsInput {
  @Field(() => [DailyMovementRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DailyMovementRequestWhereUniqueInput],
  })
  connect?: Array<DailyMovementRequestWhereUniqueInput>;

  @Field(() => [DailyMovementRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DailyMovementRequestWhereUniqueInput],
  })
  disconnect?: Array<DailyMovementRequestWhereUniqueInput>;

  @Field(() => [DailyMovementRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DailyMovementRequestWhereUniqueInput],
  })
  set?: Array<DailyMovementRequestWhereUniqueInput>;
}

export { DailyMovementRequestUpdateManyWithoutTenantsInput as DailyMovementRequestUpdateManyWithoutTenantsInput };
