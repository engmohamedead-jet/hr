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
import { StoreLocationWhereInput } from "./StoreLocationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class StoreLocationCountArgs {
  @ApiProperty({
    required: false,
    type: () => StoreLocationWhereInput,
  })
  @Field(() => StoreLocationWhereInput, { nullable: true })
  @Type(() => StoreLocationWhereInput)
  where?: StoreLocationWhereInput;
}

export { StoreLocationCountArgs as StoreLocationCountArgs };
