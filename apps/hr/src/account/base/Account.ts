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
import { ProductGroup } from "../../productGroup/base/ProductGroup";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { InstallmentSaleFee } from "../../installmentSaleFee/base/InstallmentSaleFee";
import { SalePerson } from "../../salePerson/base/SalePerson";
import { Tenant } from "../../tenant/base/Tenant";

@ObjectType()
class Account {
  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  SaleReturnAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  accountNumber!: string;

  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  aleAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  costOfGoodsSoldAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [InstallmentSaleFee],
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFee)
  @IsOptional()
  installmentSaleFees?: Array<InstallmentSaleFee>;

  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  inventoryAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive!: boolean | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isMasterAccount!: boolean;

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
  note!: string | null;

  @ApiProperty({
    required: false,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  parentAccountId?: Account | null;

  @ApiProperty({
    required: false,
    type: () => [Account],
  })
  @ValidateNested()
  @Type(() => Account)
  @IsOptional()
  parentAccounts?: Array<Account>;

  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  purchaseAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  purchaseDiscountAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  purchaseReturnAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: false,
    type: () => [ProductGroup],
  })
  @ValidateNested()
  @Type(() => ProductGroup)
  @IsOptional()
  saleDiscountAccountProductGroups?: Array<ProductGroup>;

  @ApiProperty({
    required: false,
    type: () => [SalePerson],
  })
  @ValidateNested()
  @Type(() => SalePerson)
  @IsOptional()
  salePeople?: Array<SalePerson>;

  @ApiProperty({
    required: false,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  @IsOptional()
  tenantId?: Tenant | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Account as Account };
