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
import { SaleOrderDetailWhereInput } from "./SaleOrderDetailWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SaleOrderDetailCountArgs {
  @ApiProperty({
    required: false,
    type: () => SaleOrderDetailWhereInput,
  })
  @Field(() => SaleOrderDetailWhereInput, { nullable: true })
  @Type(() => SaleOrderDetailWhereInput)
  where?: SaleOrderDetailWhereInput;
}

export { SaleOrderDetailCountArgs as SaleOrderDetailCountArgs };
