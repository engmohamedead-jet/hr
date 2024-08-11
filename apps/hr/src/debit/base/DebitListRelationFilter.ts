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
import { DebitWhereInput } from "./DebitWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DebitListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DebitWhereInput,
  })
  @ValidateNested()
  @Type(() => DebitWhereInput)
  @IsOptional()
  @Field(() => DebitWhereInput, {
    nullable: true,
  })
  every?: DebitWhereInput;

  @ApiProperty({
    required: false,
    type: () => DebitWhereInput,
  })
  @ValidateNested()
  @Type(() => DebitWhereInput)
  @IsOptional()
  @Field(() => DebitWhereInput, {
    nullable: true,
  })
  some?: DebitWhereInput;

  @ApiProperty({
    required: false,
    type: () => DebitWhereInput,
  })
  @ValidateNested()
  @Type(() => DebitWhereInput)
  @IsOptional()
  @Field(() => DebitWhereInput, {
    nullable: true,
  })
  none?: DebitWhereInput;
}
export { DebitListRelationFilter as DebitListRelationFilter };