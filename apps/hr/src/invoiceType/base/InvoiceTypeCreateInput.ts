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
import { PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput } from "./PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput";
import { Type } from "class-transformer";
import { PurchaseCreateNestedManyWithoutInvoiceTypesInput } from "./PurchaseCreateNestedManyWithoutInvoiceTypesInput";
import { SaleOrderCreateNestedManyWithoutInvoiceTypesInput } from "./SaleOrderCreateNestedManyWithoutInvoiceTypesInput";
import { SaleReturnCreateNestedManyWithoutInvoiceTypesInput } from "./SaleReturnCreateNestedManyWithoutInvoiceTypesInput";
import { SaleCreateNestedManyWithoutInvoiceTypesInput } from "./SaleCreateNestedManyWithoutInvoiceTypesInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class InvoiceTypeCreateInput {
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
  description?: string | null;

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
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseCreateNestedManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => PurchaseCreateNestedManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => PurchaseCreateNestedManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  purchases?: PurchaseCreateNestedManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => SaleOrderCreateNestedManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => SaleOrderCreateNestedManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => SaleOrderCreateNestedManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  saleOrders?: SaleOrderCreateNestedManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => SaleReturnCreateNestedManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => SaleReturnCreateNestedManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => SaleReturnCreateNestedManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  saleReturns?: SaleReturnCreateNestedManyWithoutInvoiceTypesInput;

  @ApiProperty({
    required: false,
    type: () => SaleCreateNestedManyWithoutInvoiceTypesInput,
  })
  @ValidateNested()
  @Type(() => SaleCreateNestedManyWithoutInvoiceTypesInput)
  @IsOptional()
  @Field(() => SaleCreateNestedManyWithoutInvoiceTypesInput, {
    nullable: true,
  })
  sales?: SaleCreateNestedManyWithoutInvoiceTypesInput;

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

export { InvoiceTypeCreateInput as InvoiceTypeCreateInput };
