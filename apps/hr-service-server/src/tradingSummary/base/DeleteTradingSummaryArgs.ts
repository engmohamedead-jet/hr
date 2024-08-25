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
import { TradingSummaryWhereUniqueInput } from "./TradingSummaryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTradingSummaryArgs {
  @ApiProperty({
    required: true,
    type: () => TradingSummaryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TradingSummaryWhereUniqueInput)
  @Field(() => TradingSummaryWhereUniqueInput, { nullable: false })
  where!: TradingSummaryWhereUniqueInput;
}

export { DeleteTradingSummaryArgs as DeleteTradingSummaryArgs };
