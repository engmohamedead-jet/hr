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
import { StoreLocationWhereInput } from "./StoreLocationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StoreLocationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StoreLocationWhereInput,
  })
  @ValidateNested()
  @Type(() => StoreLocationWhereInput)
  @IsOptional()
  @Field(() => StoreLocationWhereInput, {
    nullable: true,
  })
  every?: StoreLocationWhereInput;

  @ApiProperty({
    required: false,
    type: () => StoreLocationWhereInput,
  })
  @ValidateNested()
  @Type(() => StoreLocationWhereInput)
  @IsOptional()
  @Field(() => StoreLocationWhereInput, {
    nullable: true,
  })
  some?: StoreLocationWhereInput;

  @ApiProperty({
    required: false,
    type: () => StoreLocationWhereInput,
  })
  @ValidateNested()
  @Type(() => StoreLocationWhereInput)
  @IsOptional()
  @Field(() => StoreLocationWhereInput, {
    nullable: true,
  })
  none?: StoreLocationWhereInput;
}
export { StoreLocationListRelationFilter as StoreLocationListRelationFilter };
