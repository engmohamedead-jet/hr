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
import { WorkCenterProductivityLossWhereInput } from "./WorkCenterProductivityLossWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkCenterProductivityLossListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkCenterProductivityLossWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterProductivityLossWhereInput)
  @IsOptional()
  @Field(() => WorkCenterProductivityLossWhereInput, {
    nullable: true,
  })
  every?: WorkCenterProductivityLossWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkCenterProductivityLossWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterProductivityLossWhereInput)
  @IsOptional()
  @Field(() => WorkCenterProductivityLossWhereInput, {
    nullable: true,
  })
  some?: WorkCenterProductivityLossWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkCenterProductivityLossWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkCenterProductivityLossWhereInput)
  @IsOptional()
  @Field(() => WorkCenterProductivityLossWhereInput, {
    nullable: true,
  })
  none?: WorkCenterProductivityLossWhereInput;
}
export { WorkCenterProductivityLossListRelationFilter as WorkCenterProductivityLossListRelationFilter };