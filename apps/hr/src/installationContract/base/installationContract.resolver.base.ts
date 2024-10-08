/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { InstallationContract } from "./InstallationContract";
import { InstallationContractCountArgs } from "./InstallationContractCountArgs";
import { InstallationContractFindManyArgs } from "./InstallationContractFindManyArgs";
import { InstallationContractFindUniqueArgs } from "./InstallationContractFindUniqueArgs";
import { CreateInstallationContractArgs } from "./CreateInstallationContractArgs";
import { UpdateInstallationContractArgs } from "./UpdateInstallationContractArgs";
import { DeleteInstallationContractArgs } from "./DeleteInstallationContractArgs";
import { ContractStatus } from "../../contractStatus/base/ContractStatus";
import { CustomerElevator } from "../../customerElevator/base/CustomerElevator";
import { Elevator } from "../../elevator/base/Elevator";
import { InstallationContractService } from "../installationContract.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InstallationContract)
export class InstallationContractResolverBase {
  constructor(
    protected readonly service: InstallationContractService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "read",
    possession: "any",
  })
  async _installationContractsMeta(
    @graphql.Args() args: InstallationContractCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InstallationContract])
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "read",
    possession: "any",
  })
  async installationContracts(
    @graphql.Args() args: InstallationContractFindManyArgs
  ): Promise<InstallationContract[]> {
    return this.service.installationContracts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InstallationContract, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "read",
    possession: "own",
  })
  async installationContract(
    @graphql.Args() args: InstallationContractFindUniqueArgs
  ): Promise<InstallationContract | null> {
    const result = await this.service.installationContract(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InstallationContract)
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "create",
    possession: "any",
  })
  async createInstallationContract(
    @graphql.Args() args: CreateInstallationContractArgs
  ): Promise<InstallationContract> {
    return await this.service.createInstallationContract({
      ...args,
      data: {
        ...args.data,

        contractStatusId: {
          connect: args.data.contractStatusId,
        },

        customerElevatorId: {
          connect: args.data.customerElevatorId,
        },

        elevatorId: {
          connect: args.data.elevatorId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InstallationContract)
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "update",
    possession: "any",
  })
  async updateInstallationContract(
    @graphql.Args() args: UpdateInstallationContractArgs
  ): Promise<InstallationContract | null> {
    try {
      return await this.service.updateInstallationContract({
        ...args,
        data: {
          ...args.data,

          contractStatusId: {
            connect: args.data.contractStatusId,
          },

          customerElevatorId: {
            connect: args.data.customerElevatorId,
          },

          elevatorId: {
            connect: args.data.elevatorId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => InstallationContract)
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "delete",
    possession: "any",
  })
  async deleteInstallationContract(
    @graphql.Args() args: DeleteInstallationContractArgs
  ): Promise<InstallationContract | null> {
    try {
      return await this.service.deleteInstallationContract(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ContractStatus, {
    nullable: true,
    name: "contractStatusId",
  })
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "read",
    possession: "any",
  })
  async getContractStatusId(
    @graphql.Parent() parent: InstallationContract
  ): Promise<ContractStatus | null> {
    const result = await this.service.getContractStatusId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CustomerElevator, {
    nullable: true,
    name: "customerElevatorId",
  })
  @nestAccessControl.UseRoles({
    resource: "CustomerElevator",
    action: "read",
    possession: "any",
  })
  async getCustomerElevatorId(
    @graphql.Parent() parent: InstallationContract
  ): Promise<CustomerElevator | null> {
    const result = await this.service.getCustomerElevatorId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Elevator, {
    nullable: true,
    name: "elevatorId",
  })
  @nestAccessControl.UseRoles({
    resource: "Elevator",
    action: "read",
    possession: "any",
  })
  async getElevatorId(
    @graphql.Parent() parent: InstallationContract
  ): Promise<Elevator | null> {
    const result = await this.service.getElevatorId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
