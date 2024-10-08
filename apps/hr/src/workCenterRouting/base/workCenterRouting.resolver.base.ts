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
import { WorkCenterRouting } from "./WorkCenterRouting";
import { WorkCenterRoutingCountArgs } from "./WorkCenterRoutingCountArgs";
import { WorkCenterRoutingFindManyArgs } from "./WorkCenterRoutingFindManyArgs";
import { WorkCenterRoutingFindUniqueArgs } from "./WorkCenterRoutingFindUniqueArgs";
import { CreateWorkCenterRoutingArgs } from "./CreateWorkCenterRoutingArgs";
import { UpdateWorkCenterRoutingArgs } from "./UpdateWorkCenterRoutingArgs";
import { DeleteWorkCenterRoutingArgs } from "./DeleteWorkCenterRoutingArgs";
import { Tenant } from "../../tenant/base/Tenant";
import { WorkCenter } from "../../workCenter/base/WorkCenter";
import { WorkCenterRoutingService } from "../workCenterRouting.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterRouting)
export class WorkCenterRoutingResolverBase {
  constructor(
    protected readonly service: WorkCenterRoutingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "read",
    possession: "any",
  })
  async _workCenterRoutingsMeta(
    @graphql.Args() args: WorkCenterRoutingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkCenterRouting])
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "read",
    possession: "any",
  })
  async workCenterRoutings(
    @graphql.Args() args: WorkCenterRoutingFindManyArgs
  ): Promise<WorkCenterRouting[]> {
    return this.service.workCenterRoutings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkCenterRouting, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "read",
    possession: "own",
  })
  async workCenterRouting(
    @graphql.Args() args: WorkCenterRoutingFindUniqueArgs
  ): Promise<WorkCenterRouting | null> {
    const result = await this.service.workCenterRouting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterRouting)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "create",
    possession: "any",
  })
  async createWorkCenterRouting(
    @graphql.Args() args: CreateWorkCenterRoutingArgs
  ): Promise<WorkCenterRouting> {
    return await this.service.createWorkCenterRouting({
      ...args,
      data: {
        ...args.data,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,

        workCenterId: {
          connect: args.data.workCenterId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterRouting)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "update",
    possession: "any",
  })
  async updateWorkCenterRouting(
    @graphql.Args() args: UpdateWorkCenterRoutingArgs
  ): Promise<WorkCenterRouting | null> {
    try {
      return await this.service.updateWorkCenterRouting({
        ...args,
        data: {
          ...args.data,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,

          workCenterId: {
            connect: args.data.workCenterId,
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

  @graphql.Mutation(() => WorkCenterRouting)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "delete",
    possession: "any",
  })
  async deleteWorkCenterRouting(
    @graphql.Args() args: DeleteWorkCenterRoutingArgs
  ): Promise<WorkCenterRouting | null> {
    try {
      return await this.service.deleteWorkCenterRouting(args);
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
    name: "tenant",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenant(
    @graphql.Parent() parent: WorkCenterRouting
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

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
    @graphql.Parent() parent: WorkCenterRouting
  ): Promise<WorkCenter | null> {
    const result = await this.service.getWorkCenterId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
