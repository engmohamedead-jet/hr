/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ResourceTypeWhereUniqueInput } from "../../resourceType/base/ResourceTypeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ResourceTypeUpdateManyWithoutTenantsInput {
  @Field(() => [ResourceTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourceTypeWhereUniqueInput],
  })
  connect?: Array<ResourceTypeWhereUniqueInput>;

  @Field(() => [ResourceTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourceTypeWhereUniqueInput],
  })
  disconnect?: Array<ResourceTypeWhereUniqueInput>;

  @Field(() => [ResourceTypeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourceTypeWhereUniqueInput],
  })
  set?: Array<ResourceTypeWhereUniqueInput>;
}

export { ResourceTypeUpdateManyWithoutTenantsInput as ResourceTypeUpdateManyWithoutTenantsInput };