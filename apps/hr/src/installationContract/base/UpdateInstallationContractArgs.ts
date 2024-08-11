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
import { InstallationContractWhereUniqueInput } from "./InstallationContractWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InstallationContractUpdateInput } from "./InstallationContractUpdateInput";

@ArgsType()
class UpdateInstallationContractArgs {
  @ApiProperty({
    required: true,
    type: () => InstallationContractWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstallationContractWhereUniqueInput)
  @Field(() => InstallationContractWhereUniqueInput, { nullable: false })
  where!: InstallationContractWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InstallationContractUpdateInput,
  })
  @ValidateNested()
  @Type(() => InstallationContractUpdateInput)
  @Field(() => InstallationContractUpdateInput, { nullable: false })
  data!: InstallationContractUpdateInput;
}

export { UpdateInstallationContractArgs as UpdateInstallationContractArgs };