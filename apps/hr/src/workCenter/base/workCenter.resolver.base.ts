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
import { WorkCenter } from "./WorkCenter";
import { WorkCenterCountArgs } from "./WorkCenterCountArgs";
import { WorkCenterFindManyArgs } from "./WorkCenterFindManyArgs";
import { WorkCenterFindUniqueArgs } from "./WorkCenterFindUniqueArgs";
import { CreateWorkCenterArgs } from "./CreateWorkCenterArgs";
import { UpdateWorkCenterArgs } from "./UpdateWorkCenterArgs";
import { DeleteWorkCenterArgs } from "./DeleteWorkCenterArgs";
import { WorkCenterRoutingFindManyArgs } from "../../workCenterRouting/base/WorkCenterRoutingFindManyArgs";
import { WorkCenterRouting } from "../../workCenterRouting/base/WorkCenterRouting";
import { WorkCenterService } from "../workCenter.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenter)
export class WorkCenterResolverBase {
  constructor(
    protected readonly service: WorkCenterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "read",
    possession: "any",
  })
  async _workCentersMeta(
    @graphql.Args() args: WorkCenterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkCenter])
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "read",
    possession: "any",
  })
  async workCenters(
    @graphql.Args() args: WorkCenterFindManyArgs
  ): Promise<WorkCenter[]> {
    return this.service.workCenters(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkCenter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "read",
    possession: "own",
  })
  async workCenter(
    @graphql.Args() args: WorkCenterFindUniqueArgs
  ): Promise<WorkCenter | null> {
    const result = await this.service.workCenter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenter)
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "create",
    possession: "any",
  })
  async createWorkCenter(
    @graphql.Args() args: CreateWorkCenterArgs
  ): Promise<WorkCenter> {
    return await this.service.createWorkCenter({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkCenter)
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "update",
    possession: "any",
  })
  async updateWorkCenter(
    @graphql.Args() args: UpdateWorkCenterArgs
  ): Promise<WorkCenter | null> {
    try {
      return await this.service.updateWorkCenter({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => WorkCenter)
  @nestAccessControl.UseRoles({
    resource: "WorkCenter",
    action: "delete",
    possession: "any",
  })
  async deleteWorkCenter(
    @graphql.Args() args: DeleteWorkCenterArgs
  ): Promise<WorkCenter | null> {
    try {
      return await this.service.deleteWorkCenter(args);
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
  @graphql.ResolveField(() => [WorkCenterRouting], {
    name: "workCenterRoutings",
  })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "read",
    possession: "any",
  })
  async findWorkCenterRoutings(
    @graphql.Parent() parent: WorkCenter,
    @graphql.Args() args: WorkCenterRoutingFindManyArgs
  ): Promise<WorkCenterRouting[]> {
    const results = await this.service.findWorkCenterRoutings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}