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
import { DecimalFilter } from "../../util/DecimalFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../../workCenter/base/WorkCenterWhereUniqueInput";

@InputType()
class WorkCenterCapacityWhereInput {
  @ApiProperty({
    required: false,
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  capacity?: DecimalFilter;

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
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isActive?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  note?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  startTime?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  stopTime?: DecimalNullableFilter;

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
  tenantId?: TenantWhereUniqueInput;

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

export { WorkCenterCapacityWhereInput as WorkCenterCapacityWhereInput };