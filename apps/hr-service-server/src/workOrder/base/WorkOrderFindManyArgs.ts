/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkOrderWhereInput } from "./WorkOrderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkOrderOrderByInput } from "./WorkOrderOrderByInput";

@ArgsType()
class WorkOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkOrderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkOrderWhereInput, { nullable: true })
  @Type(() => WorkOrderWhereInput)
  where?: WorkOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkOrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkOrderOrderByInput], { nullable: true })
  @Type(() => WorkOrderOrderByInput)
  orderBy?: Array<WorkOrderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WorkOrderFindManyArgs as WorkOrderFindManyArgs };
