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
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumPrintTemplatePaperLayout } from "./EnumPrintTemplatePaperLayout";
import { EnumPrintTemplatePaperSize } from "./EnumPrintTemplatePaperSize";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput } from "./PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput";
import { Type } from "class-transformer";
import { PrintTemplateGroupWhereUniqueInput } from "../../printTemplateGroup/base/PrintTemplateGroupWhereUniqueInput";

@InputType()
class PrintTemplateCreateInput {
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
  Description?: string | null;

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
  filePath?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isCustomized?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFavourite?: boolean | null;

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
    enum: EnumPrintTemplatePaperLayout,
  })
  @IsEnum(EnumPrintTemplatePaperLayout)
  @IsOptional()
  @Field(() => EnumPrintTemplatePaperLayout, {
    nullable: true,
  })
  paperLayout?: "Portrait" | "Landscape" | null;

  @ApiProperty({
    required: false,
    enum: EnumPrintTemplatePaperSize,
  })
  @IsEnum(EnumPrintTemplatePaperSize)
  @IsOptional()
  @Field(() => EnumPrintTemplatePaperSize, {
    nullable: true,
  })
  paperSize?: "A1" | "A2" | "A3" | "A4" | "A5" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  previewImage?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput)
  @IsOptional()
  @Field(() => PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput, {
    nullable: true,
  })
  printTemplateContents?: PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput;

  @ApiProperty({
    required: true,
    type: () => PrintTemplateGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateGroupWhereUniqueInput)
  @Field(() => PrintTemplateGroupWhereUniqueInput)
  printTemplateGroupId!: PrintTemplateGroupWhereUniqueInput;
}

export { PrintTemplateCreateInput as PrintTemplateCreateInput };
