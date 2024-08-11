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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ControlTypeWhereUniqueInput } from "../../controlType/base/ControlTypeWhereUniqueInput";
import { CustomerElevatorListRelationFilter } from "../../customerElevator/base/CustomerElevatorListRelationFilter";
import { CustomerUserListRelationFilter } from "../../customerUser/base/CustomerUserListRelationFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DoorTypeWhereUniqueInput } from "../../doorType/base/DoorTypeWhereUniqueInput";
import { ElevatorSparePartListRelationFilter } from "../../elevatorSparePart/base/ElevatorSparePartListRelationFilter";
import { ElevatorTypeWhereUniqueInput } from "../../elevatorType/base/ElevatorTypeWhereUniqueInput";
import { FailureReportingListRelationFilter } from "../../failureReporting/base/FailureReportingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstallationContractListRelationFilter } from "../../installationContract/base/InstallationContractListRelationFilter";
import { MaintenanceContractListRelationFilter } from "../../maintenanceContract/base/MaintenanceContractListRelationFilter";
import { MaintenanceVisitListRelationFilter } from "../../maintenanceVisit/base/MaintenanceVisitListRelationFilter";
import { MotorTypeWhereUniqueInput } from "../../motorType/base/MotorTypeWhereUniqueInput";
import { PeriodicMaintenanceOrderListRelationFilter } from "../../periodicMaintenanceOrder/base/PeriodicMaintenanceOrderListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";

@InputType()
class ElevatorWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  bannerSize?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  cabinetSize?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ControlTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ControlTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ControlTypeWhereUniqueInput, {
    nullable: true,
  })
  controlTypeId?: ControlTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerElevatorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerElevatorListRelationFilter)
  @IsOptional()
  @Field(() => CustomerElevatorListRelationFilter, {
    nullable: true,
  })
  customerElevators?: CustomerElevatorListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerUserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerUserListRelationFilter)
  @IsOptional()
  @Field(() => CustomerUserListRelationFilter, {
    nullable: true,
  })
  customerUsers?: CustomerUserListRelationFilter;

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
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  doorSize?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DoorTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoorTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => DoorTypeWhereUniqueInput, {
    nullable: true,
  })
  doorTypeId?: DoorTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ElevatorSparePartListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ElevatorSparePartListRelationFilter)
  @IsOptional()
  @Field(() => ElevatorSparePartListRelationFilter, {
    nullable: true,
  })
  elevatorSpareParts?: ElevatorSparePartListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ElevatorTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ElevatorTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ElevatorTypeWhereUniqueInput, {
    nullable: true,
  })
  elevatorTypeId?: ElevatorTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FailureReportingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FailureReportingListRelationFilter)
  @IsOptional()
  @Field(() => FailureReportingListRelationFilter, {
    nullable: true,
  })
  failureReportings?: FailureReportingListRelationFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  freight?: DecimalNullableFilter;

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
    type: () => InstallationContractListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InstallationContractListRelationFilter)
  @IsOptional()
  @Field(() => InstallationContractListRelationFilter, {
    nullable: true,
  })
  installationContracts?: InstallationContractListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MaintenanceContractListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MaintenanceContractListRelationFilter)
  @IsOptional()
  @Field(() => MaintenanceContractListRelationFilter, {
    nullable: true,
  })
  maintenanceContracts?: MaintenanceContractListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MaintenanceVisitListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MaintenanceVisitListRelationFilter)
  @IsOptional()
  @Field(() => MaintenanceVisitListRelationFilter, {
    nullable: true,
  })
  maintenanceVisits?: MaintenanceVisitListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  motorPower?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MotorTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MotorTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => MotorTypeWhereUniqueInput, {
    nullable: true,
  })
  motorTypeId?: MotorTypeWhereUniqueInput;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  normalizedName?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PeriodicMaintenanceOrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PeriodicMaintenanceOrderListRelationFilter)
  @IsOptional()
  @Field(() => PeriodicMaintenanceOrderListRelationFilter, {
    nullable: true,
  })
  periodicMaintenanceOrders?: PeriodicMaintenanceOrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  personsCount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  stationsCount?: IntNullableFilter;

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
  storeId?: StoreWhereUniqueInput;
}

export { ElevatorWhereInput as ElevatorWhereInput };
