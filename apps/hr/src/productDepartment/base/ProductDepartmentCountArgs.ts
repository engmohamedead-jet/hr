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
import { ProductDepartmentWhereInput } from "./ProductDepartmentWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProductDepartmentCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProductDepartmentWhereInput,
  })
  @Field(() => ProductDepartmentWhereInput, { nullable: true })
  @Type(() => ProductDepartmentWhereInput)
  where?: ProductDepartmentWhereInput;
}

export { ProductDepartmentCountArgs as ProductDepartmentCountArgs };
