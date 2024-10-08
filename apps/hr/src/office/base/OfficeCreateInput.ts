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
import { NotificationCreateNestedManyWithoutOfficesInput } from "./NotificationCreateNestedManyWithoutOfficesInput";
import { Type } from "class-transformer";
import { StoreCreateNestedManyWithoutOfficesInput } from "./StoreCreateNestedManyWithoutOfficesInput";

@InputType()
class OfficeCreateInput {
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
  @MaxLength(2560)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutOfficesInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutOfficesInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutOfficesInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutOfficesInput;

  @ApiProperty({
    required: false,
    type: () => StoreCreateNestedManyWithoutOfficesInput,
  })
  @ValidateNested()
  @Type(() => StoreCreateNestedManyWithoutOfficesInput)
  @IsOptional()
  @Field(() => StoreCreateNestedManyWithoutOfficesInput, {
    nullable: true,
  })
  stores?: StoreCreateNestedManyWithoutOfficesInput;
}

export { OfficeCreateInput as OfficeCreateInput };
