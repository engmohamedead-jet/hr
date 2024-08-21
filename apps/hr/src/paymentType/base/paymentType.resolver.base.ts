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
import { PaymentType } from "./PaymentType";
import { PaymentTypeCountArgs } from "./PaymentTypeCountArgs";
import { PaymentTypeFindManyArgs } from "./PaymentTypeFindManyArgs";
import { PaymentTypeFindUniqueArgs } from "./PaymentTypeFindUniqueArgs";
import { CreatePaymentTypeArgs } from "./CreatePaymentTypeArgs";
import { UpdatePaymentTypeArgs } from "./UpdatePaymentTypeArgs";
import { DeletePaymentTypeArgs } from "./DeletePaymentTypeArgs";
import { PurchaseReturnFindManyArgs } from "../../purchaseReturn/base/PurchaseReturnFindManyArgs";
import { PurchaseReturn } from "../../purchaseReturn/base/PurchaseReturn";
import { PurchaseFindManyArgs } from "../../purchase/base/PurchaseFindManyArgs";
import { Purchase } from "../../purchase/base/Purchase";
import { SaleOrderFindManyArgs } from "../../saleOrder/base/SaleOrderFindManyArgs";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { SaleReturnFindManyArgs } from "../../saleReturn/base/SaleReturnFindManyArgs";
import { SaleReturn } from "../../saleReturn/base/SaleReturn";
import { SaleFindManyArgs } from "../../sale/base/SaleFindManyArgs";
import { Sale } from "../../sale/base/Sale";
import { Tenant } from "../../tenant/base/Tenant";
import { PaymentTypeService } from "../paymentType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentType)
export class PaymentTypeResolverBase {
  constructor(
    protected readonly service: PaymentTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "read",
    possession: "any",
  })
  async _paymentTypesMeta(
    @graphql.Args() args: PaymentTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PaymentType])
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "read",
    possession: "any",
  })
  async paymentTypes(
    @graphql.Args() args: PaymentTypeFindManyArgs
  ): Promise<PaymentType[]> {
    return this.service.paymentTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PaymentType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "read",
    possession: "own",
  })
  async paymentType(
    @graphql.Args() args: PaymentTypeFindUniqueArgs
  ): Promise<PaymentType | null> {
    const result = await this.service.paymentType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentType)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "create",
    possession: "any",
  })
  async createPaymentType(
    @graphql.Args() args: CreatePaymentTypeArgs
  ): Promise<PaymentType> {
    return await this.service.createPaymentType({
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
  @graphql.Mutation(() => PaymentType)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "update",
    possession: "any",
  })
  async updatePaymentType(
    @graphql.Args() args: UpdatePaymentTypeArgs
  ): Promise<PaymentType | null> {
    try {
      return await this.service.updatePaymentType({
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

  @graphql.Mutation(() => PaymentType)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "delete",
    possession: "any",
  })
  async deletePaymentType(
    @graphql.Args() args: DeletePaymentTypeArgs
  ): Promise<PaymentType | null> {
    try {
      return await this.service.deletePaymentType(args);
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
  @graphql.ResolveField(() => [PurchaseReturn], { name: "purchaseReturns" })
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturn",
    action: "read",
    possession: "any",
  })
  async findPurchaseReturns(
    @graphql.Parent() parent: PaymentType,
    @graphql.Args() args: PurchaseReturnFindManyArgs
  ): Promise<PurchaseReturn[]> {
    const results = await this.service.findPurchaseReturns(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Purchase], { name: "purchases" })
  @nestAccessControl.UseRoles({
    resource: "Purchase",
    action: "read",
    possession: "any",
  })
  async findPurchases(
    @graphql.Parent() parent: PaymentType,
    @graphql.Args() args: PurchaseFindManyArgs
  ): Promise<Purchase[]> {
    const results = await this.service.findPurchases(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SaleOrder], { name: "saleOrders" })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  async findSaleOrders(
    @graphql.Parent() parent: PaymentType,
    @graphql.Args() args: SaleOrderFindManyArgs
  ): Promise<SaleOrder[]> {
    const results = await this.service.findSaleOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SaleReturn], { name: "saleReturns" })
  @nestAccessControl.UseRoles({
    resource: "SaleReturn",
    action: "read",
    possession: "any",
  })
  async findSaleReturns(
    @graphql.Parent() parent: PaymentType,
    @graphql.Args() args: SaleReturnFindManyArgs
  ): Promise<SaleReturn[]> {
    const results = await this.service.findSaleReturns(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Sale], { name: "sales" })
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "read",
    possession: "any",
  })
  async findSales(
    @graphql.Parent() parent: PaymentType,
    @graphql.Args() args: SaleFindManyArgs
  ): Promise<Sale[]> {
    const results = await this.service.findSales(parent.id, args);

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
    @graphql.Parent() parent: PaymentType
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
