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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PeriodWhereUniqueInput } from "../../period/base/PeriodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InstallmentSaleFeeWhereUniqueInput } from "../../installmentSaleFee/base/InstallmentSaleFeeWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

@InputType()
class PaymentTermWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  dueDays?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dueOnDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PeriodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PeriodWhereUniqueInput)
  @IsOptional()
  @Field(() => PeriodWhereUniqueInput, {
    nullable: true,
  })
  duePeriodId?: PeriodWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  gracePeriod?: IntNullableFilter;

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
    type: () => InstallmentSaleFeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFeeWhereUniqueInput)
  @IsOptional()
  @Field(() => InstallmentSaleFeeWhereUniqueInput, {
    nullable: true,
  })
  installmentSaleFeeId?: InstallmentSaleFeeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PeriodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PeriodWhereUniqueInput)
  @IsOptional()
  @Field(() => PeriodWhereUniqueInput, {
    nullable: true,
  })
  installmentSaleFeePostingPeriodId?: PeriodWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isDefault?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  normalizedName?: StringNullableFilter;
}

export { PaymentTermWhereInput as PaymentTermWhereInput };