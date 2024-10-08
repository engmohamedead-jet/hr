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
import { AttendanceCreateNestedManyWithoutUsersInput } from "./AttendanceCreateNestedManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { BonusRequestCreateNestedManyWithoutUsersInput } from "./BonusRequestCreateNestedManyWithoutUsersInput";
import { CheckInOutCreateNestedManyWithoutUsersInput } from "./CheckInOutCreateNestedManyWithoutUsersInput";
import { DailyMovementRequestCreateNestedManyWithoutUsersInput } from "./DailyMovementRequestCreateNestedManyWithoutUsersInput";
import { DayOffRequestCreateNestedManyWithoutUsersInput } from "./DayOffRequestCreateNestedManyWithoutUsersInput";
import { LeaveRequestCreateNestedManyWithoutUsersInput } from "./LeaveRequestCreateNestedManyWithoutUsersInput";
import { OverNightRequestCreateNestedManyWithoutUsersInput } from "./OverNightRequestCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AttendanceCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AttendanceCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  attendances?: AttendanceCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => BonusRequestCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BonusRequestCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BonusRequestCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  bonuses?: BonusRequestCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CheckInOutCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CheckInOutCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CheckInOutCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  checkInOuts?: CheckInOutCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DailyMovementRequestCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DailyMovementRequestCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  dailyMovements?: DailyMovementRequestCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DayOffRequestCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DayOffRequestCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DayOffRequestCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  dayOffs?: DayOffRequestCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LeaveRequestCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LeaveRequestCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LeaveRequestCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  leaveRequests?: LeaveRequestCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OverNightRequestCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OverNightRequestCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OverNightRequestCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  overNights?: OverNightRequestCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
