/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsDate,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EmployeeClassSalaryItemValue } from "../../employeeClassSalaryItemValue/base/EmployeeClassSalaryItemValue";
import { EmployeeSalaryDetail } from "../../employeeSalaryDetail/base/EmployeeSalaryDetail";

@ObjectType()
class SalaryItem {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(100)
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: () => [EmployeeClassSalaryItemValue],
  })
  @ValidateNested()
  @Type(() => EmployeeClassSalaryItemValue)
  @IsOptional()
  employeeClassSalaryItemValues?: Array<EmployeeClassSalaryItemValue>;

  @ApiProperty({
    required: false,
    type: () => [EmployeeSalaryDetail],
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryDetail)
  @IsOptional()
  employeeSalaryDetails?: Array<EmployeeSalaryDetail>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(300)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(300)
  @Field(() => String)
  normalizedName!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { SalaryItem as SalaryItem };