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
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  IsBoolean,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ContractPeriod } from "../../contractPeriod/base/ContractPeriod";
import { Customer } from "../../customer/base/Customer";
import { CustomerUser } from "../../customerUser/base/CustomerUser";
import { Elevator } from "../../elevator/base/Elevator";
import { Store } from "../../store/base/Store";

@ObjectType()
class MaintenanceContract {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  confirmDate!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  contactEndTime!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  contactStartTime!: Date | null;

  @ApiProperty({
    required: true,
    type: () => ContractPeriod,
  })
  @ValidateNested()
  @Type(() => ContractPeriod)
  contractPeriodId?: ContractPeriod;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  contractStartDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  customerId?: Customer;

  @ApiProperty({
    required: false,
    type: () => CustomerUser,
  })
  @ValidateNested()
  @Type(() => CustomerUser)
  @IsOptional()
  customerUserId?: CustomerUser | null;

  @ApiProperty({
    required: true,
    type: () => Elevator,
  })
  @ValidateNested()
  @Type(() => Elevator)
  elevatorId?: Elevator;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isConfirmed!: boolean | null;

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
  note!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => Store,
  })
  @ValidateNested()
  @Type(() => Store)
  @IsOptional()
  storeId?: Store | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { MaintenanceContract as MaintenanceContract };
