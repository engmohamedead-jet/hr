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
import { PrintTemplateWhereInput } from "./PrintTemplateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PrintTemplateCountArgs {
  @ApiProperty({
    required: false,
    type: () => PrintTemplateWhereInput,
  })
  @Field(() => PrintTemplateWhereInput, { nullable: true })
  @Type(() => PrintTemplateWhereInput)
  where?: PrintTemplateWhereInput;
}

export { PrintTemplateCountArgs as PrintTemplateCountArgs };
