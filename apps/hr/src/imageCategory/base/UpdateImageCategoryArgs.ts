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
import { ImageCategoryWhereUniqueInput } from "./ImageCategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ImageCategoryUpdateInput } from "./ImageCategoryUpdateInput";

@ArgsType()
class UpdateImageCategoryArgs {
  @ApiProperty({
    required: true,
    type: () => ImageCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageCategoryWhereUniqueInput)
  @Field(() => ImageCategoryWhereUniqueInput, { nullable: false })
  where!: ImageCategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ImageCategoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => ImageCategoryUpdateInput)
  @Field(() => ImageCategoryUpdateInput, { nullable: false })
  data!: ImageCategoryUpdateInput;
}

export { UpdateImageCategoryArgs as UpdateImageCategoryArgs };
