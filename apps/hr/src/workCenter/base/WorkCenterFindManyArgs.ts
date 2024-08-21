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
import { WorkCenterWhereInput } from "./WorkCenterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkCenterOrderByInput } from "./WorkCenterOrderByInput";

@ArgsType()
class WorkCenterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkCenterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkCenterWhereInput, { nullable: true })
  @Type(() => WorkCenterWhereInput)
  where?: WorkCenterWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkCenterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkCenterOrderByInput], { nullable: true })
  @Type(() => WorkCenterOrderByInput)
  orderBy?: Array<WorkCenterOrderByInput>;

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

export { WorkCenterFindManyArgs as WorkCenterFindManyArgs };
