/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PurchaseReturnWhereUniqueInput } from "../../purchaseReturn/base/PurchaseReturnWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PurchaseReturnUpdateManyWithoutPurchasesInput {
  @Field(() => [PurchaseReturnWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseReturnWhereUniqueInput],
  })
  connect?: Array<PurchaseReturnWhereUniqueInput>;

  @Field(() => [PurchaseReturnWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseReturnWhereUniqueInput],
  })
  disconnect?: Array<PurchaseReturnWhereUniqueInput>;

  @Field(() => [PurchaseReturnWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseReturnWhereUniqueInput],
  })
  set?: Array<PurchaseReturnWhereUniqueInput>;
}

export { PurchaseReturnUpdateManyWithoutPurchasesInput as PurchaseReturnUpdateManyWithoutPurchasesInput };
