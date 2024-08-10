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
import { AccountCategory } from "../../accountCategory/base/AccountCategory";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { AccountType } from "../../accountType/base/AccountType";
import { Currency } from "../../currency/base/Currency";

@ObjectType()
class Account {
  @ApiProperty({
    required: false,
    type: () => AccountCategory,
  })
  @ValidateNested()
  @Type(() => AccountCategory)
  @IsOptional()
  accountCategory?: AccountCategory | null;

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
  accountNumber!: string | null;

  @ApiProperty({
    required: true,
    type: () => AccountType,
  })
  @ValidateNested()
  @Type(() => AccountType)
  accountTypeId?: AccountType;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Currency,
  })
  @ValidateNested()
  @Type(() => Currency)
  currencyId?: Currency;

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
  description!: string | null;

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
  isActive!: boolean | null;

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
  isUnderRevision!: boolean | null;

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
  note!: string | null;

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
  parentAccountId!: string | null;

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
  referenceNumber!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Account as Account };
