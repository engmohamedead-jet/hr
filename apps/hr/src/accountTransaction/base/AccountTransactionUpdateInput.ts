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
import { AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput } from "./AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { CostCenterWhereUniqueInput } from "../../costCenter/base/CostCenterWhereUniqueInput";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";

@InputType()
class AccountTransactionUpdateInput {
  @ApiProperty({
    required: false,
    type: () =>
      AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput,
  })
  @ValidateNested()
  @Type(() => AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput)
  @IsOptional()
  @Field(
    () => AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput,
    {
      nullable: true,
    }
  )
  accountTransactionDetails?: AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput;

  @ApiProperty({
    required: false,
    type: () => CostCenterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CostCenterWhereUniqueInput)
  @IsOptional()
  @Field(() => CostCenterWhereUniqueInput, {
    nullable: true,
  })
  costCenter?: CostCenterWhereUniqueInput | null;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  referenceNumber?: string | null;

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
  statementReference?: string | null;

  @ApiProperty({
    required: false,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreWhereUniqueInput, {
    nullable: true,
  })
  store?: StoreWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  transactionDate?: Date | null;
}

export { AccountTransactionUpdateInput as AccountTransactionUpdateInput };
