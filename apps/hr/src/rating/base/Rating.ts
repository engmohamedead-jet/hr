/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsDate,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";

@ObjectType()
class Rating {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Customer],
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  customers?: Array<Customer>;

  @ApiProperty({
    required: false,
    type: () => [Customer],
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  guarantorRatingI?: Array<Customer>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  note!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Rating as Rating };
