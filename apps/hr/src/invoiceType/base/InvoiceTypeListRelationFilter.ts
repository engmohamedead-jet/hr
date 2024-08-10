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
import { InvoiceTypeWhereInput } from "./InvoiceTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InvoiceTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InvoiceTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceTypeWhereInput)
  @IsOptional()
  @Field(() => InvoiceTypeWhereInput, {
    nullable: true,
  })
  every?: InvoiceTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceTypeWhereInput)
  @IsOptional()
  @Field(() => InvoiceTypeWhereInput, {
    nullable: true,
  })
  some?: InvoiceTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceTypeWhereInput)
  @IsOptional()
  @Field(() => InvoiceTypeWhereInput, {
    nullable: true,
  })
  none?: InvoiceTypeWhereInput;
}
export { InvoiceTypeListRelationFilter as InvoiceTypeListRelationFilter };
