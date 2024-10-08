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
import { DoorTypeWhereInput } from "./DoorTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DoorTypeOrderByInput } from "./DoorTypeOrderByInput";

@ArgsType()
class DoorTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DoorTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DoorTypeWhereInput, { nullable: true })
  @Type(() => DoorTypeWhereInput)
  where?: DoorTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [DoorTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DoorTypeOrderByInput], { nullable: true })
  @Type(() => DoorTypeOrderByInput)
  orderBy?: Array<DoorTypeOrderByInput>;

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

export { DoorTypeFindManyArgs as DoorTypeFindManyArgs };
