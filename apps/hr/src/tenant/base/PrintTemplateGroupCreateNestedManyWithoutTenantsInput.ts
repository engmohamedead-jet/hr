/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PrintTemplateGroupWhereUniqueInput } from "../../printTemplateGroup/base/PrintTemplateGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PrintTemplateGroupCreateNestedManyWithoutTenantsInput {
  @Field(() => [PrintTemplateGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PrintTemplateGroupWhereUniqueInput],
  })
  connect?: Array<PrintTemplateGroupWhereUniqueInput>;
}

export { PrintTemplateGroupCreateNestedManyWithoutTenantsInput as PrintTemplateGroupCreateNestedManyWithoutTenantsInput };
