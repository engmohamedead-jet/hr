/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PeriodWhereUniqueInput } from "../../period/base/PeriodWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PeriodUpdateManyWithoutTenantsInput {
  @Field(() => [PeriodWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PeriodWhereUniqueInput],
  })
  connect?: Array<PeriodWhereUniqueInput>;

  @Field(() => [PeriodWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PeriodWhereUniqueInput],
  })
  disconnect?: Array<PeriodWhereUniqueInput>;

  @Field(() => [PeriodWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PeriodWhereUniqueInput],
  })
  set?: Array<PeriodWhereUniqueInput>;
}

export { PeriodUpdateManyWithoutTenantsInput as PeriodUpdateManyWithoutTenantsInput };
