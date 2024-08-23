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
import { TenantUserWhereInput } from "./TenantUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TenantUserOrderByInput } from "./TenantUserOrderByInput";

@ArgsType()
class TenantUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TenantUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TenantUserWhereInput, { nullable: true })
  @Type(() => TenantUserWhereInput)
  where?: TenantUserWhereInput;

  @ApiProperty({
    required: false,
    type: [TenantUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TenantUserOrderByInput], { nullable: true })
  @Type(() => TenantUserOrderByInput)
  orderBy?: Array<TenantUserOrderByInput>;

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

export { TenantUserFindManyArgs as TenantUserFindManyArgs };
