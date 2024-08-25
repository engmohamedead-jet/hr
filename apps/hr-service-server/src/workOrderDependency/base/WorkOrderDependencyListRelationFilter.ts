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
import { WorkOrderDependencyWhereInput } from "./WorkOrderDependencyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkOrderDependencyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkOrderDependencyWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderDependencyWhereInput)
  @IsOptional()
  @Field(() => WorkOrderDependencyWhereInput, {
    nullable: true,
  })
  every?: WorkOrderDependencyWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkOrderDependencyWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderDependencyWhereInput)
  @IsOptional()
  @Field(() => WorkOrderDependencyWhereInput, {
    nullable: true,
  })
  some?: WorkOrderDependencyWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkOrderDependencyWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderDependencyWhereInput)
  @IsOptional()
  @Field(() => WorkOrderDependencyWhereInput, {
    nullable: true,
  })
  none?: WorkOrderDependencyWhereInput;
}
export { WorkOrderDependencyListRelationFilter as WorkOrderDependencyListRelationFilter };
