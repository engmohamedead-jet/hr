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
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { ProductGroupUpdateManyWithoutSaleTaxesInput } from "./ProductGroupUpdateManyWithoutSaleTaxesInput";
import { Type } from "class-transformer";
import { ProductUpdateManyWithoutSaleTaxesInput } from "./ProductUpdateManyWithoutSaleTaxesInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class SaleTaxUpdateInput {
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
  isActive?: boolean;

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
    type: () => ProductGroupUpdateManyWithoutSaleTaxesInput,
  })
  @ValidateNested()
  @Type(() => ProductGroupUpdateManyWithoutSaleTaxesInput)
  @IsOptional()
  @Field(() => ProductGroupUpdateManyWithoutSaleTaxesInput, {
    nullable: true,
  })
  productGroups?: ProductGroupUpdateManyWithoutSaleTaxesInput;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutSaleTaxesInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutSaleTaxesInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutSaleTaxesInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutSaleTaxesInput;

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
}

export { SaleTaxUpdateInput as SaleTaxUpdateInput };
