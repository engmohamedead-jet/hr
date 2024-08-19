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
import { SaleReturnDetailWhereInput } from "./SaleReturnDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SaleReturnDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailWhereInput)
  @IsOptional()
  @Field(() => SaleReturnDetailWhereInput, {
    nullable: true,
  })
  every?: SaleReturnDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailWhereInput)
  @IsOptional()
  @Field(() => SaleReturnDetailWhereInput, {
    nullable: true,
  })
  some?: SaleReturnDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnDetailWhereInput)
  @IsOptional()
  @Field(() => SaleReturnDetailWhereInput, {
    nullable: true,
  })
  none?: SaleReturnDetailWhereInput;
}
export { SaleReturnDetailListRelationFilter as SaleReturnDetailListRelationFilter };