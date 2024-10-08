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
import { DailyMovementRequestWhereInput } from "./DailyMovementRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DailyMovementRequestOrderByInput } from "./DailyMovementRequestOrderByInput";

@ArgsType()
class DailyMovementRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DailyMovementRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DailyMovementRequestWhereInput, { nullable: true })
  @Type(() => DailyMovementRequestWhereInput)
  where?: DailyMovementRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [DailyMovementRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DailyMovementRequestOrderByInput], { nullable: true })
  @Type(() => DailyMovementRequestOrderByInput)
  orderBy?: Array<DailyMovementRequestOrderByInput>;

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

export { DailyMovementRequestFindManyArgs as DailyMovementRequestFindManyArgs };
