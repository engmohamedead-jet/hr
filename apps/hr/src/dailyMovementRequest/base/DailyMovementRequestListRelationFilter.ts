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
import { DailyMovementRequestWhereInput } from "./DailyMovementRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DailyMovementRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DailyMovementRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestWhereInput)
  @IsOptional()
  @Field(() => DailyMovementRequestWhereInput, {
    nullable: true,
  })
  every?: DailyMovementRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => DailyMovementRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestWhereInput)
  @IsOptional()
  @Field(() => DailyMovementRequestWhereInput, {
    nullable: true,
  })
  some?: DailyMovementRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => DailyMovementRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DailyMovementRequestWhereInput)
  @IsOptional()
  @Field(() => DailyMovementRequestWhereInput, {
    nullable: true,
  })
  none?: DailyMovementRequestWhereInput;
}
export { DailyMovementRequestListRelationFilter as DailyMovementRequestListRelationFilter };
