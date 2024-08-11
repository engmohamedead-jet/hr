/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductDepartmentWhereInput } from "./ProductDepartmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductDepartmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentWhereInput)
  @IsOptional()
  @Field(() => ProductDepartmentWhereInput, {
    nullable: true,
  })
  every?: ProductDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentWhereInput)
  @IsOptional()
  @Field(() => ProductDepartmentWhereInput, {
    nullable: true,
  })
  some?: ProductDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductDepartmentWhereInput)
  @IsOptional()
  @Field(() => ProductDepartmentWhereInput, {
    nullable: true,
  })
  none?: ProductDepartmentWhereInput;
}
export { ProductDepartmentListRelationFilter as ProductDepartmentListRelationFilter };
