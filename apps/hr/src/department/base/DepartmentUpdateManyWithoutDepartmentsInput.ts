/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DepartmentUpdateManyWithoutDepartmentsInput {
  @Field(() => [DepartmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DepartmentWhereUniqueInput],
  })
  connect?: Array<DepartmentWhereUniqueInput>;

  @Field(() => [DepartmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DepartmentWhereUniqueInput],
  })
  disconnect?: Array<DepartmentWhereUniqueInput>;

  @Field(() => [DepartmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DepartmentWhereUniqueInput],
  })
  set?: Array<DepartmentWhereUniqueInput>;
}

export { DepartmentUpdateManyWithoutDepartmentsInput as DepartmentUpdateManyWithoutDepartmentsInput };