/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ExchangeRateDetailWhereUniqueInput } from "../../exchangeRateDetail/base/ExchangeRateDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ExchangeRateDetailUpdateManyWithoutCurrenciesInput {
  @Field(() => [ExchangeRateDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExchangeRateDetailWhereUniqueInput],
  })
  connect?: Array<ExchangeRateDetailWhereUniqueInput>;

  @Field(() => [ExchangeRateDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExchangeRateDetailWhereUniqueInput],
  })
  disconnect?: Array<ExchangeRateDetailWhereUniqueInput>;

  @Field(() => [ExchangeRateDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExchangeRateDetailWhereUniqueInput],
  })
  set?: Array<ExchangeRateDetailWhereUniqueInput>;
}

export { ExchangeRateDetailUpdateManyWithoutCurrenciesInput as ExchangeRateDetailUpdateManyWithoutCurrenciesInput };
