/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WorkCenterWhereUniqueInput } from "../../workCenter/base/WorkCenterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WorkCenterUpdateManyWithoutTenantsInput {
  @Field(() => [WorkCenterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkCenterWhereUniqueInput],
  })
  connect?: Array<WorkCenterWhereUniqueInput>;

  @Field(() => [WorkCenterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkCenterWhereUniqueInput],
  })
  disconnect?: Array<WorkCenterWhereUniqueInput>;

  @Field(() => [WorkCenterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkCenterWhereUniqueInput],
  })
  set?: Array<WorkCenterWhereUniqueInput>;
}

export { WorkCenterUpdateManyWithoutTenantsInput as WorkCenterUpdateManyWithoutTenantsInput };
