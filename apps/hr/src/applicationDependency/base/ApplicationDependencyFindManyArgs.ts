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
import { ApplicationDependencyWhereInput } from "./ApplicationDependencyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApplicationDependencyOrderByInput } from "./ApplicationDependencyOrderByInput";

@ArgsType()
class ApplicationDependencyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ApplicationDependencyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ApplicationDependencyWhereInput, { nullable: true })
  @Type(() => ApplicationDependencyWhereInput)
  where?: ApplicationDependencyWhereInput;

  @ApiProperty({
    required: false,
    type: [ApplicationDependencyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ApplicationDependencyOrderByInput], { nullable: true })
  @Type(() => ApplicationDependencyOrderByInput)
  orderBy?: Array<ApplicationDependencyOrderByInput>;

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

export { ApplicationDependencyFindManyArgs as ApplicationDependencyFindManyArgs };