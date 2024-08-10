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
import { IncomeItemWhereInput } from "./IncomeItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IncomeItemOrderByInput } from "./IncomeItemOrderByInput";

@ArgsType()
class IncomeItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IncomeItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => IncomeItemWhereInput, { nullable: true })
  @Type(() => IncomeItemWhereInput)
  where?: IncomeItemWhereInput;

  @ApiProperty({
    required: false,
    type: [IncomeItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [IncomeItemOrderByInput], { nullable: true })
  @Type(() => IncomeItemOrderByInput)
  orderBy?: Array<IncomeItemOrderByInput>;

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

export { IncomeItemFindManyArgs as IncomeItemFindManyArgs };
