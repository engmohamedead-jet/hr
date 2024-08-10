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
import { AccountTransactionDetailUpdateManyWithoutStoresInput } from "./AccountTransactionDetailUpdateManyWithoutStoresInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { AccountTransactionUpdateManyWithoutStoresInput } from "./AccountTransactionUpdateManyWithoutStoresInput";
import { NotificationUpdateManyWithoutStoresInput } from "./NotificationUpdateManyWithoutStoresInput";
import { OfficeWhereUniqueInput } from "../../office/base/OfficeWhereUniqueInput";
import { StoreTypeWhereUniqueInput } from "../../storeType/base/StoreTypeWhereUniqueInput";

@InputType()
class StoreUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountTransactionDetailUpdateManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => AccountTransactionDetailUpdateManyWithoutStoresInput)
  @IsOptional()
  @Field(() => AccountTransactionDetailUpdateManyWithoutStoresInput, {
    nullable: true,
  })
  accountTransactionDetails?: AccountTransactionDetailUpdateManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => AccountTransactionUpdateManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => AccountTransactionUpdateManyWithoutStoresInput)
  @IsOptional()
  @Field(() => AccountTransactionUpdateManyWithoutStoresInput, {
    nullable: true,
  })
  accountTransactions?: AccountTransactionUpdateManyWithoutStoresInput;

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
  addressLine1?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  allowSale?: boolean;

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
  code?: string;

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
    type: () => NotificationUpdateManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutStoresInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutStoresInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => OfficeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OfficeWhereUniqueInput)
  @IsOptional()
  @Field(() => OfficeWhereUniqueInput, {
    nullable: true,
  })
  office?: OfficeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => StoreTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreTypeWhereUniqueInput, {
    nullable: true,
  })
  storeType?: StoreTypeWhereUniqueInput;

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

export { StoreUpdateInput as StoreUpdateInput };