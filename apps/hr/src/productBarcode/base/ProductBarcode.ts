/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
  IsDate,
} from "class-validator";
import { BarcodeType } from "../../barcodeType/base/BarcodeType";
import { Type } from "class-transformer";
import { Product } from "../../product/base/Product";
import { ProductVariant } from "../../productVariant/base/ProductVariant";

@ObjectType()
class ProductBarcode {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  barcode!: string;

  @ApiProperty({
    required: false,
    type: () => BarcodeType,
  })
  @ValidateNested()
  @Type(() => BarcodeType)
  @IsOptional()
  barcodeTypeId?: BarcodeType | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  note!: string | null;

  @ApiProperty({
    required: true,
    type: () => Product,
  })
  @ValidateNested()
  @Type(() => Product)
  productId?: Product;

  @ApiProperty({
    required: false,
    type: () => ProductVariant,
  })
  @ValidateNested()
  @Type(() => ProductVariant)
  @IsOptional()
  productVariantId?: ProductVariant | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { ProductBarcode as ProductBarcode };
