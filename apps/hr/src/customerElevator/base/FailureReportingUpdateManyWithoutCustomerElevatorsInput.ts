/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FailureReportingWhereUniqueInput } from "../../failureReporting/base/FailureReportingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FailureReportingUpdateManyWithoutCustomerElevatorsInput {
  @Field(() => [FailureReportingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FailureReportingWhereUniqueInput],
  })
  connect?: Array<FailureReportingWhereUniqueInput>;

  @Field(() => [FailureReportingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FailureReportingWhereUniqueInput],
  })
  disconnect?: Array<FailureReportingWhereUniqueInput>;

  @Field(() => [FailureReportingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FailureReportingWhereUniqueInput],
  })
  set?: Array<FailureReportingWhereUniqueInput>;
}

export { FailureReportingUpdateManyWithoutCustomerElevatorsInput as FailureReportingUpdateManyWithoutCustomerElevatorsInput };
