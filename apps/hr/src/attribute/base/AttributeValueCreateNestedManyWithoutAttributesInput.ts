/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AttributeValueWhereUniqueInput } from "../../attributeValue/base/AttributeValueWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AttributeValueCreateNestedManyWithoutAttributesInput {
  @Field(() => [AttributeValueWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttributeValueWhereUniqueInput],
  })
  connect?: Array<AttributeValueWhereUniqueInput>;
}

export { AttributeValueCreateNestedManyWithoutAttributesInput as AttributeValueCreateNestedManyWithoutAttributesInput };