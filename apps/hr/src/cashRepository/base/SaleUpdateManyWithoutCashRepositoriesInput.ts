/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SaleUpdateManyWithoutCashRepositoriesInput {
  @Field(() => [SaleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SaleWhereUniqueInput],
  })
  connect?: Array<SaleWhereUniqueInput>;

  @Field(() => [SaleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SaleWhereUniqueInput],
  })
  disconnect?: Array<SaleWhereUniqueInput>;

  @Field(() => [SaleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SaleWhereUniqueInput],
  })
  set?: Array<SaleWhereUniqueInput>;
}

export { SaleUpdateManyWithoutCashRepositoriesInput as SaleUpdateManyWithoutCashRepositoriesInput };
