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
import { SaleTaxWhereUniqueInput } from "./SaleTaxWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SaleTaxUpdateInput } from "./SaleTaxUpdateInput";

@ArgsType()
class UpdateSaleTaxArgs {
  @ApiProperty({
    required: true,
    type: () => SaleTaxWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxWhereUniqueInput)
  @Field(() => SaleTaxWhereUniqueInput, { nullable: false })
  where!: SaleTaxWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SaleTaxUpdateInput,
  })
  @ValidateNested()
  @Type(() => SaleTaxUpdateInput)
  @Field(() => SaleTaxUpdateInput, { nullable: false })
  data!: SaleTaxUpdateInput;
}

export { UpdateSaleTaxArgs as UpdateSaleTaxArgs };
