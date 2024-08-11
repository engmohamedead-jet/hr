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
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentTermUpdateInput } from "./PaymentTermUpdateInput";

@ArgsType()
class UpdatePaymentTermArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentTermWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermWhereUniqueInput)
  @Field(() => PaymentTermWhereUniqueInput, { nullable: false })
  where!: PaymentTermWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentTermUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentTermUpdateInput)
  @Field(() => PaymentTermUpdateInput, { nullable: false })
  data!: PaymentTermUpdateInput;
}

export { UpdatePaymentTermArgs as UpdatePaymentTermArgs };
