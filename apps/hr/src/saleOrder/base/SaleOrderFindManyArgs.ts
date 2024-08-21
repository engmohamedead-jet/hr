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
import { SaleOrderWhereInput } from "./SaleOrderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SaleOrderOrderByInput } from "./SaleOrderOrderByInput";

@ArgsType()
class SaleOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SaleOrderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SaleOrderWhereInput, { nullable: true })
  @Type(() => SaleOrderWhereInput)
  where?: SaleOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [SaleOrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SaleOrderOrderByInput], { nullable: true })
  @Type(() => SaleOrderOrderByInput)
  orderBy?: Array<SaleOrderOrderByInput>;

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

export { SaleOrderFindManyArgs as SaleOrderFindManyArgs };
