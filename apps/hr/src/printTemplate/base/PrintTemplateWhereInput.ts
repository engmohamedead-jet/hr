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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { EnumPrintTemplatePaperLayout } from "./EnumPrintTemplatePaperLayout";
import { EnumPrintTemplatePaperSize } from "./EnumPrintTemplatePaperSize";
import { JsonFilter } from "../../util/JsonFilter";
import { PrintTemplateContentWhereUniqueInput } from "../../printTemplateContent/base/PrintTemplateContentWhereUniqueInput";

@InputType()
class PrintTemplateWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  filePath?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isCustomized?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isFavourite?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  normalizedName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  note?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPrintTemplatePaperLayout,
  })
  @IsEnum(EnumPrintTemplatePaperLayout)
  @IsOptional()
  @Field(() => EnumPrintTemplatePaperLayout, {
    nullable: true,
  })
  paperLayout?: "Portrait" | "Landscape";

  @ApiProperty({
    required: false,
    enum: EnumPrintTemplatePaperSize,
  })
  @IsEnum(EnumPrintTemplatePaperSize)
  @IsOptional()
  @Field(() => EnumPrintTemplatePaperSize, {
    nullable: true,
  })
  paperSize?:
    | "A1"
    | "A2"
    | "A3"
    | "A4"
    | "A5"
    | "A6"
    | "B1"
    | "B2"
    | "B3"
    | "B5"
    | "B6";

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  previewImage?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => PrintTemplateContentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateContentWhereUniqueInput)
  @IsOptional()
  @Field(() => PrintTemplateContentWhereUniqueInput, {
    nullable: true,
  })
  printTemplateContents?: PrintTemplateContentWhereUniqueInput;
}

export { PrintTemplateWhereInput as PrintTemplateWhereInput };
