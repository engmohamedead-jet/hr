/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ElevatorUpdateManyWithoutStoresInput {
  @Field(() => [ElevatorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ElevatorWhereUniqueInput],
  })
  connect?: Array<ElevatorWhereUniqueInput>;

  @Field(() => [ElevatorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ElevatorWhereUniqueInput],
  })
  disconnect?: Array<ElevatorWhereUniqueInput>;

  @Field(() => [ElevatorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ElevatorWhereUniqueInput],
  })
  set?: Array<ElevatorWhereUniqueInput>;
}

export { ElevatorUpdateManyWithoutStoresInput as ElevatorUpdateManyWithoutStoresInput };
