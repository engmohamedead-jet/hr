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
import { SettingGroupWhereInput } from "./SettingGroupWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SettingGroupOrderByInput } from "./SettingGroupOrderByInput";

@ArgsType()
class SettingGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SettingGroupWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SettingGroupWhereInput, { nullable: true })
  @Type(() => SettingGroupWhereInput)
  where?: SettingGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [SettingGroupOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SettingGroupOrderByInput], { nullable: true })
  @Type(() => SettingGroupOrderByInput)
  orderBy?: Array<SettingGroupOrderByInput>;

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

export { SettingGroupFindManyArgs as SettingGroupFindManyArgs };
