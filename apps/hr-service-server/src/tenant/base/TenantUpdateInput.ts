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
import { AttendanceUpdateManyWithoutTenantsInput } from "./AttendanceUpdateManyWithoutTenantsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BonusRequestUpdateManyWithoutTenantsInput } from "./BonusRequestUpdateManyWithoutTenantsInput";
import { CheckInOutUpdateManyWithoutTenantsInput } from "./CheckInOutUpdateManyWithoutTenantsInput";
import { DailyMovementRequestUpdateManyWithoutTenantsInput } from "./DailyMovementRequestUpdateManyWithoutTenantsInput";
import { DayOffRequestUpdateManyWithoutTenantsInput } from "./DayOffRequestUpdateManyWithoutTenantsInput";
import { EmployeeDepartmentUpdateManyWithoutTenantsInput } from "./EmployeeDepartmentUpdateManyWithoutTenantsInput";
import { EmployeeGroupUpdateManyWithoutTenantsInput } from "./EmployeeGroupUpdateManyWithoutTenantsInput";
import { EmployeeRoleUpdateManyWithoutTenantsInput } from "./EmployeeRoleUpdateManyWithoutTenantsInput";
import { EmployeeUpdateManyWithoutTenantsInput } from "./EmployeeUpdateManyWithoutTenantsInput";
import { MachineUpdateManyWithoutTenantsInput } from "./MachineUpdateManyWithoutTenantsInput";
import { FiscalMonthUpdateManyWithoutTenantsInput } from "./FiscalMonthUpdateManyWithoutTenantsInput";
import { JobTitleUpdateManyWithoutTenantsInput } from "./JobTitleUpdateManyWithoutTenantsInput";
import { LeaveRequestTypeUpdateManyWithoutTenantsInput } from "./LeaveRequestTypeUpdateManyWithoutTenantsInput";
import { LeaveRequestUpdateManyWithoutTenantsInput } from "./LeaveRequestUpdateManyWithoutTenantsInput";
import { OverNightRequestUpdateManyWithoutTenantsInput } from "./OverNightRequestUpdateManyWithoutTenantsInput";

@InputType()
class TenantUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => AttendanceUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => AttendanceUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  attendances?: AttendanceUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => BonusRequestUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => BonusRequestUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => BonusRequestUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  bonusRequests?: BonusRequestUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => CheckInOutUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => CheckInOutUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => CheckInOutUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  checkInOuts?: CheckInOutUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => DailyMovementRequestUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => DailyMovementRequestUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  dailyMovements?: DailyMovementRequestUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => DayOffRequestUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => DayOffRequestUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => DayOffRequestUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  dayOffs?: DayOffRequestUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeDepartmentUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeDepartmentUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => EmployeeDepartmentUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  employeeDepartments?: EmployeeDepartmentUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeGroupUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeGroupUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => EmployeeGroupUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  employeeGroups?: EmployeeGroupUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeRoleUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRoleUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => EmployeeRoleUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  employeeRoles?: EmployeeRoleUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => EmployeeUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  employees?: EmployeeUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => MachineUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => MachineUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => MachineUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  fingerprintMachines?: MachineUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => FiscalMonthUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => FiscalMonthUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => FiscalMonthUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  fiscalMonths?: FiscalMonthUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => JobTitleUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => JobTitleUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => JobTitleUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  jobTitles?: JobTitleUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => LeaveRequestTypeUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => LeaveRequestTypeUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => LeaveRequestTypeUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  leaveRequestTypes?: LeaveRequestTypeUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => LeaveRequestUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => LeaveRequestUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => LeaveRequestUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  leaveRequests?: LeaveRequestUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => OverNightRequestUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => OverNightRequestUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => OverNightRequestUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  overNights?: OverNightRequestUpdateManyWithoutTenantsInput;
}

export { TenantUpdateInput as TenantUpdateInput };
