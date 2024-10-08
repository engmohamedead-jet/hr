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
  IsOptional,
  IsDate,
  IsInt,
  Max,
  ValidateNested,
  IsBoolean,
} from "class-validator";

import { Type } from "class-transformer";
import { Period } from "../../period/base/Period";
import { InstallmentSaleFee } from "../../installmentSaleFee/base/InstallmentSaleFee";
import { PurchaseReturn } from "../../purchaseReturn/base/PurchaseReturn";
import { Purchase } from "../../purchase/base/Purchase";
import { SaleReturn } from "../../saleReturn/base/SaleReturn";
import { Sale } from "../../sale/base/Sale";
import { Tenant } from "../../tenant/base/Tenant";

@ObjectType()
class PaymentTerm {
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
  code!: string | null;

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
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  dueDays!: number;

  @ApiProperty({
    required: false,
    type: () => Period,
  })
  @ValidateNested()
  @Type(() => Period)
  @IsOptional()
  duePeriodId?: Period | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  gracePeriod!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => InstallmentSaleFee,
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFee)
  @IsOptional()
  installmentSaleFeeId?: InstallmentSaleFee | null;

  @ApiProperty({
    required: false,
    type: () => Period,
  })
  @ValidateNested()
  @Type(() => Period)
  @IsOptional()
  installmentSaleFeePostingPeriod?: Period | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDefault!: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDueOnDate!: boolean | null;

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
    type: () => [PurchaseReturn],
  })
  @ValidateNested()
  @Type(() => PurchaseReturn)
  @IsOptional()
  purchaseReturns?: Array<PurchaseReturn>;

  @ApiProperty({
    required: false,
    type: () => [Purchase],
  })
  @ValidateNested()
  @Type(() => Purchase)
  @IsOptional()
  purchases?: Array<Purchase>;

  @ApiProperty({
    required: false,
    type: () => [SaleReturn],
  })
  @ValidateNested()
  @Type(() => SaleReturn)
  @IsOptional()
  saleReturns?: Array<SaleReturn>;

  @ApiProperty({
    required: false,
    type: () => [Sale],
  })
  @ValidateNested()
  @Type(() => Sale)
  @IsOptional()
  sales?: Array<Sale>;

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

export { PaymentTerm as PaymentTerm };
