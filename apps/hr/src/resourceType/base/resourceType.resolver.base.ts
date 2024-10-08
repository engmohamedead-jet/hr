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
import { ResourceType } from "./ResourceType";
import { ResourceTypeCountArgs } from "./ResourceTypeCountArgs";
import { ResourceTypeFindManyArgs } from "./ResourceTypeFindManyArgs";
import { ResourceTypeFindUniqueArgs } from "./ResourceTypeFindUniqueArgs";
import { CreateResourceTypeArgs } from "./CreateResourceTypeArgs";
import { UpdateResourceTypeArgs } from "./UpdateResourceTypeArgs";
import { DeleteResourceTypeArgs } from "./DeleteResourceTypeArgs";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { Tenant } from "../../tenant/base/Tenant";
import { ResourceTypeService } from "../resourceType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResourceType)
export class ResourceTypeResolverBase {
  constructor(
    protected readonly service: ResourceTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ResourceType",
    action: "read",
    possession: "any",
  })
  async _resourceTypesMeta(
    @graphql.Args() args: ResourceTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ResourceType])
  @nestAccessControl.UseRoles({
    resource: "ResourceType",
    action: "read",
    possession: "any",
  })
  async resourceTypes(
    @graphql.Args() args: ResourceTypeFindManyArgs
  ): Promise<ResourceType[]> {
    return this.service.resourceTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ResourceType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ResourceType",
    action: "read",
    possession: "own",
  })
  async resourceType(
    @graphql.Args() args: ResourceTypeFindUniqueArgs
  ): Promise<ResourceType | null> {
    const result = await this.service.resourceType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ResourceType)
  @nestAccessControl.UseRoles({
    resource: "ResourceType",
    action: "create",
    possession: "any",
  })
  async createResourceType(
    @graphql.Args() args: CreateResourceTypeArgs
  ): Promise<ResourceType> {
    return await this.service.createResourceType({
      ...args,
      data: {
        ...args.data,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ResourceType)
  @nestAccessControl.UseRoles({
    resource: "ResourceType",
    action: "update",
    possession: "any",
  })
  async updateResourceType(
    @graphql.Args() args: UpdateResourceTypeArgs
  ): Promise<ResourceType | null> {
    try {
      return await this.service.updateResourceType({
        ...args,
        data: {
          ...args.data,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
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

  @graphql.Mutation(() => ResourceType)
  @nestAccessControl.UseRoles({
    resource: "ResourceType",
    action: "delete",
    possession: "any",
  })
  async deleteResourceType(
    @graphql.Args() args: DeleteResourceTypeArgs
  ): Promise<ResourceType | null> {
    try {
      return await this.service.deleteResourceType(args);
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
  @graphql.ResolveField(() => [Resource], { name: "resources" })
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  async findResources(
    @graphql.Parent() parent: ResourceType,
    @graphql.Args() args: ResourceFindManyArgs
  ): Promise<Resource[]> {
    const results = await this.service.findResources(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
    @graphql.Parent() parent: ResourceType
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
