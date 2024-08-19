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
import { SaleReturnWhereInput } from "./SaleReturnWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SaleReturnOrderByInput } from "./SaleReturnOrderByInput";

@ArgsType()
class SaleReturnFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SaleReturnWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SaleReturnWhereInput, { nullable: true })
  @Type(() => SaleReturnWhereInput)
  where?: SaleReturnWhereInput;

  @ApiProperty({
    required: false,
    type: [SaleReturnOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SaleReturnOrderByInput], { nullable: true })
  @Type(() => SaleReturnOrderByInput)
  orderBy?: Array<SaleReturnOrderByInput>;

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

export { SaleReturnFindManyArgs as SaleReturnFindManyArgs };
