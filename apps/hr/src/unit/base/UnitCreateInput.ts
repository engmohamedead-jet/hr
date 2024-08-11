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
import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
  IsBoolean,
} from "class-validator";
import { CompoundUnitWhereUniqueInput } from "../../compoundUnit/base/CompoundUnitWhereUniqueInput";
import { Type } from "class-transformer";
import { CompoundUnitCreateNestedManyWithoutUnitsInput } from "./CompoundUnitCreateNestedManyWithoutUnitsInput";

@InputType()
class UnitCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: false,
    type: () => CompoundUnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompoundUnitWhereUniqueInput)
  @IsOptional()
  @Field(() => CompoundUnitWhereUniqueInput, {
    nullable: true,
  })
  compareUnit?: CompoundUnitWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CompoundUnitCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => CompoundUnitCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => CompoundUnitCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  compoundUnits?: CompoundUnitCreateNestedManyWithoutUnitsInput;

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
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isCompound?: boolean | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isDefault!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  normalizedName!: string;

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
}

export { UnitCreateInput as UnitCreateInput };
