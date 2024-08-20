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
import { SaleOrder } from "./SaleOrder";
import { SaleOrderCountArgs } from "./SaleOrderCountArgs";
import { SaleOrderFindManyArgs } from "./SaleOrderFindManyArgs";
import { SaleOrderFindUniqueArgs } from "./SaleOrderFindUniqueArgs";
import { CreateSaleOrderArgs } from "./CreateSaleOrderArgs";
import { UpdateSaleOrderArgs } from "./UpdateSaleOrderArgs";
import { DeleteSaleOrderArgs } from "./DeleteSaleOrderArgs";
import { SaleOrderDetailFindManyArgs } from "../../saleOrderDetail/base/SaleOrderDetailFindManyArgs";
import { SaleOrderDetail } from "../../saleOrderDetail/base/SaleOrderDetail";
import { CashRepository } from "../../cashRepository/base/CashRepository";
import { Customer } from "../../customer/base/Customer";
import { InvoiceType } from "../../invoiceType/base/InvoiceType";
import { OrderStatus } from "../../orderStatus/base/OrderStatus";
import { PaymentStatus } from "../../paymentStatus/base/PaymentStatus";
import { PaymentType } from "../../paymentType/base/PaymentType";
import { SalePriceType } from "../../salePriceType/base/SalePriceType";
import { SaleQuotation } from "../../saleQuotation/base/SaleQuotation";
import { ShippingStatus } from "../../shippingStatus/base/ShippingStatus";
import { Store } from "../../store/base/Store";
import { Tenant } from "../../tenant/base/Tenant";
import { SaleOrderService } from "../saleOrder.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleOrder)
export class SaleOrderResolverBase {
  constructor(
    protected readonly service: SaleOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  async _saleOrdersMeta(
    @graphql.Args() args: SaleOrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SaleOrder])
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  async saleOrders(
    @graphql.Args() args: SaleOrderFindManyArgs
  ): Promise<SaleOrder[]> {
    return this.service.saleOrders(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SaleOrder, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "own",
  })
  async saleOrder(
    @graphql.Args() args: SaleOrderFindUniqueArgs
  ): Promise<SaleOrder | null> {
    const result = await this.service.saleOrder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SaleOrder)
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "create",
    possession: "any",
  })
  async createSaleOrder(
    @graphql.Args() args: CreateSaleOrderArgs
  ): Promise<SaleOrder> {
    return await this.service.createSaleOrder({
      ...args,
      data: {
        ...args.data,

        cashRepositoryId: args.data.cashRepositoryId
          ? {
              connect: args.data.cashRepositoryId,
            }
          : undefined,

        customerId: {
          connect: args.data.customerId,
        },

        invoiceTypeId: args.data.invoiceTypeId
          ? {
              connect: args.data.invoiceTypeId,
            }
          : undefined,

        orderStatus: {
          connect: args.data.orderStatus,
        },

        paymentStatus: args.data.paymentStatus
          ? {
              connect: args.data.paymentStatus,
            }
          : undefined,

        paymentTypeId: args.data.paymentTypeId
          ? {
              connect: args.data.paymentTypeId,
            }
          : undefined,

        salePriceType: {
          connect: args.data.salePriceType,
        },

        saleQuotation: args.data.saleQuotation
          ? {
              connect: args.data.saleQuotation,
            }
          : undefined,

        shippingStatus: args.data.shippingStatus
          ? {
              connect: args.data.shippingStatus,
            }
          : undefined,

        storeId: args.data.storeId
          ? {
              connect: args.data.storeId,
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
  @graphql.Mutation(() => SaleOrder)
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "update",
    possession: "any",
  })
  async updateSaleOrder(
    @graphql.Args() args: UpdateSaleOrderArgs
  ): Promise<SaleOrder | null> {
    try {
      return await this.service.updateSaleOrder({
        ...args,
        data: {
          ...args.data,

          cashRepositoryId: args.data.cashRepositoryId
            ? {
                connect: args.data.cashRepositoryId,
              }
            : undefined,

          customerId: {
            connect: args.data.customerId,
          },

          invoiceTypeId: args.data.invoiceTypeId
            ? {
                connect: args.data.invoiceTypeId,
              }
            : undefined,

          orderStatus: {
            connect: args.data.orderStatus,
          },

          paymentStatus: args.data.paymentStatus
            ? {
                connect: args.data.paymentStatus,
              }
            : undefined,

          paymentTypeId: args.data.paymentTypeId
            ? {
                connect: args.data.paymentTypeId,
              }
            : undefined,

          salePriceType: {
            connect: args.data.salePriceType,
          },

          saleQuotation: args.data.saleQuotation
            ? {
                connect: args.data.saleQuotation,
              }
            : undefined,

          shippingStatus: args.data.shippingStatus
            ? {
                connect: args.data.shippingStatus,
              }
            : undefined,

          storeId: args.data.storeId
            ? {
                connect: args.data.storeId,
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

  @graphql.Mutation(() => SaleOrder)
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "delete",
    possession: "any",
  })
  async deleteSaleOrder(
    @graphql.Args() args: DeleteSaleOrderArgs
  ): Promise<SaleOrder | null> {
    try {
      return await this.service.deleteSaleOrder(args);
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
  @graphql.ResolveField(() => [SaleOrderDetail], { name: "saleOrderDetails" })
  @nestAccessControl.UseRoles({
    resource: "SaleOrderDetail",
    action: "read",
    possession: "any",
  })
  async findSaleOrderDetails(
    @graphql.Parent() parent: SaleOrder,
    @graphql.Args() args: SaleOrderDetailFindManyArgs
  ): Promise<SaleOrderDetail[]> {
    const results = await this.service.findSaleOrderDetails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CashRepository, {
    nullable: true,
    name: "cashRepositoryId",
  })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "any",
  })
  async getCashRepositoryId(
    @graphql.Parent() parent: SaleOrder
  ): Promise<CashRepository | null> {
    const result = await this.service.getCashRepositoryId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customerId",
  })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async getCustomerId(
    @graphql.Parent() parent: SaleOrder
  ): Promise<Customer | null> {
    const result = await this.service.getCustomerId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => InvoiceType, {
    nullable: true,
    name: "invoiceTypeId",
  })
  @nestAccessControl.UseRoles({
    resource: "InvoiceType",
    action: "read",
    possession: "any",
  })
  async getInvoiceTypeId(
    @graphql.Parent() parent: SaleOrder
  ): Promise<InvoiceType | null> {
    const result = await this.service.getInvoiceTypeId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => OrderStatus, {
    nullable: true,
    name: "orderStatus",
  })
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "read",
    possession: "any",
  })
  async getOrderStatus(
    @graphql.Parent() parent: SaleOrder
  ): Promise<OrderStatus | null> {
    const result = await this.service.getOrderStatus(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PaymentStatus, {
    nullable: true,
    name: "paymentStatus",
  })
  @nestAccessControl.UseRoles({
    resource: "PaymentStatus",
    action: "read",
    possession: "any",
  })
  async getPaymentStatus(
    @graphql.Parent() parent: SaleOrder
  ): Promise<PaymentStatus | null> {
    const result = await this.service.getPaymentStatus(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PaymentType, {
    nullable: true,
    name: "paymentTypeId",
  })
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "read",
    possession: "any",
  })
  async getPaymentTypeId(
    @graphql.Parent() parent: SaleOrder
  ): Promise<PaymentType | null> {
    const result = await this.service.getPaymentTypeId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SalePriceType, {
    nullable: true,
    name: "salePriceType",
  })
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "read",
    possession: "any",
  })
  async getSalePriceType(
    @graphql.Parent() parent: SaleOrder
  ): Promise<SalePriceType | null> {
    const result = await this.service.getSalePriceType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SaleQuotation, {
    nullable: true,
    name: "saleQuotation",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "read",
    possession: "any",
  })
  async getSaleQuotation(
    @graphql.Parent() parent: SaleOrder
  ): Promise<SaleQuotation | null> {
    const result = await this.service.getSaleQuotation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ShippingStatus, {
    nullable: true,
    name: "shippingStatus",
  })
  @nestAccessControl.UseRoles({
    resource: "ShippingStatus",
    action: "read",
    possession: "any",
  })
  async getShippingStatus(
    @graphql.Parent() parent: SaleOrder
  ): Promise<ShippingStatus | null> {
    const result = await this.service.getShippingStatus(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Store, {
    nullable: true,
    name: "storeId",
  })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "any",
  })
  async getStoreId(@graphql.Parent() parent: SaleOrder): Promise<Store | null> {
    const result = await this.service.getStoreId(parent.id);

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
  async getTenant(@graphql.Parent() parent: SaleOrder): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}