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
import { WorkOrderStatusWhereInput } from "./WorkOrderStatusWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkOrderStatusOrderByInput } from "./WorkOrderStatusOrderByInput";

@ArgsType()
class WorkOrderStatusFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkOrderStatusWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkOrderStatusWhereInput, { nullable: true })
  @Type(() => WorkOrderStatusWhereInput)
  where?: WorkOrderStatusWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkOrderStatusOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkOrderStatusOrderByInput], { nullable: true })
  @Type(() => WorkOrderStatusOrderByInput)
  orderBy?: Array<WorkOrderStatusOrderByInput>;

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

export { WorkOrderStatusFindManyArgs as WorkOrderStatusFindManyArgs };
