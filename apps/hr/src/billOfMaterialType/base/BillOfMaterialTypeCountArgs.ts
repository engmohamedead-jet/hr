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
import { BillOfMaterialTypeWhereInput } from "./BillOfMaterialTypeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BillOfMaterialTypeCountArgs {
  @ApiProperty({
    required: false,
    type: () => BillOfMaterialTypeWhereInput,
  })
  @Field(() => BillOfMaterialTypeWhereInput, { nullable: true })
  @Type(() => BillOfMaterialTypeWhereInput)
  where?: BillOfMaterialTypeWhereInput;
}

export { BillOfMaterialTypeCountArgs as BillOfMaterialTypeCountArgs };
