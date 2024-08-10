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
import { BankUpdateManyWithoutStatesInput } from "./BankUpdateManyWithoutStatesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { CityUpdateManyWithoutStatesInput } from "./CityUpdateManyWithoutStatesInput";
import { CountryWhereUniqueInput } from "../../country/base/CountryWhereUniqueInput";

@InputType()
class StateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BankUpdateManyWithoutStatesInput,
  })
  @ValidateNested()
  @Type(() => BankUpdateManyWithoutStatesInput)
  @IsOptional()
  @Field(() => BankUpdateManyWithoutStatesInput, {
    nullable: true,
  })
  banks?: BankUpdateManyWithoutStatesInput;

  @ApiProperty({
    required: false,
    type: () => CityUpdateManyWithoutStatesInput,
  })
  @ValidateNested()
  @Type(() => CityUpdateManyWithoutStatesInput)
  @IsOptional()
  @Field(() => CityUpdateManyWithoutStatesInput, {
    nullable: true,
  })
  cities?: CityUpdateManyWithoutStatesInput;

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
    type: () => CountryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CountryWhereUniqueInput)
  @IsOptional()
  @Field(() => CountryWhereUniqueInput, {
    nullable: true,
  })
  countryId?: CountryWhereUniqueInput;

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
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;
}

export { StateUpdateInput as StateUpdateInput };