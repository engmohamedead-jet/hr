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
import { PaymentTypeWhereUniqueInput } from "./PaymentTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentTypeUpdateInput } from "./PaymentTypeUpdateInput";

@ArgsType()
class UpdatePaymentTypeArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTypeWhereUniqueInput)
  @Field(() => PaymentTypeWhereUniqueInput, { nullable: false })
  where!: PaymentTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentTypeUpdateInput)
  @Field(() => PaymentTypeUpdateInput, { nullable: false })
  data!: PaymentTypeUpdateInput;
}

export { UpdatePaymentTypeArgs as UpdatePaymentTypeArgs };
