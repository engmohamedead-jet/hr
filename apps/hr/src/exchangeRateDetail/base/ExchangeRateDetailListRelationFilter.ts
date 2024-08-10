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
import { ExchangeRateDetailWhereInput } from "./ExchangeRateDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExchangeRateDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExchangeRateDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => ExchangeRateDetailWhereInput)
  @IsOptional()
  @Field(() => ExchangeRateDetailWhereInput, {
    nullable: true,
  })
  every?: ExchangeRateDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExchangeRateDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => ExchangeRateDetailWhereInput)
  @IsOptional()
  @Field(() => ExchangeRateDetailWhereInput, {
    nullable: true,
  })
  some?: ExchangeRateDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExchangeRateDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => ExchangeRateDetailWhereInput)
  @IsOptional()
  @Field(() => ExchangeRateDetailWhereInput, {
    nullable: true,
  })
  none?: ExchangeRateDetailWhereInput;
}
export { ExchangeRateDetailListRelationFilter as ExchangeRateDetailListRelationFilter };