/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeSalaryWhereInput } from "./EmployeeSalaryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeSalaryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeSalaryWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryWhereInput)
  @IsOptional()
  @Field(() => EmployeeSalaryWhereInput, {
    nullable: true,
  })
  every?: EmployeeSalaryWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeSalaryWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryWhereInput)
  @IsOptional()
  @Field(() => EmployeeSalaryWhereInput, {
    nullable: true,
  })
  some?: EmployeeSalaryWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeSalaryWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryWhereInput)
  @IsOptional()
  @Field(() => EmployeeSalaryWhereInput, {
    nullable: true,
  })
  none?: EmployeeSalaryWhereInput;
}
export { EmployeeSalaryListRelationFilter as EmployeeSalaryListRelationFilter };
