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
import { Attendance } from "../../attendance/base/Attendance";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { BonusRequest } from "../../bonusRequest/base/BonusRequest";
import { CheckInOut } from "../../checkInOut/base/CheckInOut";
import { DailyMovementRequest } from "../../dailyMovementRequest/base/DailyMovementRequest";
import { DayOffRequest } from "../../dayOffRequest/base/DayOffRequest";
import { EmployeeDepartment } from "../../employeeDepartment/base/EmployeeDepartment";
import { EmployeeGroup } from "../../employeeGroup/base/EmployeeGroup";
import { EmployeeRole } from "../../employeeRole/base/EmployeeRole";
import { Employee } from "../../employee/base/Employee";
import { Machine } from "../../machine/base/Machine";
import { FiscalMonth } from "../../fiscalMonth/base/FiscalMonth";
import { JobTitle } from "../../jobTitle/base/JobTitle";
import { LeaveRequestType } from "../../leaveRequestType/base/LeaveRequestType";
import { LeaveRequest } from "../../leaveRequest/base/LeaveRequest";
import { OverNightRequest } from "../../overNightRequest/base/OverNightRequest";

@ObjectType()
class Tenant {
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
  dailyMovements?: Array<DailyMovementRequest>;

  @ApiProperty({
    required: false,
    type: () => [DayOffRequest],
  })
  @ValidateNested()
  @Type(() => DayOffRequest)
  @IsOptional()
  dayOffs?: Array<DayOffRequest>;

  @ApiProperty({
    required: false,
    type: () => [EmployeeDepartment],
  })
  @ValidateNested()
  @Type(() => EmployeeDepartment)
  @IsOptional()
  employeeDepartments?: Array<EmployeeDepartment>;

  @ApiProperty({
    required: false,
    type: () => [EmployeeGroup],
  })
  @ValidateNested()
  @Type(() => EmployeeGroup)
  @IsOptional()
  employeeGroups?: Array<EmployeeGroup>;

  @ApiProperty({
    required: false,
    type: () => [EmployeeRole],
  })
  @ValidateNested()
  @Type(() => EmployeeRole)
  @IsOptional()
  employeeRoles?: Array<EmployeeRole>;

  @ApiProperty({
    required: false,
    type: () => [Employee],
  })
  @ValidateNested()
  @Type(() => Employee)
  @IsOptional()
  employees?: Array<Employee>;

  @ApiProperty({
    required: false,
    type: () => [Machine],
  })
  @ValidateNested()
  @Type(() => Machine)
  @IsOptional()
  fingerprintMachines?: Array<Machine>;

  @ApiProperty({
    required: false,
    type: () => [FiscalMonth],
  })
  @ValidateNested()
  @Type(() => FiscalMonth)
  @IsOptional()
  fiscalMonths?: Array<FiscalMonth>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [JobTitle],
  })
  @ValidateNested()
  @Type(() => JobTitle)
  @IsOptional()
  jobTitles?: Array<JobTitle>;

  @ApiProperty({
    required: false,
    type: () => [LeaveRequestType],
  })
  @ValidateNested()
  @Type(() => LeaveRequestType)
  @IsOptional()
  leaveRequestTypes?: Array<LeaveRequestType>;

  @ApiProperty({
    required: false,
    type: () => [LeaveRequest],
  })
  @ValidateNested()
  @Type(() => LeaveRequest)
  @IsOptional()
  leaveRequests?: Array<LeaveRequest>;

  @ApiProperty({
    required: false,
    type: () => [OverNightRequest],
  })
  @ValidateNested()
  @Type(() => OverNightRequest)
  @IsOptional()
  overNights?: Array<OverNightRequest>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Tenant as Tenant };