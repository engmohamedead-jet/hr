/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmployeeSalaryDetailWhereUniqueInput } from "../../employeeSalaryDetail/base/EmployeeSalaryDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmployeeSalaryDetailCreateNestedManyWithoutSalaryItemsInput {
  @Field(() => [EmployeeSalaryDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeSalaryDetailWhereUniqueInput],
  })
  connect?: Array<EmployeeSalaryDetailWhereUniqueInput>;
}

export { EmployeeSalaryDetailCreateNestedManyWithoutSalaryItemsInput as EmployeeSalaryDetailCreateNestedManyWithoutSalaryItemsInput };
