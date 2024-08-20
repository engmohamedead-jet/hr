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
import { StoreType } from "./StoreType";
import { StoreTypeCountArgs } from "./StoreTypeCountArgs";
import { StoreTypeFindManyArgs } from "./StoreTypeFindManyArgs";
import { StoreTypeFindUniqueArgs } from "./StoreTypeFindUniqueArgs";
import { CreateStoreTypeArgs } from "./CreateStoreTypeArgs";
import { UpdateStoreTypeArgs } from "./UpdateStoreTypeArgs";
import { DeleteStoreTypeArgs } from "./DeleteStoreTypeArgs";
import { StoreFindManyArgs } from "../../store/base/StoreFindManyArgs";
import { Store } from "../../store/base/Store";
import { Tenant } from "../../tenant/base/Tenant";
import { StoreTypeService } from "../storeType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StoreType)
export class StoreTypeResolverBase {
  constructor(
    protected readonly service: StoreTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "StoreType",
    action: "read",
    possession: "any",
  })
  async _storeTypesMeta(
    @graphql.Args() args: StoreTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [StoreType])
  @nestAccessControl.UseRoles({
    resource: "StoreType",
    action: "read",
    possession: "any",
  })
  async storeTypes(
    @graphql.Args() args: StoreTypeFindManyArgs
  ): Promise<StoreType[]> {
    return this.service.storeTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => StoreType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "StoreType",
    action: "read",
    possession: "own",
  })
  async storeType(
    @graphql.Args() args: StoreTypeFindUniqueArgs
  ): Promise<StoreType | null> {
    const result = await this.service.storeType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StoreType)
  @nestAccessControl.UseRoles({
    resource: "StoreType",
    action: "create",
    possession: "any",
  })
  async createStoreType(
    @graphql.Args() args: CreateStoreTypeArgs
  ): Promise<StoreType> {
    return await this.service.createStoreType({
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
  @graphql.Mutation(() => StoreType)
  @nestAccessControl.UseRoles({
    resource: "StoreType",
    action: "update",
    possession: "any",
  })
  async updateStoreType(
    @graphql.Args() args: UpdateStoreTypeArgs
  ): Promise<StoreType | null> {
    try {
      return await this.service.updateStoreType({
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

  @graphql.Mutation(() => StoreType)
  @nestAccessControl.UseRoles({
    resource: "StoreType",
    action: "delete",
    possession: "any",
  })
  async deleteStoreType(
    @graphql.Args() args: DeleteStoreTypeArgs
  ): Promise<StoreType | null> {
    try {
      return await this.service.deleteStoreType(args);
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
  @graphql.ResolveField(() => [Store], { name: "stores" })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "any",
  })
  async findStores(
    @graphql.Parent() parent: StoreType,
    @graphql.Args() args: StoreFindManyArgs
  ): Promise<Store[]> {
    const results = await this.service.findStores(parent.id, args);

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
    @graphql.Parent() parent: StoreType
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
