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
import { TimezoneWhereInput } from "./TimezoneWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TimezoneListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TimezoneWhereInput,
  })
  @ValidateNested()
  @Type(() => TimezoneWhereInput)
  @IsOptional()
  @Field(() => TimezoneWhereInput, {
    nullable: true,
  })
  every?: TimezoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimezoneWhereInput,
  })
  @ValidateNested()
  @Type(() => TimezoneWhereInput)
  @IsOptional()
  @Field(() => TimezoneWhereInput, {
    nullable: true,
  })
  some?: TimezoneWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimezoneWhereInput,
  })
  @ValidateNested()
  @Type(() => TimezoneWhereInput)
  @IsOptional()
  @Field(() => TimezoneWhereInput, {
    nullable: true,
  })
  none?: TimezoneWhereInput;
}
export { TimezoneListRelationFilter as TimezoneListRelationFilter };
