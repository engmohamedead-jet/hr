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
import { EmployeeDepartmentWhereInput } from "./EmployeeDepartmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeDepartmentOrderByInput } from "./EmployeeDepartmentOrderByInput";

@ArgsType()
class EmployeeDepartmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmployeeDepartmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmployeeDepartmentWhereInput, { nullable: true })
  @Type(() => EmployeeDepartmentWhereInput)
  where?: EmployeeDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: [EmployeeDepartmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmployeeDepartmentOrderByInput], { nullable: true })
  @Type(() => EmployeeDepartmentOrderByInput)
  orderBy?: Array<EmployeeDepartmentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmployeeDepartmentFindManyArgs as EmployeeDepartmentFindManyArgs };