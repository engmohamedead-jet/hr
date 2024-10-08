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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { ProductionOrderCreateNestedManyWithoutStoresInput } from "./ProductionOrderCreateNestedManyWithoutStoresInput";
import { Type } from "class-transformer";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";
import { PurchaseReturnCreateNestedManyWithoutStoresInput } from "./PurchaseReturnCreateNestedManyWithoutStoresInput";
import { PurchaseCreateNestedManyWithoutStoresInput } from "./PurchaseCreateNestedManyWithoutStoresInput";
import { SaleOrderCreateNestedManyWithoutStoresInput } from "./SaleOrderCreateNestedManyWithoutStoresInput";
import { SaleReturnCreateNestedManyWithoutStoresInput } from "./SaleReturnCreateNestedManyWithoutStoresInput";
import { SaleCreateNestedManyWithoutStoresInput } from "./SaleCreateNestedManyWithoutStoresInput";
import { StoreLocationCreateNestedManyWithoutStoresInput } from "./StoreLocationCreateNestedManyWithoutStoresInput";
import { StoreTypeWhereUniqueInput } from "../../storeType/base/StoreTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class StoreCreateInput {
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
  addressLine1?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  allowSale!: boolean;

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
  cellPhoneNumber?: string | null;

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
  code?: string | null;

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
  fax?: string | null;

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
  homePhoneNumber?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  normalizedName!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => ProductionOrderCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  productionOrders?: ProductionOrderCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => PurchaseReturnCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => PurchaseCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => PurchaseCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  purchases?: PurchaseCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => SaleOrderCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => SaleOrderCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  saleOrders?: SaleOrderCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => SaleReturnCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  saleReturns?: SaleReturnCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => SaleCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => SaleCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => SaleCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  sales?: SaleCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => StoreLocationCreateNestedManyWithoutStoresInput,
  })
  @ValidateNested()
  @Type(() => StoreLocationCreateNestedManyWithoutStoresInput)
  @IsOptional()
  @Field(() => StoreLocationCreateNestedManyWithoutStoresInput, {
    nullable: true,
  })
  storeLocations?: StoreLocationCreateNestedManyWithoutStoresInput;

  @ApiProperty({
    required: false,
    type: () => StoreTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreTypeWhereUniqueInput, {
    nullable: true,
  })
  storeTypId?: StoreTypeWhereUniqueInput | null;

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
  street?: string | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenantId?: TenantWhereUniqueInput | null;
}

export { StoreCreateInput as StoreCreateInput };
