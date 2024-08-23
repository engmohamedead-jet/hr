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
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { BonusRequest } from "../../bonusRequest/base/BonusRequest";
import { CheckInOut } from "../../checkInOut/base/CheckInOut";
import { DailyMovementRequest } from "../../dailyMovementRequest/base/DailyMovementRequest";
import { DayOffRequest } from "../../dayOffRequest/base/DayOffRequest";
import { LeaveRequest } from "../../leaveRequest/base/LeaveRequest";
import { OverNightRequest } from "../../overNightRequest/base/OverNightRequest";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";

@ObjectType()
class User {
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
  bonuses?: Array<BonusRequest>;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

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
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  lastName!: string | null;

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
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { User as User };