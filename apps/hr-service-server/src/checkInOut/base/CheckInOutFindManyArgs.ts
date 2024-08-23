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
import { CheckInOutWhereInput } from "./CheckInOutWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CheckInOutOrderByInput } from "./CheckInOutOrderByInput";

@ArgsType()
class CheckInOutFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CheckInOutWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CheckInOutWhereInput, { nullable: true })
  @Type(() => CheckInOutWhereInput)
  where?: CheckInOutWhereInput;

  @ApiProperty({
    required: false,
    type: [CheckInOutOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CheckInOutOrderByInput], { nullable: true })
  @Type(() => CheckInOutOrderByInput)
  orderBy?: Array<CheckInOutOrderByInput>;

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

export { CheckInOutFindManyArgs as CheckInOutFindManyArgs };
