/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SalaryItemTypeWhereUniqueInput } from "../../salaryItemType/base/SalaryItemTypeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SalaryItemTypeUpdateManyWithoutTenantsInput {
  @Field(() => [SalaryItemTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SalaryItemTypeWhereUniqueInput],
  })
  connect?: Array<SalaryItemTypeWhereUniqueInput>;

  @Field(() => [SalaryItemTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SalaryItemTypeWhereUniqueInput],
  })
  disconnect?: Array<SalaryItemTypeWhereUniqueInput>;

  @Field(() => [SalaryItemTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SalaryItemTypeWhereUniqueInput],
  })
  set?: Array<SalaryItemTypeWhereUniqueInput>;
}

export { SalaryItemTypeUpdateManyWithoutTenantsInput as SalaryItemTypeUpdateManyWithoutTenantsInput };
