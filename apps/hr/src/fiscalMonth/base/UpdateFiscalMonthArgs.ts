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
import { FiscalMonthWhereUniqueInput } from "./FiscalMonthWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FiscalMonthUpdateInput } from "./FiscalMonthUpdateInput";

@ArgsType()
class UpdateFiscalMonthArgs {
  @ApiProperty({
    required: true,
    type: () => FiscalMonthWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FiscalMonthWhereUniqueInput)
  @Field(() => FiscalMonthWhereUniqueInput, { nullable: false })
  where!: FiscalMonthWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FiscalMonthUpdateInput,
  })
  @ValidateNested()
  @Type(() => FiscalMonthUpdateInput)
  @Field(() => FiscalMonthUpdateInput, { nullable: false })
  data!: FiscalMonthUpdateInput;
}

export { UpdateFiscalMonthArgs as UpdateFiscalMonthArgs };
