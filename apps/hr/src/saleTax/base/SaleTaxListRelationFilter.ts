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
import { SaleTaxWhereInput } from "./SaleTaxWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SaleTaxListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SaleTaxWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxWhereInput)
  @IsOptional()
  @Field(() => SaleTaxWhereInput, {
    nullable: true,
  })
  every?: SaleTaxWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleTaxWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxWhereInput)
  @IsOptional()
  @Field(() => SaleTaxWhereInput, {
    nullable: true,
  })
  some?: SaleTaxWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleTaxWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxWhereInput)
  @IsOptional()
  @Field(() => SaleTaxWhereInput, {
    nullable: true,
  })
  none?: SaleTaxWhereInput;
}
export { SaleTaxListRelationFilter as SaleTaxListRelationFilter };
