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
  IsNumber,
  Max,
  IsOptional,
  IsBoolean,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { Type } from "class-transformer";
import { WorkCenterWhereUniqueInput } from "../../workCenter/base/WorkCenterWhereUniqueInput";

@InputType()
class WorkCenterCapacityUpdateInput {
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
  capacity?: Decimal;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean;

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
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  startTime?: Decimal | null;

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
  stopTime?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenantId?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WorkCenterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkCenterWhereUniqueInput, {
    nullable: true,
  })
  workCenterId?: WorkCenterWhereUniqueInput;
}

export { WorkCenterCapacityUpdateInput as WorkCenterCapacityUpdateInput };
