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
import { InvoiceType } from "./InvoiceType";
import { InvoiceTypeCountArgs } from "./InvoiceTypeCountArgs";
import { InvoiceTypeFindManyArgs } from "./InvoiceTypeFindManyArgs";
import { InvoiceTypeFindUniqueArgs } from "./InvoiceTypeFindUniqueArgs";
import { CreateInvoiceTypeArgs } from "./CreateInvoiceTypeArgs";
import { UpdateInvoiceTypeArgs } from "./UpdateInvoiceTypeArgs";
import { DeleteInvoiceTypeArgs } from "./DeleteInvoiceTypeArgs";
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
import { InvoiceTypeService } from "../invoiceType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvoiceType)
export class InvoiceTypeResolverBase {
  constructor(
    protected readonly service: InvoiceTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InvoiceType",
    action: "read",
    possession: "any",
  })
  async _invoiceTypesMeta(
    @graphql.Args() args: InvoiceTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InvoiceType])
  @nestAccessControl.UseRoles({
    resource: "InvoiceType",
    action: "read",
    possession: "any",
  })
  async invoiceTypes(
    @graphql.Args() args: InvoiceTypeFindManyArgs
  ): Promise<InvoiceType[]> {
    return this.service.invoiceTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InvoiceType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvoiceType",
    action: "read",
    possession: "own",
  })
  async invoiceType(
    @graphql.Args() args: InvoiceTypeFindUniqueArgs
  ): Promise<InvoiceType | null> {
    const result = await this.service.invoiceType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvoiceType)
  @nestAccessControl.UseRoles({
    resource: "InvoiceType",
    action: "create",
    possession: "any",
  })
  async createInvoiceType(
    @graphql.Args() args: CreateInvoiceTypeArgs
  ): Promise<InvoiceType> {
    return await this.service.createInvoiceType({
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
  @graphql.Mutation(() => InvoiceType)
  @nestAccessControl.UseRoles({
    resource: "InvoiceType",
    action: "update",
    possession: "any",
  })
  async updateInvoiceType(
    @graphql.Args() args: UpdateInvoiceTypeArgs
  ): Promise<InvoiceType | null> {
    try {
      return await this.service.updateInvoiceType({
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

  @graphql.Mutation(() => InvoiceType)
  @nestAccessControl.UseRoles({
    resource: "InvoiceType",
    action: "delete",
    possession: "any",
  })
  async deleteInvoiceType(
    @graphql.Args() args: DeleteInvoiceTypeArgs
  ): Promise<InvoiceType | null> {
    try {
      return await this.service.deleteInvoiceType(args);
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
    @graphql.Parent() parent: InvoiceType,
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
    @graphql.Parent() parent: InvoiceType,
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
    @graphql.Parent() parent: InvoiceType,
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
    @graphql.Parent() parent: InvoiceType,
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
    @graphql.Parent() parent: InvoiceType,
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
    @graphql.Parent() parent: InvoiceType
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
