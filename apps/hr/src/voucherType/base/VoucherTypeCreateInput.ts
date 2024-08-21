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
import { PaymentVoucherCreateNestedManyWithoutVoucherTypesInput } from "./PaymentVoucherCreateNestedManyWithoutVoucherTypesInput";
import { Type } from "class-transformer";
import { ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput } from "./ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class VoucherTypeCreateInput {
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
    type: () => PaymentVoucherCreateNestedManyWithoutVoucherTypesInput,
  })
  @ValidateNested()
  @Type(() => PaymentVoucherCreateNestedManyWithoutVoucherTypesInput)
  @IsOptional()
  @Field(() => PaymentVoucherCreateNestedManyWithoutVoucherTypesInput, {
    nullable: true,
  })
  paymentVouchers?: PaymentVoucherCreateNestedManyWithoutVoucherTypesInput;

  @ApiProperty({
    required: false,
    type: () => ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput,
  })
  @ValidateNested()
  @Type(() => ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput)
  @IsOptional()
  @Field(() => ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput, {
    nullable: true,
  })
  receiptVouchers?: ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput;

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

export { VoucherTypeCreateInput as VoucherTypeCreateInput };
