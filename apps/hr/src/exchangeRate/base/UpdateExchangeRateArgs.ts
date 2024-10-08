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
import { ExchangeRateWhereUniqueInput } from "./ExchangeRateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExchangeRateUpdateInput } from "./ExchangeRateUpdateInput";

@ArgsType()
class UpdateExchangeRateArgs {
  @ApiProperty({
    required: true,
    type: () => ExchangeRateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExchangeRateWhereUniqueInput)
  @Field(() => ExchangeRateWhereUniqueInput, { nullable: false })
  where!: ExchangeRateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ExchangeRateUpdateInput,
  })
  @ValidateNested()
  @Type(() => ExchangeRateUpdateInput)
  @Field(() => ExchangeRateUpdateInput, { nullable: false })
  data!: ExchangeRateUpdateInput;
}

export { UpdateExchangeRateArgs as UpdateExchangeRateArgs };
