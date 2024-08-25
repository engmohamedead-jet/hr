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
import { WorkSheetTypeWhereInput } from "./WorkSheetTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkSheetTypeOrderByInput } from "./WorkSheetTypeOrderByInput";

@ArgsType()
class WorkSheetTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkSheetTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkSheetTypeWhereInput, { nullable: true })
  @Type(() => WorkSheetTypeWhereInput)
  where?: WorkSheetTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkSheetTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkSheetTypeOrderByInput], { nullable: true })
  @Type(() => WorkSheetTypeOrderByInput)
  orderBy?: Array<WorkSheetTypeOrderByInput>;

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

export { WorkSheetTypeFindManyArgs as WorkSheetTypeFindManyArgs };
