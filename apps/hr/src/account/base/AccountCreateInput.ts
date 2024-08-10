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
import { AccountCategoryWhereUniqueInput } from "../../accountCategory/base/AccountCategoryWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { AccountTypeWhereUniqueInput } from "../../accountType/base/AccountTypeWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";

@InputType()
class AccountCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountCategoryWhereUniqueInput, {
    nullable: true,
  })
  accountCategory?: AccountCategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  accountNumber?: string | null;

  @ApiProperty({
    required: true,
    type: () => AccountTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountTypeWhereUniqueInput)
  @Field(() => AccountTypeWhereUniqueInput)
  accountTypeId!: AccountTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CurrencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyWhereUniqueInput)
  @Field(() => CurrencyWhereUniqueInput)
  currencyId!: CurrencyWhereUniqueInput;

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
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isMasterAccount!: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isUnderRevision?: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(300)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(300)
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
  note?: string | null;

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
  parentAccountId?: string | null;

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
  referenceNumber?: string | null;
}

export { AccountCreateInput as AccountCreateInput };