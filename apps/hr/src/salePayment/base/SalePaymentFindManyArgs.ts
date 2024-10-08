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
import { SalePaymentWhereInput } from "./SalePaymentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SalePaymentOrderByInput } from "./SalePaymentOrderByInput";

@ArgsType()
class SalePaymentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SalePaymentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SalePaymentWhereInput, { nullable: true })
  @Type(() => SalePaymentWhereInput)
  where?: SalePaymentWhereInput;

  @ApiProperty({
    required: false,
    type: [SalePaymentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SalePaymentOrderByInput], { nullable: true })
  @Type(() => SalePaymentOrderByInput)
  orderBy?: Array<SalePaymentOrderByInput>;

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

export { SalePaymentFindManyArgs as SalePaymentFindManyArgs };
