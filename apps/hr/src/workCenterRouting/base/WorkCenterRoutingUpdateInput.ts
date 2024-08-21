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
import { BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput } from "./BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
  IsInt,
  Min,
  Max,
  IsNumber,
} from "class-validator";

import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { Decimal } from "decimal.js";
import { WorkCenterWhereUniqueInput } from "../../workCenter/base/WorkCenterWhereUniqueInput";

@InputType()
class WorkCenterRoutingUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput)
  @IsOptional()
  @Field(() => BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput;

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
  code?: string | null;

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
  name?: string;

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
  normalizedName?: string;

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
  @IsInt()
  @Min(1)
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sequence?: number;

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
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  timeCycleManual?: Decimal | null;

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
  timeModeBatch?: number | null;

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
  workCenterId?: WorkCenterWhereUniqueInput | null;
}

export { WorkCenterRoutingUpdateInput as WorkCenterRoutingUpdateInput };
