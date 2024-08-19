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
import { PurchasePriceTypeWhereUniqueInput } from "./PurchasePriceTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PurchasePriceTypeUpdateInput } from "./PurchasePriceTypeUpdateInput";

@ArgsType()
class UpdatePurchasePriceTypeArgs {
  @ApiProperty({
    required: true,
    type: () => PurchasePriceTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchasePriceTypeWhereUniqueInput)
  @Field(() => PurchasePriceTypeWhereUniqueInput, { nullable: false })
  where!: PurchasePriceTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PurchasePriceTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => PurchasePriceTypeUpdateInput)
  @Field(() => PurchasePriceTypeUpdateInput, { nullable: false })
  data!: PurchasePriceTypeUpdateInput;
}

export { UpdatePurchasePriceTypeArgs as UpdatePurchasePriceTypeArgs };