/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WorkCenterWorkCenterTagWhereUniqueInput } from "../../workCenterWorkCenterTag/base/WorkCenterWorkCenterTagWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WorkCenterWorkCenterTagUpdateManyWithoutWorkCentersInput {
  @Field(() => [WorkCenterWorkCenterTagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkCenterWorkCenterTagWhereUniqueInput],
  })
  connect?: Array<WorkCenterWorkCenterTagWhereUniqueInput>;

  @Field(() => [WorkCenterWorkCenterTagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkCenterWorkCenterTagWhereUniqueInput],
  })
  disconnect?: Array<WorkCenterWorkCenterTagWhereUniqueInput>;

  @Field(() => [WorkCenterWorkCenterTagWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkCenterWorkCenterTagWhereUniqueInput],
  })
  set?: Array<WorkCenterWorkCenterTagWhereUniqueInput>;
}

export { WorkCenterWorkCenterTagUpdateManyWithoutWorkCentersInput as WorkCenterWorkCenterTagUpdateManyWithoutWorkCentersInput };