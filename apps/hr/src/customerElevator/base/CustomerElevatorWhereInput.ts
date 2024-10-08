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
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";
import { FailureReportingListRelationFilter } from "../../failureReporting/base/FailureReportingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstallationContractListRelationFilter } from "../../installationContract/base/InstallationContractListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PeriodicMaintenanceOrderListRelationFilter } from "../../periodicMaintenanceOrder/base/PeriodicMaintenanceOrderListRelationFilter";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";

@InputType()
class CustomerElevatorWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  amount?: StringNullableFilter;

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
    type: () => ElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ElevatorWhereUniqueInput)
  @IsOptional()
  @Field(() => ElevatorWhereUniqueInput, {
    nullable: true,
  })
  elevatorId?: ElevatorWhereUniqueInput;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  hasPendingMaintenanceContractOrders?: StringNullableFilter;

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
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  maintenanceContractDocumentImage?: JsonFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  maintenanceEndDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  maintenanceStartDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  normalizedName?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phoneNumber?: StringNullableFilter;

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

export { CustomerElevatorWhereInput as CustomerElevatorWhereInput };
