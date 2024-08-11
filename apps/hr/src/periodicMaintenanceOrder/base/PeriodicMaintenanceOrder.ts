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
} from "class-validator";
import { Type } from "class-transformer";
import { CustomerElevator } from "../../customerElevator/base/CustomerElevator";
import { CustomerUser } from "../../customerUser/base/CustomerUser";
import { Elevator } from "../../elevator/base/Elevator";
import { Store } from "../../store/base/Store";

@ObjectType()
class PeriodicMaintenanceOrder {
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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  contractEndDate!: Date;

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
    required: false,
    type: () => CustomerElevator,
  })
  @ValidateNested()
  @Type(() => CustomerElevator)
  @IsOptional()
  customerElevator?: CustomerElevator | null;

  @ApiProperty({
    required: false,
    type: () => CustomerUser,
  })
  @ValidateNested()
  @Type(() => CustomerUser)
  @IsOptional()
  customerUserId?: CustomerUser | null;

  @ApiProperty({
    required: false,
    type: () => Elevator,
  })
  @ValidateNested()
  @Type(() => Elevator)
  @IsOptional()
  elevatorId?: Elevator | null;

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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderDate!: Date;

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

export { PeriodicMaintenanceOrder as PeriodicMaintenanceOrder };
