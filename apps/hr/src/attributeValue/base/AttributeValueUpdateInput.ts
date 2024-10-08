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
import { AttributeWhereUniqueInput } from "../../attribute/base/AttributeWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductVariantUpdateManyWithoutAttributeValuesInput } from "./ProductVariantUpdateManyWithoutAttributeValuesInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class AttributeValueUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttributeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttributeWhereUniqueInput)
  @IsOptional()
  @Field(() => AttributeWhereUniqueInput, {
    nullable: true,
  })
  attributeId?: AttributeWhereUniqueInput;

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
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductVariantUpdateManyWithoutAttributeValuesInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantUpdateManyWithoutAttributeValuesInput)
  @IsOptional()
  @Field(() => ProductVariantUpdateManyWithoutAttributeValuesInput, {
    nullable: true,
  })
  productVariants?: ProductVariantUpdateManyWithoutAttributeValuesInput;

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
  value?: string;
}

export { AttributeValueUpdateInput as AttributeValueUpdateInput };
