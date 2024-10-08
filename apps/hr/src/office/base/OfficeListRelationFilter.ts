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
import { OfficeWhereInput } from "./OfficeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OfficeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OfficeWhereInput,
  })
  @ValidateNested()
  @Type(() => OfficeWhereInput)
  @IsOptional()
  @Field(() => OfficeWhereInput, {
    nullable: true,
  })
  every?: OfficeWhereInput;

  @ApiProperty({
    required: false,
    type: () => OfficeWhereInput,
  })
  @ValidateNested()
  @Type(() => OfficeWhereInput)
  @IsOptional()
  @Field(() => OfficeWhereInput, {
    nullable: true,
  })
  some?: OfficeWhereInput;

  @ApiProperty({
    required: false,
    type: () => OfficeWhereInput,
  })
  @ValidateNested()
  @Type(() => OfficeWhereInput)
  @IsOptional()
  @Field(() => OfficeWhereInput, {
    nullable: true,
  })
  none?: OfficeWhereInput;
}
export { OfficeListRelationFilter as OfficeListRelationFilter };
