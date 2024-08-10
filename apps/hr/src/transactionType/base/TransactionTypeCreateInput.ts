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
import { AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput } from "./AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TransactionTypeCreateInput {
  @ApiProperty({
    required: false,
    type: () =>
      AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput,
  })
  @ValidateNested()
  @Type(
    () => AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput
  )
  @IsOptional()
  @Field(
    () => AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput,
    {
      nullable: true,
    }
  )
  accountTransactionDetails?: AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  code!: string;

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
}

export { TransactionTypeCreateInput as TransactionTypeCreateInput };
