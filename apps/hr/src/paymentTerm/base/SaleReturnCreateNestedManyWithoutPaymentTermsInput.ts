/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SaleReturnWhereUniqueInput } from "../../saleReturn/base/SaleReturnWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SaleReturnCreateNestedManyWithoutPaymentTermsInput {
  @Field(() => [SaleReturnWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SaleReturnWhereUniqueInput],
  })
  connect?: Array<SaleReturnWhereUniqueInput>;
}

export { SaleReturnCreateNestedManyWithoutPaymentTermsInput as SaleReturnCreateNestedManyWithoutPaymentTermsInput };
