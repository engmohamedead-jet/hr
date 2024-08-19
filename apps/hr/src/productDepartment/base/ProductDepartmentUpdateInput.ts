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
import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { Type } from "class-transformer";
import { ProductDepartmentUpdateManyWithoutProductDepartmentsInput } from "./ProductDepartmentUpdateManyWithoutProductDepartmentsInput";
import { ProductUpdateManyWithoutProductDepartmentsInput } from "./ProductUpdateManyWithoutProductDepartmentsInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class ProductDepartmentUpdateInput {
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
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDefault?: boolean;

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
    type: () => ProductDepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductDepartmentWhereUniqueInput, {
    nullable: true,
  })
  parentProductDepartmentId?: ProductDepartmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProductDepartmentUpdateManyWithoutProductDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentUpdateManyWithoutProductDepartmentsInput)
  @IsOptional()
  @Field(() => ProductDepartmentUpdateManyWithoutProductDepartmentsInput, {
    nullable: true,
  })
  productDepartments?: ProductDepartmentUpdateManyWithoutProductDepartmentsInput;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutProductDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutProductDepartmentsInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutProductDepartmentsInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutProductDepartmentsInput;

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

export { ProductDepartmentUpdateInput as ProductDepartmentUpdateInput };
