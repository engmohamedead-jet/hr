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
import { ShippingStatus } from "./ShippingStatus";
import { ShippingStatusCountArgs } from "./ShippingStatusCountArgs";
import { ShippingStatusFindManyArgs } from "./ShippingStatusFindManyArgs";
import { ShippingStatusFindUniqueArgs } from "./ShippingStatusFindUniqueArgs";
import { CreateShippingStatusArgs } from "./CreateShippingStatusArgs";
import { UpdateShippingStatusArgs } from "./UpdateShippingStatusArgs";
import { DeleteShippingStatusArgs } from "./DeleteShippingStatusArgs";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { Tenant } from "../../tenant/base/Tenant";
import { ShippingStatusService } from "../shippingStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ShippingStatus)
export class ShippingStatusResolverBase {
  constructor(
    protected readonly service: ShippingStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ShippingStatus",
    action: "read",
    possession: "any",
  })
  async _shippingStatusesMeta(
    @graphql.Args() args: ShippingStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ShippingStatus])
  @nestAccessControl.UseRoles({
    resource: "ShippingStatus",
    action: "read",
    possession: "any",
  })
  async shippingStatuses(
    @graphql.Args() args: ShippingStatusFindManyArgs
  ): Promise<ShippingStatus[]> {
    return this.service.shippingStatuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ShippingStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ShippingStatus",
    action: "read",
    possession: "own",
  })
  async shippingStatus(
    @graphql.Args() args: ShippingStatusFindUniqueArgs
  ): Promise<ShippingStatus | null> {
    const result = await this.service.shippingStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ShippingStatus)
  @nestAccessControl.UseRoles({
    resource: "ShippingStatus",
    action: "create",
    possession: "any",
  })
  async createShippingStatus(
    @graphql.Args() args: CreateShippingStatusArgs
  ): Promise<ShippingStatus> {
    return await this.service.createShippingStatus({
      ...args,
      data: {
        ...args.data,

        saleOrders: args.data.saleOrders
          ? {
              connect: args.data.saleOrders,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ShippingStatus)
  @nestAccessControl.UseRoles({
    resource: "ShippingStatus",
    action: "update",
    possession: "any",
  })
  async updateShippingStatus(
    @graphql.Args() args: UpdateShippingStatusArgs
  ): Promise<ShippingStatus | null> {
    try {
      return await this.service.updateShippingStatus({
        ...args,
        data: {
          ...args.data,

          saleOrders: args.data.saleOrders
            ? {
                connect: args.data.saleOrders,
              }
            : undefined,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
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

  @graphql.Mutation(() => ShippingStatus)
  @nestAccessControl.UseRoles({
    resource: "ShippingStatus",
    action: "delete",
    possession: "any",
  })
  async deleteShippingStatus(
    @graphql.Args() args: DeleteShippingStatusArgs
  ): Promise<ShippingStatus | null> {
    try {
      return await this.service.deleteShippingStatus(args);
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
  @graphql.ResolveField(() => SaleOrder, {
    nullable: true,
    name: "saleOrders",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  async getSaleOrders(
    @graphql.Parent() parent: ShippingStatus
  ): Promise<SaleOrder | null> {
    const result = await this.service.getSaleOrders(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
    @graphql.Parent() parent: ShippingStatus
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
