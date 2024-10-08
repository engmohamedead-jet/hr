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
import { SalePersonWhereUniqueInput } from "./SalePersonWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalePersonUpdateInput } from "./SalePersonUpdateInput";

@ArgsType()
class UpdateSalePersonArgs {
  @ApiProperty({
    required: true,
    type: () => SalePersonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalePersonWhereUniqueInput)
  @Field(() => SalePersonWhereUniqueInput, { nullable: false })
  where!: SalePersonWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalePersonUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalePersonUpdateInput)
  @Field(() => SalePersonUpdateInput, { nullable: false })
  data!: SalePersonUpdateInput;
}

export { UpdateSalePersonArgs as UpdateSalePersonArgs };
