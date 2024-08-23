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
import { LeaveRequestTypeWhereInput } from "./LeaveRequestTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LeaveRequestTypeOrderByInput } from "./LeaveRequestTypeOrderByInput";

@ArgsType()
class LeaveRequestTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LeaveRequestTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LeaveRequestTypeWhereInput, { nullable: true })
  @Type(() => LeaveRequestTypeWhereInput)
  where?: LeaveRequestTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [LeaveRequestTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LeaveRequestTypeOrderByInput], { nullable: true })
  @Type(() => LeaveRequestTypeOrderByInput)
  orderBy?: Array<LeaveRequestTypeOrderByInput>;

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

export { LeaveRequestTypeFindManyArgs as LeaveRequestTypeFindManyArgs };
