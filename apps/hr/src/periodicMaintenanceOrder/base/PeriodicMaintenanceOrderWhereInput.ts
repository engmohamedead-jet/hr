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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerElevatorWhereUniqueInput } from "../../customerElevator/base/CustomerElevatorWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../../customerUser/base/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";

@InputType()
class PeriodicMaintenanceOrderWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  confirmDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  contractEndDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  contractStartDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerElevatorWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerElevatorWhereUniqueInput, {
    nullable: true,
  })
  customerElevator?: CustomerElevatorWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerUserWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerUserWhereUniqueInput, {
    nullable: true,
  })
  customerUserId?: CustomerUserWhereUniqueInput;

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
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isConfirmed?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  orderDate?: DateTimeFilter;

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

export { PeriodicMaintenanceOrderWhereInput as PeriodicMaintenanceOrderWhereInput };
