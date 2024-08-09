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
import { EmployeeSalaryDetailWhereUniqueInput } from "./EmployeeSalaryDetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeSalaryDetailUpdateInput } from "./EmployeeSalaryDetailUpdateInput";

@ArgsType()
class UpdateEmployeeSalaryDetailArgs {
  @ApiProperty({
    required: true,
    type: () => EmployeeSalaryDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryDetailWhereUniqueInput)
  @Field(() => EmployeeSalaryDetailWhereUniqueInput, { nullable: false })
  where!: EmployeeSalaryDetailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmployeeSalaryDetailUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryDetailUpdateInput)
  @Field(() => EmployeeSalaryDetailUpdateInput, { nullable: false })
  data!: EmployeeSalaryDetailUpdateInput;
}

export { UpdateEmployeeSalaryDetailArgs as UpdateEmployeeSalaryDetailArgs };
