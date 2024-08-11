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
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";
import {
  ValidateNested,
  IsEnum,
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumMaintenanceVisitElevatorStatusId } from "./EnumMaintenanceVisitElevatorStatusId";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class MaintenanceVisitCreateInput {
  @ApiProperty({
    required: true,
    type: () => ElevatorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ElevatorWhereUniqueInput)
  @Field(() => ElevatorWhereUniqueInput)
  elevator!: ElevatorWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumMaintenanceVisitElevatorStatusId,
  })
  @IsEnum(EnumMaintenanceVisitElevatorStatusId)
  @Field(() => EnumMaintenanceVisitElevatorStatusId)
  elevatorStatusId!: "Option1";

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
  spareParts?: string | null;

  @ApiProperty({
    required: true,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @Field(() => StoreWhereUniqueInput)
  store!: StoreWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  visitDate!: Date;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  visitDocumentImage?: InputJsonValue;
}

export { MaintenanceVisitCreateInput as MaintenanceVisitCreateInput };
