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
import { ProductDepartmentWhereInput } from "./ProductDepartmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductDepartmentOrderByInput } from "./ProductDepartmentOrderByInput";

@ArgsType()
class ProductDepartmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductDepartmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductDepartmentWhereInput, { nullable: true })
  @Type(() => ProductDepartmentWhereInput)
  where?: ProductDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductDepartmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductDepartmentOrderByInput], { nullable: true })
  @Type(() => ProductDepartmentOrderByInput)
  orderBy?: Array<ProductDepartmentOrderByInput>;

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

export { ProductDepartmentFindManyArgs as ProductDepartmentFindManyArgs };
