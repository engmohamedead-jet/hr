/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SaleQuotationDetailWhereUniqueInput } from "../../saleQuotationDetail/base/SaleQuotationDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SaleQuotationDetailUpdateManyWithoutSaleQuotationsInput {
  @Field(() => [SaleQuotationDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SaleQuotationDetailWhereUniqueInput],
  })
  connect?: Array<SaleQuotationDetailWhereUniqueInput>;

  @Field(() => [SaleQuotationDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SaleQuotationDetailWhereUniqueInput],
  })
  disconnect?: Array<SaleQuotationDetailWhereUniqueInput>;

  @Field(() => [SaleQuotationDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SaleQuotationDetailWhereUniqueInput],
  })
  set?: Array<SaleQuotationDetailWhereUniqueInput>;
}

export { SaleQuotationDetailUpdateManyWithoutSaleQuotationsInput as SaleQuotationDetailUpdateManyWithoutSaleQuotationsInput };
