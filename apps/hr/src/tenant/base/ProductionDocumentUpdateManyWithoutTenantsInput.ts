/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductionDocumentWhereUniqueInput } from "../../productionDocument/base/ProductionDocumentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductionDocumentUpdateManyWithoutTenantsInput {
  @Field(() => [ProductionDocumentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductionDocumentWhereUniqueInput],
  })
  connect?: Array<ProductionDocumentWhereUniqueInput>;

  @Field(() => [ProductionDocumentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductionDocumentWhereUniqueInput],
  })
  disconnect?: Array<ProductionDocumentWhereUniqueInput>;

  @Field(() => [ProductionDocumentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductionDocumentWhereUniqueInput],
  })
  set?: Array<ProductionDocumentWhereUniqueInput>;
}

export { ProductionDocumentUpdateManyWithoutTenantsInput as ProductionDocumentUpdateManyWithoutTenantsInput };
