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
import { ContractStatus } from "./ContractStatus";
import { ContractStatusCountArgs } from "./ContractStatusCountArgs";
import { ContractStatusFindManyArgs } from "./ContractStatusFindManyArgs";
import { ContractStatusFindUniqueArgs } from "./ContractStatusFindUniqueArgs";
import { CreateContractStatusArgs } from "./CreateContractStatusArgs";
import { UpdateContractStatusArgs } from "./UpdateContractStatusArgs";
import { DeleteContractStatusArgs } from "./DeleteContractStatusArgs";
import { InstallationContract } from "../../installationContract/base/InstallationContract";
import { ContractStatusService } from "../contractStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContractStatus)
export class ContractStatusResolverBase {
  constructor(
    protected readonly service: ContractStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "read",
    possession: "any",
  })
  async _contractStatusesMeta(
    @graphql.Args() args: ContractStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ContractStatus])
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "read",
    possession: "any",
  })
  async contractStatuses(
    @graphql.Args() args: ContractStatusFindManyArgs
  ): Promise<ContractStatus[]> {
    return this.service.contractStatuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ContractStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "read",
    possession: "own",
  })
  async contractStatus(
    @graphql.Args() args: ContractStatusFindUniqueArgs
  ): Promise<ContractStatus | null> {
    const result = await this.service.contractStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ContractStatus)
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "create",
    possession: "any",
  })
  async createContractStatus(
    @graphql.Args() args: CreateContractStatusArgs
  ): Promise<ContractStatus> {
    return await this.service.createContractStatus({
      ...args,
      data: {
        ...args.data,

        installationContracts: args.data.installationContracts
          ? {
              connect: args.data.installationContracts,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ContractStatus)
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "update",
    possession: "any",
  })
  async updateContractStatus(
    @graphql.Args() args: UpdateContractStatusArgs
  ): Promise<ContractStatus | null> {
    try {
      return await this.service.updateContractStatus({
        ...args,
        data: {
          ...args.data,

          installationContracts: args.data.installationContracts
            ? {
                connect: args.data.installationContracts,
              }
            : undefined,
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

  @graphql.Mutation(() => ContractStatus)
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "delete",
    possession: "any",
  })
  async deleteContractStatus(
    @graphql.Args() args: DeleteContractStatusArgs
  ): Promise<ContractStatus | null> {
    try {
      return await this.service.deleteContractStatus(args);
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
  @graphql.ResolveField(() => InstallationContract, {
    nullable: true,
    name: "installationContracts",
  })
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "read",
    possession: "any",
  })
  async getInstallationContracts(
    @graphql.Parent() parent: ContractStatus
  ): Promise<InstallationContract | null> {
    const result = await this.service.getInstallationContracts(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}