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
import { WorkCenterWorkCenterTag } from "./WorkCenterWorkCenterTag";
import { WorkCenterWorkCenterTagCountArgs } from "./WorkCenterWorkCenterTagCountArgs";
import { WorkCenterWorkCenterTagFindManyArgs } from "./WorkCenterWorkCenterTagFindManyArgs";
import { WorkCenterWorkCenterTagFindUniqueArgs } from "./WorkCenterWorkCenterTagFindUniqueArgs";
import { CreateWorkCenterWorkCenterTagArgs } from "./CreateWorkCenterWorkCenterTagArgs";
import { UpdateWorkCenterWorkCenterTagArgs } from "./UpdateWorkCenterWorkCenterTagArgs";
import { DeleteWorkCenterWorkCenterTagArgs } from "./DeleteWorkCenterWorkCenterTagArgs";
import { Tenant } from "../../tenant/base/Tenant";
import { WorkCenter } from "../../workCenter/base/WorkCenter";
import { WorkCenterTag } from "../../workCenterTag/base/WorkCenterTag";
import { WorkCenterWorkCenterTagService } from "../workCenterWorkCenterTag.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterWorkCenterTag)
export class WorkCenterWorkCenterTagResolverBase {
  constructor(
    protected readonly service: WorkCenterWorkCenterTagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterWorkCenterTag",
    action: "read",
    possession: "any",
  })
  async _workCenterWorkCenterTagsMeta(
    @graphql.Args() args: WorkCenterWorkCenterTagCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkCenterWorkCenterTag])
  @nestAccessControl.UseRoles({
    resource: "WorkCenterWorkCenterTag",
    action: "read",
    possession: "any",
  })
  async workCenterWorkCenterTags(
    @graphql.Args() args: WorkCenterWorkCenterTagFindManyArgs
  ): Promise<WorkCenterWorkCenterTag[]> {
    return this.service.workCenterWorkCenterTags(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkCenterWorkCenterTag, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterWorkCenterTag",
    action: "read",
    possession: "own",
  })
  async workCenterWorkCenterTag(
    @graphql.Args() args: WorkCenterWorkCenterTagFindUniqueArgs
  ): Promise<WorkCenterWorkCenterTag | null> {
    const result = await this.service.workCenterWorkCenterTag(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterWorkCenterTag)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterWorkCenterTag",
    action: "create",
    possession: "any",
  })
  async createWorkCenterWorkCenterTag(
    @graphql.Args() args: CreateWorkCenterWorkCenterTagArgs
  ): Promise<WorkCenterWorkCenterTag> {
    return await this.service.createWorkCenterWorkCenterTag({
      ...args,
      data: {
        ...args.data,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,

        workCenter: {
          connect: args.data.workCenter,
        },

        workCenterTagId: {
          connect: args.data.workCenterTagId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenterWorkCenterTag)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterWorkCenterTag",
    action: "update",
    possession: "any",
  })
  async updateWorkCenterWorkCenterTag(
    @graphql.Args() args: UpdateWorkCenterWorkCenterTagArgs
  ): Promise<WorkCenterWorkCenterTag | null> {
    try {
      return await this.service.updateWorkCenterWorkCenterTag({
        ...args,
        data: {
          ...args.data,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
              }
            : undefined,

          workCenter: {
            connect: args.data.workCenter,
          },

          workCenterTagId: {
            connect: args.data.workCenterTagId,
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

  @graphql.Mutation(() => WorkCenterWorkCenterTag)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterWorkCenterTag",
    action: "delete",
    possession: "any",
  })
  async deleteWorkCenterWorkCenterTag(
    @graphql.Args() args: DeleteWorkCenterWorkCenterTagArgs
  ): Promise<WorkCenterWorkCenterTag | null> {
    try {
      return await this.service.deleteWorkCenterWorkCenterTag(args);
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
    @graphql.Parent() parent: WorkCenterWorkCenterTag
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
    name: "workCenter",
  })
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "read",
    possession: "any",
  })
  async getWorkCenter(
    @graphql.Parent() parent: WorkCenterWorkCenterTag
  ): Promise<WorkCenter | null> {
    const result = await this.service.getWorkCenter(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => WorkCenterTag, {
    nullable: true,
    name: "workCenterTagId",
  })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterTag",
    action: "read",
    possession: "any",
  })
  async getWorkCenterTagId(
    @graphql.Parent() parent: WorkCenterWorkCenterTag
  ): Promise<WorkCenterTag | null> {
    const result = await this.service.getWorkCenterTagId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}