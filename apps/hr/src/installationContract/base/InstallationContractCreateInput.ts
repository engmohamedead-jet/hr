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
class InstallationContractCreateInput {
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
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Float)
  amount!: Decimal;

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
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  contractNumber!: string;

  @ApiProperty({
    required: true,
    type: () => ContractStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractStatusWhereUniqueInput)
  @Field(() => ContractStatusWhereUniqueInput)
  contractStatusId!: ContractStatusWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerElevatorWhereUniqueInput)
  @Field(() => CustomerElevatorWhereUniqueInput)
  customerElevatorId!: CustomerElevatorWhereUniqueInput;

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
    required: true,
    type: () => ElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ElevatorWhereUniqueInput)
  @Field(() => ElevatorWhereUniqueInput)
  elevatorId!: ElevatorWhereUniqueInput;

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

export { InstallationContractCreateInput as InstallationContractCreateInput };
