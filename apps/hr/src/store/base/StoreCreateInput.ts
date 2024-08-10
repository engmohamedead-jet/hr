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
import { AccountTransactionDetailCreateNestedManyWithoutStoresInput } from "./AccountTransactionDetailCreateNestedManyWithoutStoresInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { AccountTransactionCreateNestedManyWithoutStoresInput } from "./AccountTransactionCreateNestedManyWithoutStoresInput";
import { NotificationCreateNestedManyWithoutStoresInput } from "./NotificationCreateNestedManyWithoutStoresInput";
import { OfficeWhereUniqueInput } from "../../office/base/OfficeWhereUniqueInput";
import { StoreTypeWhereUniqueInput } from "../../storeType/base/StoreTypeWhereUniqueInput";

@InputType()
class StoreCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountTransactionDetailCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => AccountTransactionDetailCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => AccountTransactionDetailCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  accountTransactionDetails?: AccountTransactionDetailCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => AccountTransactionCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => AccountTransactionCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => AccountTransactionCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  accountTransactions?: AccountTransactionCreateNestedManyWithoutStoresInput;

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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  allowSale!: boolean;

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
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  code!: string;

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
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: true,
    type: () => OfficeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OfficeWhereUniqueInput)
  @Field(() => OfficeWhereUniqueInput)
  office!: OfficeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StoreTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreTypeWhereUniqueInput)
  @Field(() => StoreTypeWhereUniqueInput)
  storeType!: StoreTypeWhereUniqueInput;

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

export { StoreCreateInput as StoreCreateInput };