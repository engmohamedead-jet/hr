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
  ValidateNested,
} from "class-validator";
import { MaintenanceContractCreateNestedManyWithoutContractPeriodsInput } from "./MaintenanceContractCreateNestedManyWithoutContractPeriodsInput";
import { Type } from "class-transformer";

@InputType()
class ContractPeriodCreateInput {
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
  Description?: string | null;

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
    type: () => MaintenanceContractCreateNestedManyWithoutContractPeriodsInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceContractCreateNestedManyWithoutContractPeriodsInput)
  @IsOptional()
  @Field(() => MaintenanceContractCreateNestedManyWithoutContractPeriodsInput, {
    nullable: true,
  })
  maintenanceContracts?: MaintenanceContractCreateNestedManyWithoutContractPeriodsInput;

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
}

export { ContractPeriodCreateInput as ContractPeriodCreateInput };
