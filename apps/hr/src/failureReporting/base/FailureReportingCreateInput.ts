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
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerElevatorWhereUniqueInput } from "../../customerElevator/base/CustomerElevatorWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../../customerUser/base/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";
import { FailureTypeWhereUniqueInput } from "../../failureType/base/FailureTypeWhereUniqueInput";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";

@InputType()
class FailureReportingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  contactingFromTime?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  contactingToTime?: Date | null;

  @ApiProperty({
    required: true,
    type: () => CustomerElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerElevatorWhereUniqueInput)
  @Field(() => CustomerElevatorWhereUniqueInput)
  customerElevatorId!: CustomerElevatorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerUserWhereUniqueInput)
  @Field(() => CustomerUserWhereUniqueInput)
  customerUser!: CustomerUserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ElevatorWhereUniqueInput)
  @IsOptional()
  @Field(() => ElevatorWhereUniqueInput, {
    nullable: true,
  })
  elevator?: ElevatorWhereUniqueInput | null;

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
  failureDescription?: string | null;

  @ApiProperty({
    required: true,
    type: () => FailureTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FailureTypeWhereUniqueInput)
  @Field(() => FailureTypeWhereUniqueInput)
  failureTypeId!: FailureTypeWhereUniqueInput;

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
  note?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  reportingDate!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reviewDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreWhereUniqueInput, {
    nullable: true,
  })
  store?: StoreWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  wasReviewed?: boolean | null;
}

export { FailureReportingCreateInput as FailureReportingCreateInput };
