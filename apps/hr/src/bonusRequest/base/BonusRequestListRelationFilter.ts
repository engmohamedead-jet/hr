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
import { BonusRequestWhereInput } from "./BonusRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BonusRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BonusRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => BonusRequestWhereInput)
  @IsOptional()
  @Field(() => BonusRequestWhereInput, {
    nullable: true,
  })
  every?: BonusRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => BonusRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => BonusRequestWhereInput)
  @IsOptional()
  @Field(() => BonusRequestWhereInput, {
    nullable: true,
  })
  some?: BonusRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => BonusRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => BonusRequestWhereInput)
  @IsOptional()
  @Field(() => BonusRequestWhereInput, {
    nullable: true,
  })
  none?: BonusRequestWhereInput;
}
export { BonusRequestListRelationFilter as BonusRequestListRelationFilter };