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
import { WorkCenterProductivityLoss } from "./WorkCenterProductivityLoss";
import { WorkCenterProductivityLossCountArgs } from "./WorkCenterProductivityLossCountArgs";
import { WorkCenterProductivityLossFindManyArgs } from "./WorkCenterProductivityLossFindManyArgs";
import { WorkCenterProductivityLossFindUniqueArgs } from "./WorkCenterProductivityLossFindUniqueArgs";
import { CreateWorkCenterProductivityLossArgs } from "./CreateWorkCenterProductivityLossArgs";
import { UpdateWorkCenterProductivityLossArgs } from "./UpdateWorkCenterProductivityLossArgs";
import { DeleteWorkCenterProductivityLossArgs } from "./DeleteWorkCenterProductivityLossArgs";
import { Tenant } from "../../tenant/base/Tenant";
import { WorkCenter } from "../../workCenter/base/WorkCenter";
import { WorkCenterProductivityLossType } from "../../workCenterProductivityLossType/base/WorkCenterProductivityLossType";
import { WorkCenterProductivityLossService } from "../workCenterProductivityLoss.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterProductivityLoss)
export class WorkCenterProductivityLossResolverBase {
  constructor(
    protected readonly service: WorkCenterProductivityLossService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivityLoss",
    action: "read",
    possession: "any",
  })
  async _workCenterProductivityLossesMeta(
    @graphql.Args() args: WorkCenterProductivityLossCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkCenterProductivityLoss])
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivityLoss",
    action: "read",
    possession: "any",
  })
  async workCenterProductivityLosses(
    @graphql.Args() args: WorkCenterProductivityLossFindManyArgs
  ): Promise<WorkCenterProductivityLoss[]> {
    return this.service.workCenterProductivityLosses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkCenterProductivityLoss, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivityLoss",
    action: "read",
    possession: "own",
  })
  async workCenterProductivityLoss(
    @graphql.Args() args: WorkCenterProductivityLossFindUniqueArgs
  ): Promise<WorkCenterProductivityLoss | null> {
    const result = await this.service.workCenterProductivityLoss(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterProductivityLoss)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivityLoss",
    action: "create",
    possession: "any",
  })
  async createWorkCenterProductivityLoss(
    @graphql.Args() args: CreateWorkCenterProductivityLossArgs
  ): Promise<WorkCenterProductivityLoss> {
    return await this.service.createWorkCenterProductivityLoss({
      ...args,
      data: {
        ...args.data,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,

        workCenterId: args.data.workCenterId
          ? {
              connect: args.data.workCenterId,
            }
          : undefined,

        workCenterProductivityLossTypeI: {
          connect: args.data.workCenterProductivityLossTypeI,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterProductivityLoss)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivityLoss",
    action: "update",
    possession: "any",
  })
  async updateWorkCenterProductivityLoss(
    @graphql.Args() args: UpdateWorkCenterProductivityLossArgs
  ): Promise<WorkCenterProductivityLoss | null> {
    try {
      return await this.service.updateWorkCenterProductivityLoss({
        ...args,
        data: {
          ...args.data,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
              }
            : undefined,

          workCenterId: args.data.workCenterId
            ? {
                connect: args.data.workCenterId,
              }
            : undefined,

          workCenterProductivityLossTypeI: {
            connect: args.data.workCenterProductivityLossTypeI,
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

  @graphql.Mutation(() => WorkCenterProductivityLoss)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivityLoss",
    action: "delete",
    possession: "any",
  })
  async deleteWorkCenterProductivityLoss(
    @graphql.Args() args: DeleteWorkCenterProductivityLossArgs
  ): Promise<WorkCenterProductivityLoss | null> {
    try {
      return await this.service.deleteWorkCenterProductivityLoss(args);
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
  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenantId",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenantId(
    @graphql.Parent() parent: WorkCenterProductivityLoss
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => WorkCenter, {
    nullable: true,
    name: "workCenterId",
  })
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "read",
    possession: "any",
  })
  async getWorkCenterId(
    @graphql.Parent() parent: WorkCenterProductivityLoss
  ): Promise<WorkCenter | null> {
    const result = await this.service.getWorkCenterId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => WorkCenterProductivityLossType, {
    nullable: true,
    name: "workCenterProductivityLossTypeI",
  })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivityLossType",
    action: "read",
    possession: "any",
  })
  async getWorkCenterProductivityLossTypeI(
    @graphql.Parent() parent: WorkCenterProductivityLoss
  ): Promise<WorkCenterProductivityLossType | null> {
    const result = await this.service.getWorkCenterProductivityLossTypeI(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }
}
