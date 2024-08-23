/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DayOffRequestWhereUniqueInput } from "../../dayOffRequest/base/DayOffRequestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DayOffRequestUpdateManyWithoutTenantsInput {
  @Field(() => [DayOffRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DayOffRequestWhereUniqueInput],
  })
  connect?: Array<DayOffRequestWhereUniqueInput>;

  @Field(() => [DayOffRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DayOffRequestWhereUniqueInput],
  })
  disconnect?: Array<DayOffRequestWhereUniqueInput>;

  @Field(() => [DayOffRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DayOffRequestWhereUniqueInput],
  })
  set?: Array<DayOffRequestWhereUniqueInput>;
}

export { DayOffRequestUpdateManyWithoutTenantsInput as DayOffRequestUpdateManyWithoutTenantsInput };
