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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { BankBranchCreateNestedManyWithoutBanksInput } from "./BankBranchCreateNestedManyWithoutBanksInput";
import { Type } from "class-transformer";
import { BankTypeWhereUniqueInput } from "../../bankType/base/BankTypeWhereUniqueInput";
import { SalePaymentCreateNestedManyWithoutBanksInput } from "./SalePaymentCreateNestedManyWithoutBanksInput";

@InputType()
class BankCreateInput {
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
    required: false,
    type: () => BankBranchCreateNestedManyWithoutBanksInput,
  })
  @ValidateNested()
  @Type(() => BankBranchCreateNestedManyWithoutBanksInput)
  @IsOptional()
  @Field(() => BankBranchCreateNestedManyWithoutBanksInput, {
    nullable: true,
  })
  bankBranches?: BankBranchCreateNestedManyWithoutBanksInput;

  @ApiProperty({
    required: false,
    type: () => BankTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BankTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => BankTypeWhereUniqueInput, {
    nullable: true,
  })
  bankType?: BankTypeWhereUniqueInput | null;

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
  cellPhoneNumber?: string | null;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactPhoneNumber?: string | null;

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
  description?: string | null;

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
  fax?: string | null;

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
  homePhoneNumber?: string | null;

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
  name?: string | null;

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
  normalizedName?: string | null;

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
  relationshipOfficerContactNumber?: string | null;

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
  relationshipOfficerName?: string | null;

  @ApiProperty({
    required: false,
    type: () => SalePaymentCreateNestedManyWithoutBanksInput,
  })
  @ValidateNested()
  @Type(() => SalePaymentCreateNestedManyWithoutBanksInput)
  @IsOptional()
  @Field(() => SalePaymentCreateNestedManyWithoutBanksInput, {
    nullable: true,
  })
  salePayments?: SalePaymentCreateNestedManyWithoutBanksInput;

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
  street?: string | null;
}

export { BankCreateInput as BankCreateInput };
