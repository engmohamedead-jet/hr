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
import { FiscalWeekWhereInput } from "./FiscalWeekWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FiscalWeekOrderByInput } from "./FiscalWeekOrderByInput";

@ArgsType()
class FiscalWeekFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FiscalWeekWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FiscalWeekWhereInput, { nullable: true })
  @Type(() => FiscalWeekWhereInput)
  where?: FiscalWeekWhereInput;

  @ApiProperty({
    required: false,
    type: [FiscalWeekOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FiscalWeekOrderByInput], { nullable: true })
  @Type(() => FiscalWeekOrderByInput)
  orderBy?: Array<FiscalWeekOrderByInput>;

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

export { FiscalWeekFindManyArgs as FiscalWeekFindManyArgs };
