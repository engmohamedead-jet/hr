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
import { WorkSheetTypeWhereInput } from "./WorkSheetTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkSheetTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkSheetTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkSheetTypeWhereInput)
  @IsOptional()
  @Field(() => WorkSheetTypeWhereInput, {
    nullable: true,
  })
  every?: WorkSheetTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkSheetTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkSheetTypeWhereInput)
  @IsOptional()
  @Field(() => WorkSheetTypeWhereInput, {
    nullable: true,
  })
  some?: WorkSheetTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkSheetTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkSheetTypeWhereInput)
  @IsOptional()
  @Field(() => WorkSheetTypeWhereInput, {
    nullable: true,
  })
  none?: WorkSheetTypeWhereInput;
}
export { WorkSheetTypeListRelationFilter as WorkSheetTypeListRelationFilter };
