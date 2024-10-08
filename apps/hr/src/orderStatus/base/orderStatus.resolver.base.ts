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
import { OrderStatus } from "./OrderStatus";
import { OrderStatusCountArgs } from "./OrderStatusCountArgs";
import { OrderStatusFindManyArgs } from "./OrderStatusFindManyArgs";
import { OrderStatusFindUniqueArgs } from "./OrderStatusFindUniqueArgs";
import { CreateOrderStatusArgs } from "./CreateOrderStatusArgs";
import { UpdateOrderStatusArgs } from "./UpdateOrderStatusArgs";
import { DeleteOrderStatusArgs } from "./DeleteOrderStatusArgs";
import { ProductionOrder } from "../../productionOrder/base/ProductionOrder";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { Tenant } from "../../tenant/base/Tenant";
import { OrderStatusService } from "../orderStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderStatus)
export class OrderStatusResolverBase {
  constructor(
    protected readonly service: OrderStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "read",
    possession: "any",
  })
  async _orderStatusesMeta(
    @graphql.Args() args: OrderStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [OrderStatus])
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "read",
    possession: "any",
  })
  async orderStatuses(
    @graphql.Args() args: OrderStatusFindManyArgs
  ): Promise<OrderStatus[]> {
    return this.service.orderStatuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => OrderStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "read",
    possession: "own",
  })
  async orderStatus(
    @graphql.Args() args: OrderStatusFindUniqueArgs
  ): Promise<OrderStatus | null> {
    const result = await this.service.orderStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OrderStatus)
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "create",
    possession: "any",
  })
  async createOrderStatus(
    @graphql.Args() args: CreateOrderStatusArgs
  ): Promise<OrderStatus> {
    return await this.service.createOrderStatus({
      ...args,
      data: {
        ...args.data,

        productionOrders: args.data.productionOrders
          ? {
              connect: args.data.productionOrders,
            }
          : undefined,

        saleOrders: args.data.saleOrders
          ? {
              connect: args.data.saleOrders,
            }
          : undefined,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OrderStatus)
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "update",
    possession: "any",
  })
  async updateOrderStatus(
    @graphql.Args() args: UpdateOrderStatusArgs
  ): Promise<OrderStatus | null> {
    try {
      return await this.service.updateOrderStatus({
        ...args,
        data: {
          ...args.data,

          productionOrders: args.data.productionOrders
            ? {
                connect: args.data.productionOrders,
              }
            : undefined,

          saleOrders: args.data.saleOrders
            ? {
                connect: args.data.saleOrders,
              }
            : undefined,

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

  @graphql.Mutation(() => OrderStatus)
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "delete",
    possession: "any",
  })
  async deleteOrderStatus(
    @graphql.Args() args: DeleteOrderStatusArgs
  ): Promise<OrderStatus | null> {
    try {
      return await this.service.deleteOrderStatus(args);
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
  @graphql.ResolveField(() => ProductionOrder, {
    nullable: true,
    name: "productionOrders",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "read",
    possession: "any",
  })
  async getProductionOrders(
    @graphql.Parent() parent: OrderStatus
  ): Promise<ProductionOrder | null> {
    const result = await this.service.getProductionOrders(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
    @graphql.Parent() parent: OrderStatus
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
    name: "tenantId",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenantId(
    @graphql.Parent() parent: OrderStatus
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
