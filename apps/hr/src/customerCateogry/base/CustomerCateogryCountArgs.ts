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
import { CustomerCateogryWhereInput } from "./CustomerCateogryWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CustomerCateogryCountArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerCateogryWhereInput,
  })
  @Field(() => CustomerCateogryWhereInput, { nullable: true })
  @Type(() => CustomerCateogryWhereInput)
  where?: CustomerCateogryWhereInput;
}

export { CustomerCateogryCountArgs as CustomerCateogryCountArgs };
