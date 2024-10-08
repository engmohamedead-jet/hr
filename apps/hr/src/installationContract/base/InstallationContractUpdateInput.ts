/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Max,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { ContractStatusWhereUniqueInput } from "../../contractStatus/base/ContractStatusWhereUniqueInput";
import { CustomerElevatorWhereUniqueInput } from "../../customerElevator/base/CustomerElevatorWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";

@InputType()
class InstallationContractUpdateInput {
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
  address?: string | null;

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
  amount?: Decimal;

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
  cabinetTechnician?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  contractDate?: Date | null;

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
  contractNumber?: string;

  @ApiProperty({
    required: false,
    type: () => ContractStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractStatusWhereUniqueInput)
  @IsOptional()
  @Field(() => ContractStatusWhereUniqueInput, {
    nullable: true,
  })
  contractStatusId?: ContractStatusWhereUniqueInput;

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
  customerElevatorId?: CustomerElevatorWhereUniqueInput;

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
  doorTechnician?: string | null;

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
  electricityTechnician?: string | null;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  elevatorsCount?: string | null;

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
  phoneNumber?: string | null;
}

export { InstallationContractUpdateInput as InstallationContractUpdateInput };
