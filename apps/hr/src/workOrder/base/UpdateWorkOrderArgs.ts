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
import { WorkOrderWhereUniqueInput } from "./WorkOrderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WorkOrderUpdateInput } from "./WorkOrderUpdateInput";

@ArgsType()
class UpdateWorkOrderArgs {
  @ApiProperty({
    required: true,
    type: () => WorkOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderWhereUniqueInput)
  @Field(() => WorkOrderWhereUniqueInput, { nullable: false })
  where!: WorkOrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WorkOrderUpdateInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderUpdateInput)
  @Field(() => WorkOrderUpdateInput, { nullable: false })
  data!: WorkOrderUpdateInput;
}

export { UpdateWorkOrderArgs as UpdateWorkOrderArgs };
