/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WorkCenterAlternativeWhereUniqueInput } from "../../workCenterAlternative/base/WorkCenterAlternativeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WorkCenterAlternativeCreateNestedManyWithoutWorkCentersInput {
  @Field(() => [WorkCenterAlternativeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WorkCenterAlternativeWhereUniqueInput],
  })
  connect?: Array<WorkCenterAlternativeWhereUniqueInput>;
}

export { WorkCenterAlternativeCreateNestedManyWithoutWorkCentersInput as WorkCenterAlternativeCreateNestedManyWithoutWorkCentersInput };
