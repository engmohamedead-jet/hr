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
import { WorkOrderRouting } from "./WorkOrderRouting";
import { WorkOrderRoutingCountArgs } from "./WorkOrderRoutingCountArgs";
import { WorkOrderRoutingFindManyArgs } from "./WorkOrderRoutingFindManyArgs";
import { WorkOrderRoutingFindUniqueArgs } from "./WorkOrderRoutingFindUniqueArgs";
import { CreateWorkOrderRoutingArgs } from "./CreateWorkOrderRoutingArgs";
import { UpdateWorkOrderRoutingArgs } from "./UpdateWorkOrderRoutingArgs";
import { DeleteWorkOrderRoutingArgs } from "./DeleteWorkOrderRoutingArgs";
import { Tenant } from "../../tenant/base/Tenant";
import { WorkOrder } from "../../workOrder/base/WorkOrder";
import { WorkOrderRoutingService } from "../workOrderRouting.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkOrderRouting)
export class WorkOrderRoutingResolverBase {
  constructor(
    protected readonly service: WorkOrderRoutingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkOrderRouting",
    action: "read",
    possession: "any",
  })
  async _workOrderRoutingsMeta(
    @graphql.Args() args: WorkOrderRoutingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkOrderRouting])
  @nestAccessControl.UseRoles({
    resource: "WorkOrderRouting",
    action: "read",
    possession: "any",
  })
  async workOrderRoutings(
    @graphql.Args() args: WorkOrderRoutingFindManyArgs
  ): Promise<WorkOrderRouting[]> {
    return this.service.workOrderRoutings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkOrderRouting, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkOrderRouting",
    action: "read",
    possession: "own",
  })
  async workOrderRouting(
    @graphql.Args() args: WorkOrderRoutingFindUniqueArgs
  ): Promise<WorkOrderRouting | null> {
    const result = await this.service.workOrderRouting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkOrderRouting)
  @nestAccessControl.UseRoles({
    resource: "WorkOrderRouting",
    action: "create",
    possession: "any",
  })
  async createWorkOrderRouting(
    @graphql.Args() args: CreateWorkOrderRoutingArgs
  ): Promise<WorkOrderRouting> {
    return await this.service.createWorkOrderRouting({
      ...args,
      data: {
        ...args.data,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,

        workOrderId: {
          connect: args.data.workOrderId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkOrderRouting)
  @nestAccessControl.UseRoles({
    resource: "WorkOrderRouting",
    action: "update",
    possession: "any",
  })
  async updateWorkOrderRouting(
    @graphql.Args() args: UpdateWorkOrderRoutingArgs
  ): Promise<WorkOrderRouting | null> {
    try {
      return await this.service.updateWorkOrderRouting({
        ...args,
        data: {
          ...args.data,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
              }
            : undefined,

          workOrderId: {
            connect: args.data.workOrderId,
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

  @graphql.Mutation(() => WorkOrderRouting)
  @nestAccessControl.UseRoles({
    resource: "WorkOrderRouting",
    action: "delete",
    possession: "any",
  })
  async deleteWorkOrderRouting(
    @graphql.Args() args: DeleteWorkOrderRoutingArgs
  ): Promise<WorkOrderRouting | null> {
    try {
      return await this.service.deleteWorkOrderRouting(args);
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
    @graphql.Parent() parent: WorkOrderRouting
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => WorkOrder, {
    nullable: true,
    name: "workOrderId",
  })
  @nestAccessControl.UseRoles({
    resource: "WorkOrder",
    action: "read",
    possession: "any",
  })
  async getWorkOrderId(
    @graphql.Parent() parent: WorkOrderRouting
  ): Promise<WorkOrder | null> {
    const result = await this.service.getWorkOrderId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}