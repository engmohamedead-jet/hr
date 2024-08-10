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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeSalaryListRelationFilter } from "../../employeeSalary/base/EmployeeSalaryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FiscalWeekListRelationFilter } from "../../fiscalWeek/base/FiscalWeekListRelationFilter";
import { FiscalYearWhereUniqueInput } from "../../fiscalYear/base/FiscalYearWhereUniqueInput";

@InputType()
class FiscalMonthWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  code?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EmployeeSalaryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeSalaryListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeSalaryListRelationFilter, {
    nullable: true,
  })
  employeeSalaries?: EmployeeSalaryListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endsOn?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FiscalWeekListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FiscalWeekListRelationFilter)
  @IsOptional()
  @Field(() => FiscalWeekListRelationFilter, {
    nullable: true,
  })
  fiscalWeeks?: FiscalWeekListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FiscalYearWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FiscalYearWhereUniqueInput)
  @IsOptional()
  @Field(() => FiscalYearWhereUniqueInput, {
    nullable: true,
  })
  fiscalYear?: FiscalYearWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  mormalizedName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  note?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startsFrom?: DateTimeNullableFilter;
}

export { FiscalMonthWhereInput as FiscalMonthWhereInput };
