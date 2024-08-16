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
import { ProductBarcodeWhereInput } from "./ProductBarcodeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductBarcodeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductBarcodeWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductBarcodeWhereInput)
  @IsOptional()
  @Field(() => ProductBarcodeWhereInput, {
    nullable: true,
  })
  every?: ProductBarcodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductBarcodeWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductBarcodeWhereInput)
  @IsOptional()
  @Field(() => ProductBarcodeWhereInput, {
    nullable: true,
  })
  some?: ProductBarcodeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductBarcodeWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductBarcodeWhereInput)
  @IsOptional()
  @Field(() => ProductBarcodeWhereInput, {
    nullable: true,
  })
  none?: ProductBarcodeWhereInput;
}
export { ProductBarcodeListRelationFilter as ProductBarcodeListRelationFilter };