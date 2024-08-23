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
import { BonusRequestWhereInput } from "./BonusRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BonusRequestOrderByInput } from "./BonusRequestOrderByInput";

@ArgsType()
class BonusRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BonusRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BonusRequestWhereInput, { nullable: true })
  @Type(() => BonusRequestWhereInput)
  where?: BonusRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [BonusRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BonusRequestOrderByInput], { nullable: true })
  @Type(() => BonusRequestOrderByInput)
  orderBy?: Array<BonusRequestOrderByInput>;

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

export { BonusRequestFindManyArgs as BonusRequestFindManyArgs };