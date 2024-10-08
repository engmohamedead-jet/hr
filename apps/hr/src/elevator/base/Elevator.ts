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

import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
  IsNumber,
  Max,
  IsInt,
  Min,
} from "class-validator";

import { ControlType } from "../../controlType/base/ControlType";
import { Type } from "class-transformer";
import { CustomerElevator } from "../../customerElevator/base/CustomerElevator";
import { CustomerUser } from "../../customerUser/base/CustomerUser";
import { Decimal } from "decimal.js";
import { DoorType } from "../../doorType/base/DoorType";
import { ElevatorSparePart } from "../../elevatorSparePart/base/ElevatorSparePart";
import { ElevatorType } from "../../elevatorType/base/ElevatorType";
import { FailureReporting } from "../../failureReporting/base/FailureReporting";
import { InstallationContract } from "../../installationContract/base/InstallationContract";
import { MaintenanceContract } from "../../maintenanceContract/base/MaintenanceContract";
import { MaintenanceVisit } from "../../maintenanceVisit/base/MaintenanceVisit";
import { MotorType } from "../../motorType/base/MotorType";
import { PeriodicMaintenanceOrder } from "../../periodicMaintenanceOrder/base/PeriodicMaintenanceOrder";
import { Store } from "../../store/base/Store";

@ObjectType()
class Elevator {
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
  bannerSize!: string | null;

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
  cabinetSize!: string | null;

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
    required: false,
    type: () => ControlType,
  })
  @ValidateNested()
  @Type(() => ControlType)
  @IsOptional()
  controlTypeId?: ControlType | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [CustomerElevator],
  })
  @ValidateNested()
  @Type(() => CustomerElevator)
  @IsOptional()
  customerElevators?: Array<CustomerElevator>;

  @ApiProperty({
    required: false,
    type: () => [CustomerUser],
  })
  @ValidateNested()
  @Type(() => CustomerUser)
  @IsOptional()
  customerUsers?: Array<CustomerUser>;

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
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  doorSize!: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => DoorType,
  })
  @ValidateNested()
  @Type(() => DoorType)
  @IsOptional()
  doorTypeId?: DoorType | null;

  @ApiProperty({
    required: false,
    type: () => [ElevatorSparePart],
  })
  @ValidateNested()
  @Type(() => ElevatorSparePart)
  @IsOptional()
  elevatorSpareParts?: Array<ElevatorSparePart>;

  @ApiProperty({
    required: false,
    type: () => ElevatorType,
  })
  @ValidateNested()
  @Type(() => ElevatorType)
  @IsOptional()
  elevatorTypeId?: ElevatorType | null;

  @ApiProperty({
    required: false,
    type: () => [FailureReporting],
  })
  @ValidateNested()
  @Type(() => FailureReporting)
  @IsOptional()
  failureReportings?: Array<FailureReporting>;

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
  freight!: Decimal | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [InstallationContract],
  })
  @ValidateNested()
  @Type(() => InstallationContract)
  @IsOptional()
  installationContracts?: Array<InstallationContract>;

  @ApiProperty({
    required: false,
    type: () => [MaintenanceContract],
  })
  @ValidateNested()
  @Type(() => MaintenanceContract)
  @IsOptional()
  maintenanceContracts?: Array<MaintenanceContract>;

  @ApiProperty({
    required: false,
    type: () => [MaintenanceVisit],
  })
  @ValidateNested()
  @Type(() => MaintenanceVisit)
  @IsOptional()
  maintenanceVisits?: Array<MaintenanceVisit>;

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
  motorPower!: string | null;

  @ApiProperty({
    required: false,
    type: () => MotorType,
  })
  @ValidateNested()
  @Type(() => MotorType)
  @IsOptional()
  motorTypeId?: MotorType | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  normalizedName!: string;

  @ApiProperty({
    required: false,
    type: () => [PeriodicMaintenanceOrder],
  })
  @ValidateNested()
  @Type(() => PeriodicMaintenanceOrder)
  @IsOptional()
  periodicMaintenanceOrders?: Array<PeriodicMaintenanceOrder>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  personsCount!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stationsCount!: number | null;

  @ApiProperty({
    required: true,
    type: () => Store,
  })
  @ValidateNested()
  @Type(() => Store)
  storeId?: Store;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Elevator as Elevator };
