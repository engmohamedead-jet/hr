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
import { CustomerCateogryWhereUniqueInput } from "./CustomerCateogryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerCateogryUpdateInput } from "./CustomerCateogryUpdateInput";

@ArgsType()
class UpdateCustomerCateogryArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerCateogryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerCateogryWhereUniqueInput)
  @Field(() => CustomerCateogryWhereUniqueInput, { nullable: false })
  where!: CustomerCateogryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerCateogryUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerCateogryUpdateInput)
  @Field(() => CustomerCateogryUpdateInput, { nullable: false })
  data!: CustomerCateogryUpdateInput;
}

export { UpdateCustomerCateogryArgs as UpdateCustomerCateogryArgs };
