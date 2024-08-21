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
import { TimeModeWhereInput } from "./TimeModeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TimeModeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TimeModeWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeModeWhereInput)
  @IsOptional()
  @Field(() => TimeModeWhereInput, {
    nullable: true,
  })
  every?: TimeModeWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimeModeWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeModeWhereInput)
  @IsOptional()
  @Field(() => TimeModeWhereInput, {
    nullable: true,
  })
  some?: TimeModeWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimeModeWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeModeWhereInput)
  @IsOptional()
  @Field(() => TimeModeWhereInput, {
    nullable: true,
  })
  none?: TimeModeWhereInput;
}
export { TimeModeListRelationFilter as TimeModeListRelationFilter };
