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
import { WorkCenterProductivity } from "./WorkCenterProductivity";
import { WorkCenterProductivityCountArgs } from "./WorkCenterProductivityCountArgs";
import { WorkCenterProductivityFindManyArgs } from "./WorkCenterProductivityFindManyArgs";
import { WorkCenterProductivityFindUniqueArgs } from "./WorkCenterProductivityFindUniqueArgs";
import { CreateWorkCenterProductivityArgs } from "./CreateWorkCenterProductivityArgs";
import { UpdateWorkCenterProductivityArgs } from "./UpdateWorkCenterProductivityArgs";
import { DeleteWorkCenterProductivityArgs } from "./DeleteWorkCenterProductivityArgs";
import { Tenant } from "../../tenant/base/Tenant";
import { WorkCenter } from "../../workCenter/base/WorkCenter";
import { WorkCenterProductivityService } from "../workCenterProductivity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterProductivity)
export class WorkCenterProductivityResolverBase {
  constructor(
    protected readonly service: WorkCenterProductivityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivity",
    action: "read",
    possession: "any",
  })
  async _workCenterProductivitiesMeta(
    @graphql.Args() args: WorkCenterProductivityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkCenterProductivity])
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivity",
    action: "read",
    possession: "any",
  })
  async workCenterProductivities(
    @graphql.Args() args: WorkCenterProductivityFindManyArgs
  ): Promise<WorkCenterProductivity[]> {
    return this.service.workCenterProductivities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkCenterProductivity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivity",
    action: "read",
    possession: "own",
  })
  async workCenterProductivity(
    @graphql.Args() args: WorkCenterProductivityFindUniqueArgs
  ): Promise<WorkCenterProductivity | null> {
    const result = await this.service.workCenterProductivity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterProductivity)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivity",
    action: "create",
    possession: "any",
  })
  async createWorkCenterProductivity(
    @graphql.Args() args: CreateWorkCenterProductivityArgs
  ): Promise<WorkCenterProductivity> {
    return await this.service.createWorkCenterProductivity({
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
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterProductivity)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivity",
    action: "update",
    possession: "any",
  })
  async updateWorkCenterProductivity(
    @graphql.Args() args: UpdateWorkCenterProductivityArgs
  ): Promise<WorkCenterProductivity | null> {
    try {
      return await this.service.updateWorkCenterProductivity({
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

  @graphql.Mutation(() => WorkCenterProductivity)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterProductivity",
    action: "delete",
    possession: "any",
  })
  async deleteWorkCenterProductivity(
    @graphql.Args() args: DeleteWorkCenterProductivityArgs
  ): Promise<WorkCenterProductivity | null> {
    try {
      return await this.service.deleteWorkCenterProductivity(args);
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
    @graphql.Parent() parent: WorkCenterProductivity
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
    @graphql.Parent() parent: WorkCenterProductivity
  ): Promise<WorkCenter | null> {
    const result = await this.service.getWorkCenterId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
