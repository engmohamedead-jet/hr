/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductUnitWhereUniqueInput } from "../../productUnit/base/ProductUnitWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductUnitCreateNestedManyWithoutTenantsInput {
  @Field(() => [ProductUnitWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductUnitWhereUniqueInput],
  })
  connect?: Array<ProductUnitWhereUniqueInput>;
}

export { ProductUnitCreateNestedManyWithoutTenantsInput as ProductUnitCreateNestedManyWithoutTenantsInput };
