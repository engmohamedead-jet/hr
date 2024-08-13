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
import { PrintTemplateWhereUniqueInput } from "./PrintTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PrintTemplateUpdateInput } from "./PrintTemplateUpdateInput";

@ArgsType()
class UpdatePrintTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => PrintTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateWhereUniqueInput)
  @Field(() => PrintTemplateWhereUniqueInput, { nullable: false })
  where!: PrintTemplateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PrintTemplateUpdateInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateUpdateInput)
  @Field(() => PrintTemplateUpdateInput, { nullable: false })
  data!: PrintTemplateUpdateInput;
}

export { UpdatePrintTemplateArgs as UpdatePrintTemplateArgs };