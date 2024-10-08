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
import { CashRepository } from "./CashRepository";
import { CashRepositoryCountArgs } from "./CashRepositoryCountArgs";
import { CashRepositoryFindManyArgs } from "./CashRepositoryFindManyArgs";
import { CashRepositoryFindUniqueArgs } from "./CashRepositoryFindUniqueArgs";
import { CreateCashRepositoryArgs } from "./CreateCashRepositoryArgs";
import { UpdateCashRepositoryArgs } from "./UpdateCashRepositoryArgs";
import { DeleteCashRepositoryArgs } from "./DeleteCashRepositoryArgs";
import { PaymentVoucherFindManyArgs } from "../../paymentVoucher/base/PaymentVoucherFindManyArgs";
import { PaymentVoucher } from "../../paymentVoucher/base/PaymentVoucher";
import { PurchaseReturnFindManyArgs } from "../../purchaseReturn/base/PurchaseReturnFindManyArgs";
import { PurchaseReturn } from "../../purchaseReturn/base/PurchaseReturn";
import { ReceiptVoucherFindManyArgs } from "../../receiptVoucher/base/ReceiptVoucherFindManyArgs";
import { ReceiptVoucher } from "../../receiptVoucher/base/ReceiptVoucher";
import { SaleOrderFindManyArgs } from "../../saleOrder/base/SaleOrderFindManyArgs";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { SaleReturnFindManyArgs } from "../../saleReturn/base/SaleReturnFindManyArgs";
import { SaleReturn } from "../../saleReturn/base/SaleReturn";
import { SaleFindManyArgs } from "../../sale/base/SaleFindManyArgs";
import { Sale } from "../../sale/base/Sale";
import { Purchase } from "../../purchase/base/Purchase";
import { Tenant } from "../../tenant/base/Tenant";
import { CashRepositoryService } from "../cashRepository.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CashRepository)
export class CashRepositoryResolverBase {
  constructor(
    protected readonly service: CashRepositoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "any",
  })
  async _cashRepositoriesMeta(
    @graphql.Args() args: CashRepositoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CashRepository])
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "any",
  })
  async cashRepositories(
    @graphql.Args() args: CashRepositoryFindManyArgs
  ): Promise<CashRepository[]> {
    return this.service.cashRepositories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CashRepository, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "own",
  })
  async cashRepository(
    @graphql.Args() args: CashRepositoryFindUniqueArgs
  ): Promise<CashRepository | null> {
    const result = await this.service.cashRepository(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CashRepository)
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "create",
    possession: "any",
  })
  async createCashRepository(
    @graphql.Args() args: CreateCashRepositoryArgs
  ): Promise<CashRepository> {
    return await this.service.createCashRepository({
      ...args,
      data: {
        ...args.data,

        parentCashRepositoryId: args.data.parentCashRepositoryId
          ? {
              connect: args.data.parentCashRepositoryId,
            }
          : undefined,

        purchases: args.data.purchases
          ? {
              connect: args.data.purchases,
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
  @graphql.Mutation(() => CashRepository)
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async updateCashRepository(
    @graphql.Args() args: UpdateCashRepositoryArgs
  ): Promise<CashRepository | null> {
    try {
      return await this.service.updateCashRepository({
        ...args,
        data: {
          ...args.data,

          parentCashRepositoryId: args.data.parentCashRepositoryId
            ? {
                connect: args.data.parentCashRepositoryId,
              }
            : undefined,

          purchases: args.data.purchases
            ? {
                connect: args.data.purchases,
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

  @graphql.Mutation(() => CashRepository)
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "delete",
    possession: "any",
  })
  async deleteCashRepository(
    @graphql.Args() args: DeleteCashRepositoryArgs
  ): Promise<CashRepository | null> {
    try {
      return await this.service.deleteCashRepository(args);
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
  @graphql.ResolveField(() => [CashRepository], { name: "cashRepositories" })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "any",
  })
  async findCashRepositories(
    @graphql.Parent() parent: CashRepository,
    @graphql.Args() args: CashRepositoryFindManyArgs
  ): Promise<CashRepository[]> {
    const results = await this.service.findCashRepositories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PaymentVoucher], { name: "paymentVouchers" })
  @nestAccessControl.UseRoles({
    resource: "PaymentVoucher",
    action: "read",
    possession: "any",
  })
  async findPaymentVouchers(
    @graphql.Parent() parent: CashRepository,
    @graphql.Args() args: PaymentVoucherFindManyArgs
  ): Promise<PaymentVoucher[]> {
    const results = await this.service.findPaymentVouchers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PurchaseReturn], { name: "purchaseReturns" })
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturn",
    action: "read",
    possession: "any",
  })
  async findPurchaseReturns(
    @graphql.Parent() parent: CashRepository,
    @graphql.Args() args: PurchaseReturnFindManyArgs
  ): Promise<PurchaseReturn[]> {
    const results = await this.service.findPurchaseReturns(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ReceiptVoucher], { name: "receiptVouchers" })
  @nestAccessControl.UseRoles({
    resource: "ReceiptVoucher",
    action: "read",
    possession: "any",
  })
  async findReceiptVouchers(
    @graphql.Parent() parent: CashRepository,
    @graphql.Args() args: ReceiptVoucherFindManyArgs
  ): Promise<ReceiptVoucher[]> {
    const results = await this.service.findReceiptVouchers(parent.id, args);

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
    @graphql.Parent() parent: CashRepository,
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
    @graphql.Parent() parent: CashRepository,
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
    @graphql.Parent() parent: CashRepository,
    @graphql.Args() args: SaleFindManyArgs
  ): Promise<Sale[]> {
    const results = await this.service.findSales(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CashRepository, {
    nullable: true,
    name: "parentCashRepositoryId",
  })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "any",
  })
  async getParentCashRepositoryId(
    @graphql.Parent() parent: CashRepository
  ): Promise<CashRepository | null> {
    const result = await this.service.getParentCashRepositoryId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Purchase, {
    nullable: true,
    name: "purchases",
  })
  @nestAccessControl.UseRoles({
    resource: "Purchase",
    action: "read",
    possession: "any",
  })
  async getPurchases(
    @graphql.Parent() parent: CashRepository
  ): Promise<Purchase | null> {
    const result = await this.service.getPurchases(parent.id);

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
    @graphql.Parent() parent: CashRepository
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
