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
import { WorkCenterTagWhereInput } from "./WorkCenterTagWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkCenterTagListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkCenterTagWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterTagWhereInput)
  @IsOptional()
  @Field(() => WorkCenterTagWhereInput, {
    nullable: true,
  })
  every?: WorkCenterTagWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkCenterTagWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterTagWhereInput)
  @IsOptional()
  @Field(() => WorkCenterTagWhereInput, {
    nullable: true,
  })
  some?: WorkCenterTagWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkCenterTagWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterTagWhereInput)
  @IsOptional()
  @Field(() => WorkCenterTagWhereInput, {
    nullable: true,
  })
  none?: WorkCenterTagWhereInput;
}
export { WorkCenterTagListRelationFilter as WorkCenterTagListRelationFilter };