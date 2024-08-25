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
import { WorkOrderWhereUniqueInput } from "../../workOrder/base/WorkOrderWhereUniqueInput";
import {
  ValidateNested,
  IsBoolean,
  IsString,
  MaxLength,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class WorkOrderDependencyCreateInput {
  @ApiProperty({
    required: true,
    type: () => WorkOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderWhereUniqueInput)
  @Field(() => WorkOrderWhereUniqueInput)
  blockedByWorkOrderId!: WorkOrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenantId?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WorkOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkOrderWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkOrderWhereUniqueInput, {
    nullable: true,
  })
  workOrderId?: WorkOrderWhereUniqueInput | null;
}

export { WorkOrderDependencyCreateInput as WorkOrderDependencyCreateInput };
