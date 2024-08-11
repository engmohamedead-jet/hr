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
import { InstallmentSaleFeeWhereInput } from "./InstallmentSaleFeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InstallmentSaleFeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InstallmentSaleFeeWhereInput,
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFeeWhereInput)
  @IsOptional()
  @Field(() => InstallmentSaleFeeWhereInput, {
    nullable: true,
  })
  every?: InstallmentSaleFeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => InstallmentSaleFeeWhereInput,
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFeeWhereInput)
  @IsOptional()
  @Field(() => InstallmentSaleFeeWhereInput, {
    nullable: true,
  })
  some?: InstallmentSaleFeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => InstallmentSaleFeeWhereInput,
  })
  @ValidateNested()
  @Type(() => InstallmentSaleFeeWhereInput)
  @IsOptional()
  @Field(() => InstallmentSaleFeeWhereInput, {
    nullable: true,
  })
  none?: InstallmentSaleFeeWhereInput;
}
export { InstallmentSaleFeeListRelationFilter as InstallmentSaleFeeListRelationFilter };