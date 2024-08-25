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
import { WorkCenterCapacity } from "./WorkCenterCapacity";
import { WorkCenterCapacityCountArgs } from "./WorkCenterCapacityCountArgs";
import { WorkCenterCapacityFindManyArgs } from "./WorkCenterCapacityFindManyArgs";
import { WorkCenterCapacityFindUniqueArgs } from "./WorkCenterCapacityFindUniqueArgs";
import { CreateWorkCenterCapacityArgs } from "./CreateWorkCenterCapacityArgs";
import { UpdateWorkCenterCapacityArgs } from "./UpdateWorkCenterCapacityArgs";
import { DeleteWorkCenterCapacityArgs } from "./DeleteWorkCenterCapacityArgs";
import { Tenant } from "../../tenant/base/Tenant";
import { WorkCenter } from "../../workCenter/base/WorkCenter";
import { WorkCenterCapacityService } from "../workCenterCapacity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterCapacity)
export class WorkCenterCapacityResolverBase {
  constructor(
    protected readonly service: WorkCenterCapacityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterCapacity",
    action: "read",
    possession: "any",
  })
  async _workCenterCapacitiesMeta(
    @graphql.Args() args: WorkCenterCapacityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkCenterCapacity])
  @nestAccessControl.UseRoles({
    resource: "WorkCenterCapacity",
    action: "read",
    possession: "any",
  })
  async workCenterCapacities(
    @graphql.Args() args: WorkCenterCapacityFindManyArgs
  ): Promise<WorkCenterCapacity[]> {
    return this.service.workCenterCapacities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkCenterCapacity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterCapacity",
    action: "read",
    possession: "own",
  })
  async workCenterCapacity(
    @graphql.Args() args: WorkCenterCapacityFindUniqueArgs
  ): Promise<WorkCenterCapacity | null> {
    const result = await this.service.workCenterCapacity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterCapacity)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterCapacity",
    action: "create",
    possession: "any",
  })
  async createWorkCenterCapacity(
    @graphql.Args() args: CreateWorkCenterCapacityArgs
  ): Promise<WorkCenterCapacity> {
    return await this.service.createWorkCenterCapacity({
      ...args,
      data: {
        ...args.data,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,

        workCenterId: {
          connect: args.data.workCenterId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterCapacity)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterCapacity",
    action: "update",
    possession: "any",
  })
  async updateWorkCenterCapacity(
    @graphql.Args() args: UpdateWorkCenterCapacityArgs
  ): Promise<WorkCenterCapacity | null> {
    try {
      return await this.service.updateWorkCenterCapacity({
        ...args,
        data: {
          ...args.data,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
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

  @graphql.Mutation(() => WorkCenterCapacity)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterCapacity",
    action: "delete",
    possession: "any",
  })
  async deleteWorkCenterCapacity(
    @graphql.Args() args: DeleteWorkCenterCapacityArgs
  ): Promise<WorkCenterCapacity | null> {
    try {
      return await this.service.deleteWorkCenterCapacity(args);
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
    @graphql.Parent() parent: WorkCenterCapacity
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
    @graphql.Parent() parent: WorkCenterCapacity
  ): Promise<WorkCenter | null> {
    const result = await this.service.getWorkCenterId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}