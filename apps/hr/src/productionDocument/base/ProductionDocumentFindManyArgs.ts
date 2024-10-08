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
import { ProductionDocumentWhereInput } from "./ProductionDocumentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductionDocumentOrderByInput } from "./ProductionDocumentOrderByInput";

@ArgsType()
class ProductionDocumentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductionDocumentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductionDocumentWhereInput, { nullable: true })
  @Type(() => ProductionDocumentWhereInput)
  where?: ProductionDocumentWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductionDocumentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductionDocumentOrderByInput], { nullable: true })
  @Type(() => ProductionDocumentOrderByInput)
  orderBy?: Array<ProductionDocumentOrderByInput>;

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

export { ProductionDocumentFindManyArgs as ProductionDocumentFindManyArgs };
