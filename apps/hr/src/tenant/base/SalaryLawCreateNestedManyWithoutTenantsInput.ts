/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SalaryLawWhereUniqueInput } from "../../salaryLaw/base/SalaryLawWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SalaryLawCreateNestedManyWithoutTenantsInput {
  @Field(() => [SalaryLawWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SalaryLawWhereUniqueInput],
  })
  connect?: Array<SalaryLawWhereUniqueInput>;
}

export { SalaryLawCreateNestedManyWithoutTenantsInput as SalaryLawCreateNestedManyWithoutTenantsInput };