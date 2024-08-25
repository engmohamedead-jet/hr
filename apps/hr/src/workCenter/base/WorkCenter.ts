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
  IsInt,
  Max,
  IsNumber,
  IsDate,
  IsBoolean,
  Min,
  ValidateNested,
} from "class-validator";

import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { Tenant } from "../../tenant/base/Tenant";
import { WorkCenterAlternative } from "../../workCenterAlternative/base/WorkCenterAlternative";
import { WorkCenterCapacity } from "../../workCenterCapacity/base/WorkCenterCapacity";
import { WorkCenterProductivity } from "../../workCenterProductivity/base/WorkCenterProductivity";
import { WorkCenterProductivityLoss } from "../../workCenterProductivityLoss/base/WorkCenterProductivityLoss";
import { WorkCenterRouting } from "../../workCenterRouting/base/WorkCenterRouting";
import { WorkCenterWorkCenterTag } from "../../workCenterWorkCenterTag/base/WorkCenterWorkCenterTag";

@ObjectType()
class WorkCenter {
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
  analyticDistribution!: string | null;

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
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  color!: number | null;

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
  costPerHour!: Decimal | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  defaultCapacity!: Decimal | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isProductive!: boolean;

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
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  oeeTareget!: Decimal | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @Field(() => Number)
  sequence!: number;

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
  startTime!: Decimal | null;

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
  stopTime!: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenantId?: Tenant | null;

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
  timeEfficiency!: Decimal | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [WorkCenterAlternative],
  })
  @ValidateNested()
  @Type(() => WorkCenterAlternative)
  @IsOptional()
  workCenterAlternativeWorkCenters?: Array<WorkCenterAlternative>;

  @ApiProperty({
    required: false,
    type: () => [WorkCenterAlternative],
  })
  @ValidateNested()
  @Type(() => WorkCenterAlternative)
  @IsOptional()
  workCenterAlternatives?: Array<WorkCenterAlternative>;

  @ApiProperty({
    required: false,
    type: () => [WorkCenterCapacity],
  })
  @ValidateNested()
  @Type(() => WorkCenterCapacity)
  @IsOptional()
  workCenterCapacities?: Array<WorkCenterCapacity>;

  @ApiProperty({
    required: false,
    type: () => [WorkCenterProductivity],
  })
  @ValidateNested()
  @Type(() => WorkCenterProductivity)
  @IsOptional()
  workCenterProductivities?: Array<WorkCenterProductivity>;

  @ApiProperty({
    required: false,
    type: () => [WorkCenterProductivityLoss],
  })
  @ValidateNested()
  @Type(() => WorkCenterProductivityLoss)
  @IsOptional()
  workCenterProductivityLosses?: Array<WorkCenterProductivityLoss>;

  @ApiProperty({
    required: false,
    type: () => [WorkCenterRouting],
  })
  @ValidateNested()
  @Type(() => WorkCenterRouting)
  @IsOptional()
  workCenterRoutings?: Array<WorkCenterRouting>;

  @ApiProperty({
    required: false,
    type: () => [WorkCenterWorkCenterTag],
  })
  @ValidateNested()
  @Type(() => WorkCenterWorkCenterTag)
  @IsOptional()
  workCenterWorkCenterTags?: Array<WorkCenterWorkCenterTag>;
}

export { WorkCenter as WorkCenter };
