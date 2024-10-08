/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InstallationContractWhereUniqueInput } from "../../installationContract/base/InstallationContractWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InstallationContractUpdateManyWithoutCustomerElevatorsInput {
  @Field(() => [InstallationContractWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InstallationContractWhereUniqueInput],
  })
  connect?: Array<InstallationContractWhereUniqueInput>;

  @Field(() => [InstallationContractWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InstallationContractWhereUniqueInput],
  })
  disconnect?: Array<InstallationContractWhereUniqueInput>;

  @Field(() => [InstallationContractWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InstallationContractWhereUniqueInput],
  })
  set?: Array<InstallationContractWhereUniqueInput>;
}

export { InstallationContractUpdateManyWithoutCustomerElevatorsInput as InstallationContractUpdateManyWithoutCustomerElevatorsInput };
