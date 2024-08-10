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
import { ExpenseItemWhereInput } from "./ExpenseItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ExpenseItemOrderByInput } from "./ExpenseItemOrderByInput";

@ArgsType()
class ExpenseItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ExpenseItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ExpenseItemWhereInput, { nullable: true })
  @Type(() => ExpenseItemWhereInput)
  where?: ExpenseItemWhereInput;

  @ApiProperty({
    required: false,
    type: [ExpenseItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ExpenseItemOrderByInput], { nullable: true })
  @Type(() => ExpenseItemOrderByInput)
  orderBy?: Array<ExpenseItemOrderByInput>;

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

export { ExpenseItemFindManyArgs as ExpenseItemFindManyArgs };
