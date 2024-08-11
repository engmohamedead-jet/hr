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
import { IsDate, IsOptional, ValidateNested, IsBoolean } from "class-validator";
import { Type } from "class-transformer";
import { CustomerElevatorWhereUniqueInput } from "../../customerElevator/base/CustomerElevatorWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../../customerUser/base/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";

@InputType()
class PeriodicMaintenanceOrderCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  confirmDate?: Date | null;

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
    required: false,
    type: () => CustomerElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerElevatorWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerElevatorWhereUniqueInput, {
    nullable: true,
  })
  customerElevator?: CustomerElevatorWhereUniqueInput | null;

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
  customerUserId?: CustomerUserWhereUniqueInput | null;

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
  elevatorId?: ElevatorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isConfirmed?: boolean | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderDate!: Date;

  @ApiProperty({
    required: true,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @Field(() => StoreWhereUniqueInput)
  storeId!: StoreWhereUniqueInput;
}

export { PeriodicMaintenanceOrderCreateInput as PeriodicMaintenanceOrderCreateInput };