/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Attendance } from "../../attendance/base/Attendance";

import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Max,
  IsString,
  MaxLength,
  IsDate,
  IsBoolean,
} from "class-validator";

import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { BonusRequest } from "../../bonusRequest/base/BonusRequest";
import { CheckInOut } from "../../checkInOut/base/CheckInOut";
import { DailyMovementRequest } from "../../dailyMovementRequest/base/DailyMovementRequest";
import { DayOffRequest } from "../../dayOffRequest/base/DayOffRequest";
import { EmployeeDepartment } from "../../employeeDepartment/base/EmployeeDepartment";
import { EmployeeGroup } from "../../employeeGroup/base/EmployeeGroup";
import { EmployeeRole } from "../../employeeRole/base/EmployeeRole";
import { JobTitle } from "../../jobTitle/base/JobTitle";
import { LeaveRequest } from "../../leaveRequest/base/LeaveRequest";
import { OverNightRequest } from "../../overNightRequest/base/OverNightRequest";
import { Tenant } from "../../tenant/base/Tenant";

@ObjectType()
class Employee {
  @ApiProperty({
    required: false,
    type: () => [Attendance],
  })
  @ValidateNested()
  @Type(() => Attendance)
  @IsOptional()
  attendances?: Array<Attendance>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  balance!: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => [BonusRequest],
  })
  @ValidateNested()
  @Type(() => BonusRequest)
  @IsOptional()
  bonusRequests?: Array<BonusRequest>;

  @ApiProperty({
    required: false,
    type: () => [CheckInOut],
  })
  @ValidateNested()
  @Type(() => CheckInOut)
  @IsOptional()
  checkInOuts?: Array<CheckInOut>;

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
  code!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [DailyMovementRequest],
  })
  @ValidateNested()
  @Type(() => DailyMovementRequest)
  @IsOptional()
  dailyMovementRequests?: Array<DailyMovementRequest>;

  @ApiProperty({
    required: false,
    type: () => [DayOffRequest],
  })
  @ValidateNested()
  @Type(() => DayOffRequest)
  @IsOptional()
  dayOffRequests?: Array<DayOffRequest>;

  @ApiProperty({
    required: false,
    type: () => EmployeeDepartment,
  })
  @ValidateNested()
  @Type(() => EmployeeDepartment)
  @IsOptional()
  employeeDepartmentId?: EmployeeDepartment | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeGroup,
  })
  @ValidateNested()
  @Type(() => EmployeeGroup)
  @IsOptional()
  employeeGroup?: EmployeeGroup | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeRole,
  })
  @ValidateNested()
  @Type(() => EmployeeRole)
  @IsOptional()
  employeeRoleId?: EmployeeRole | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  hireDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: false,
    type: () => JobTitle,
  })
  @ValidateNested()
  @Type(() => JobTitle)
  @IsOptional()
  jobTitle?: JobTitle | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  lastYearBalance!: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => [LeaveRequest],
  })
  @ValidateNested()
  @Type(() => LeaveRequest)
  @IsOptional()
  leavingPermissionRequests?: Array<LeaveRequest>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

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
    required: false,
    type: () => [OverNightRequest],
  })
  @ValidateNested()
  @Type(() => OverNightRequest)
  @IsOptional()
  overNightRequests?: Array<OverNightRequest>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  remainingBalance!: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenantId?: Tenant | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  usedBalance!: Decimal | null;
}

export { Employee as Employee };
