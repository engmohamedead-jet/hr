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
import { PrintTemplateCreateInput } from "./PrintTemplateCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePrintTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => PrintTemplateCreateInput,
  })
  @ValidateNested()
  @Type(() => PrintTemplateCreateInput)
  @Field(() => PrintTemplateCreateInput, { nullable: false })
  data!: PrintTemplateCreateInput;
}

export { CreatePrintTemplateArgs as CreatePrintTemplateArgs };