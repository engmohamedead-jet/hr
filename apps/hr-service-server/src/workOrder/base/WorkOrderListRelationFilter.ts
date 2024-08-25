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
import { WorkOrderWhereInput } from "./WorkOrderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkOrderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderWhereInput)
  @IsOptional()
  @Field(() => WorkOrderWhereInput, {
    nullable: true,
  })
  every?: WorkOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderWhereInput)
  @IsOptional()
  @Field(() => WorkOrderWhereInput, {
    nullable: true,
  })
  some?: WorkOrderWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkOrderWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderWhereInput)
  @IsOptional()
  @Field(() => WorkOrderWhereInput, {
    nullable: true,
  })
  none?: WorkOrderWhereInput;
}
export { WorkOrderListRelationFilter as WorkOrderListRelationFilter };
