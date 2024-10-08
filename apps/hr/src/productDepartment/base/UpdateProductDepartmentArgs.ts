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
import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProductDepartmentUpdateInput } from "./ProductDepartmentUpdateInput";

@ArgsType()
class UpdateProductDepartmentArgs {
  @ApiProperty({
    required: true,
    type: () => ProductDepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentWhereUniqueInput)
  @Field(() => ProductDepartmentWhereUniqueInput, { nullable: false })
  where!: ProductDepartmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductDepartmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentUpdateInput)
  @Field(() => ProductDepartmentUpdateInput, { nullable: false })
  data!: ProductDepartmentUpdateInput;
}

export { UpdateProductDepartmentArgs as UpdateProductDepartmentArgs };
