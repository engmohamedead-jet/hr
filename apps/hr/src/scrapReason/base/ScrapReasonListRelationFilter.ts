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
import { ScrapReasonWhereInput } from "./ScrapReasonWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScrapReasonListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScrapReasonWhereInput,
  })
  @ValidateNested()
  @Type(() => ScrapReasonWhereInput)
  @IsOptional()
  @Field(() => ScrapReasonWhereInput, {
    nullable: true,
  })
  every?: ScrapReasonWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScrapReasonWhereInput,
  })
  @ValidateNested()
  @Type(() => ScrapReasonWhereInput)
  @IsOptional()
  @Field(() => ScrapReasonWhereInput, {
    nullable: true,
  })
  some?: ScrapReasonWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScrapReasonWhereInput,
  })
  @ValidateNested()
  @Type(() => ScrapReasonWhereInput)
  @IsOptional()
  @Field(() => ScrapReasonWhereInput, {
    nullable: true,
  })
  none?: ScrapReasonWhereInput;
}
export { ScrapReasonListRelationFilter as ScrapReasonListRelationFilter };
