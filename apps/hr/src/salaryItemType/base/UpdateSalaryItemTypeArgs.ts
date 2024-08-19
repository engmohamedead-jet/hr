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
import { SalaryItemTypeWhereUniqueInput } from "./SalaryItemTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalaryItemTypeUpdateInput } from "./SalaryItemTypeUpdateInput";

@ArgsType()
class UpdateSalaryItemTypeArgs {
  @ApiProperty({
    required: true,
    type: () => SalaryItemTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalaryItemTypeWhereUniqueInput)
  @Field(() => SalaryItemTypeWhereUniqueInput, { nullable: false })
  where!: SalaryItemTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalaryItemTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalaryItemTypeUpdateInput)
  @Field(() => SalaryItemTypeUpdateInput, { nullable: false })
  data!: SalaryItemTypeUpdateInput;
}

export { UpdateSalaryItemTypeArgs as UpdateSalaryItemTypeArgs };