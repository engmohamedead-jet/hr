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
import { AttributeValueWhereUniqueInput } from "../../attributeValue/base/AttributeValueWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { BillOfMaterialDetailUpdateManyWithoutProductVariantsInput } from "./BillOfMaterialDetailUpdateManyWithoutProductVariantsInput";
import { BillOfMaterialUpdateManyWithoutProductVariantsInput } from "./BillOfMaterialUpdateManyWithoutProductVariantsInput";
import { ProductBarcodeUpdateManyWithoutProductVariantsInput } from "./ProductBarcodeUpdateManyWithoutProductVariantsInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@InputType()
class ProductVariantUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttributeValueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttributeValueWhereUniqueInput)
  @IsOptional()
  @Field(() => AttributeValueWhereUniqueInput, {
    nullable: true,
  })
  attributeValueId?: AttributeValueWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialDetailUpdateManyWithoutProductVariantsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialDetailUpdateManyWithoutProductVariantsInput)
  @IsOptional()
  @Field(() => BillOfMaterialDetailUpdateManyWithoutProductVariantsInput, {
    nullable: true,
  })
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutProductVariantsInput;

  @ApiProperty({
    required: false,
    type: () => BillOfMaterialUpdateManyWithoutProductVariantsInput,
  })
  @ValidateNested()
  @Type(() => BillOfMaterialUpdateManyWithoutProductVariantsInput)
  @IsOptional()
  @Field(() => BillOfMaterialUpdateManyWithoutProductVariantsInput, {
    nullable: true,
  })
  billOfMaterials?: BillOfMaterialUpdateManyWithoutProductVariantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductBarcodeUpdateManyWithoutProductVariantsInput,
  })
  @ValidateNested()
  @Type(() => ProductBarcodeUpdateManyWithoutProductVariantsInput)
  @IsOptional()
  @Field(() => ProductBarcodeUpdateManyWithoutProductVariantsInput, {
    nullable: true,
  })
  productBarcodes?: ProductBarcodeUpdateManyWithoutProductVariantsInput;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  productId?: ProductWhereUniqueInput;
}

export { ProductVariantUpdateInput as ProductVariantUpdateInput };
