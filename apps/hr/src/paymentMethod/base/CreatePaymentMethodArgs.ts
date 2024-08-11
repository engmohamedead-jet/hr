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
import { PaymentMethodCreateInput } from "./PaymentMethodCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePaymentMethodArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentMethodCreateInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodCreateInput)
  @Field(() => PaymentMethodCreateInput, { nullable: false })
  data!: PaymentMethodCreateInput;
}

export { CreatePaymentMethodArgs as CreatePaymentMethodArgs };
