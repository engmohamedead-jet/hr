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
import { BankTypeWhereInput } from "./BankTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BankTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BankTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankTypeWhereInput)
  @IsOptional()
  @Field(() => BankTypeWhereInput, {
    nullable: true,
  })
  every?: BankTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankTypeWhereInput)
  @IsOptional()
  @Field(() => BankTypeWhereInput, {
    nullable: true,
  })
  some?: BankTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => BankTypeWhereInput)
  @IsOptional()
  @Field(() => BankTypeWhereInput, {
    nullable: true,
  })
  none?: BankTypeWhereInput;
}
export { BankTypeListRelationFilter as BankTypeListRelationFilter };