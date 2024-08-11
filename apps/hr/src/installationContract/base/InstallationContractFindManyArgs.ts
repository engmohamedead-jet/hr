/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InstallationContractWhereInput } from "./InstallationContractWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InstallationContractOrderByInput } from "./InstallationContractOrderByInput";

@ArgsType()
class InstallationContractFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InstallationContractWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InstallationContractWhereInput, { nullable: true })
  @Type(() => InstallationContractWhereInput)
  where?: InstallationContractWhereInput;

  @ApiProperty({
    required: false,
    type: [InstallationContractOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InstallationContractOrderByInput], { nullable: true })
  @Type(() => InstallationContractOrderByInput)
  orderBy?: Array<InstallationContractOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InstallationContractFindManyArgs as InstallationContractFindManyArgs };
