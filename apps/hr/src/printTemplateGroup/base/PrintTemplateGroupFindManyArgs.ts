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
import { PrintTemplateGroupWhereInput } from "./PrintTemplateGroupWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PrintTemplateGroupOrderByInput } from "./PrintTemplateGroupOrderByInput";

@ArgsType()
class PrintTemplateGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PrintTemplateGroupWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PrintTemplateGroupWhereInput, { nullable: true })
  @Type(() => PrintTemplateGroupWhereInput)
  where?: PrintTemplateGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [PrintTemplateGroupOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PrintTemplateGroupOrderByInput], { nullable: true })
  @Type(() => PrintTemplateGroupOrderByInput)
  orderBy?: Array<PrintTemplateGroupOrderByInput>;

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

export { PrintTemplateGroupFindManyArgs as PrintTemplateGroupFindManyArgs };
