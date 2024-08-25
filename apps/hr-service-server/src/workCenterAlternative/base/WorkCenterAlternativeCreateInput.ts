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
import { WorkCenterWhereUniqueInput } from "../../workCenter/base/WorkCenterWhereUniqueInput";
import {
  ValidateNested,
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class WorkCenterAlternativeCreateInput {
  @ApiProperty({
    required: true,
    type: () => WorkCenterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterWhereUniqueInput)
  @Field(() => WorkCenterWhereUniqueInput)
  alternativeWorkCenterId!: WorkCenterWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

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
    required: true,
    type: () => WorkCenterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterWhereUniqueInput)
  @Field(() => WorkCenterWhereUniqueInput)
  workCenterId!: WorkCenterWhereUniqueInput;
}

export { WorkCenterAlternativeCreateInput as WorkCenterAlternativeCreateInput };
