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
import { AttendanceListRelationFilter } from "../../attendance/base/AttendanceListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BonusRequestListRelationFilter } from "../../bonusRequest/base/BonusRequestListRelationFilter";
import { CheckInOutListRelationFilter } from "../../checkInOut/base/CheckInOutListRelationFilter";
import { DailyMovementRequestListRelationFilter } from "../../dailyMovementRequest/base/DailyMovementRequestListRelationFilter";
import { DayOffRequestListRelationFilter } from "../../dayOffRequest/base/DayOffRequestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveRequestListRelationFilter } from "../../leaveRequest/base/LeaveRequestListRelationFilter";
import { OverNightRequestListRelationFilter } from "../../overNightRequest/base/OverNightRequestListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttendanceListRelationFilter)
  @IsOptional()
  @Field(() => AttendanceListRelationFilter, {
    nullable: true,
  })
  attendances?: AttendanceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BonusRequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BonusRequestListRelationFilter)
  @IsOptional()
  @Field(() => BonusRequestListRelationFilter, {
    nullable: true,
  })
  bonuses?: BonusRequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CheckInOutListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CheckInOutListRelationFilter)
  @IsOptional()
  @Field(() => CheckInOutListRelationFilter, {
    nullable: true,
  })
  checkInOuts?: CheckInOutListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DailyMovementRequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestListRelationFilter)
  @IsOptional()
  @Field(() => DailyMovementRequestListRelationFilter, {
    nullable: true,
  })
  dailyMovements?: DailyMovementRequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DayOffRequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DayOffRequestListRelationFilter)
  @IsOptional()
  @Field(() => DayOffRequestListRelationFilter, {
    nullable: true,
  })
  dayOffs?: DayOffRequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => LeaveRequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LeaveRequestListRelationFilter)
  @IsOptional()
  @Field(() => LeaveRequestListRelationFilter, {
    nullable: true,
  })
  leaveRequests?: LeaveRequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OverNightRequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OverNightRequestListRelationFilter)
  @IsOptional()
  @Field(() => OverNightRequestListRelationFilter, {
    nullable: true,
  })
  overNights?: OverNightRequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };