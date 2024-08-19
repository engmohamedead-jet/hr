/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RoleGroupWhereUniqueInput } from "../../roleGroup/base/RoleGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RoleGroupUpdateManyWithoutTenantsInput {
  @Field(() => [RoleGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleGroupWhereUniqueInput],
  })
  connect?: Array<RoleGroupWhereUniqueInput>;

  @Field(() => [RoleGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleGroupWhereUniqueInput],
  })
  disconnect?: Array<RoleGroupWhereUniqueInput>;

  @Field(() => [RoleGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleGroupWhereUniqueInput],
  })
  set?: Array<RoleGroupWhereUniqueInput>;
}

export { RoleGroupUpdateManyWithoutTenantsInput as RoleGroupUpdateManyWithoutTenantsInput };
