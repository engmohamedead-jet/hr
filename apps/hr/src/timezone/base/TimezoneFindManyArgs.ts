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
import { TimezoneWhereInput } from "./TimezoneWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TimezoneOrderByInput } from "./TimezoneOrderByInput";

@ArgsType()
class TimezoneFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TimezoneWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TimezoneWhereInput, { nullable: true })
  @Type(() => TimezoneWhereInput)
  where?: TimezoneWhereInput;

  @ApiProperty({
    required: false,
    type: [TimezoneOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TimezoneOrderByInput], { nullable: true })
  @Type(() => TimezoneOrderByInput)
  orderBy?: Array<TimezoneOrderByInput>;

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

export { TimezoneFindManyArgs as TimezoneFindManyArgs };
