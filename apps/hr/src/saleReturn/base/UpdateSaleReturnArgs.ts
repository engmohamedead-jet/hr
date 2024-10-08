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
import { SaleReturnWhereUniqueInput } from "./SaleReturnWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SaleReturnUpdateInput } from "./SaleReturnUpdateInput";

@ArgsType()
class UpdateSaleReturnArgs {
  @ApiProperty({
    required: true,
    type: () => SaleReturnWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnWhereUniqueInput)
  @Field(() => SaleReturnWhereUniqueInput, { nullable: false })
  where!: SaleReturnWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SaleReturnUpdateInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnUpdateInput)
  @Field(() => SaleReturnUpdateInput, { nullable: false })
  data!: SaleReturnUpdateInput;
}

export { UpdateSaleReturnArgs as UpdateSaleReturnArgs };
