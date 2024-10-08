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
import { PurchasePriceTypeWhereInput } from "./PurchasePriceTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PurchasePriceTypeOrderByInput } from "./PurchasePriceTypeOrderByInput";

@ArgsType()
class PurchasePriceTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PurchasePriceTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PurchasePriceTypeWhereInput, { nullable: true })
  @Type(() => PurchasePriceTypeWhereInput)
  where?: PurchasePriceTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [PurchasePriceTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PurchasePriceTypeOrderByInput], { nullable: true })
  @Type(() => PurchasePriceTypeOrderByInput)
  orderBy?: Array<PurchasePriceTypeOrderByInput>;

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

export { PurchasePriceTypeFindManyArgs as PurchasePriceTypeFindManyArgs };
