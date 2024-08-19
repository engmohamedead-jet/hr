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
import { Account } from "./Account";
import { AccountCountArgs } from "./AccountCountArgs";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountFindUniqueArgs } from "./AccountFindUniqueArgs";
import { CreateAccountArgs } from "./CreateAccountArgs";
import { UpdateAccountArgs } from "./UpdateAccountArgs";
import { DeleteAccountArgs } from "./DeleteAccountArgs";
import { ProductGroupFindManyArgs } from "../../productGroup/base/ProductGroupFindManyArgs";
import { ProductGroup } from "../../productGroup/base/ProductGroup";
import { InstallmentSaleFeeFindManyArgs } from "../../installmentSaleFee/base/InstallmentSaleFeeFindManyArgs";
import { InstallmentSaleFee } from "../../installmentSaleFee/base/InstallmentSaleFee";
import { SalePersonFindManyArgs } from "../../salePerson/base/SalePersonFindManyArgs";
import { SalePerson } from "../../salePerson/base/SalePerson";
import { Tenant } from "../../tenant/base/Tenant";
import { AccountService } from "../account.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Account)
export class AccountResolverBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async _accountsMeta(
    @graphql.Args() args: AccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Account])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async accounts(
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    return this.service.accounts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  async account(
    @graphql.Args() args: AccountFindUniqueArgs
  ): Promise<Account | null> {
    const result = await this.service.account(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  async createAccount(
    @graphql.Args() args: CreateAccountArgs
  ): Promise<Account> {
    return await this.service.createAccount({
      ...args,
      data: {
        ...args.data,

        parentAccountId: args.data.parentAccountId
          ? {
              connect: args.data.parentAccountId,
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
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateAccount(
    @graphql.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.updateAccount({
        ...args,
        data: {
          ...args.data,

          parentAccountId: args.data.parentAccountId
            ? {
                connect: args.data.parentAccountId,
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

  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  async deleteAccount(
    @graphql.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount(args);
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
  @graphql.ResolveField(() => [ProductGroup], {
    name: "saleReturnAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findSaleReturnAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findSaleReturnAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductGroup], {
    name: "aleAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findAleAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findAleAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductGroup], {
    name: "costOfGoodsSoldAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findCostOfGoodsSoldAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findCostOfGoodsSoldAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [InstallmentSaleFee], {
    name: "installmentSaleFees",
  })
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "read",
    possession: "any",
  })
  async findInstallmentSaleFees(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: InstallmentSaleFeeFindManyArgs
  ): Promise<InstallmentSaleFee[]> {
    const results = await this.service.findInstallmentSaleFees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductGroup], {
    name: "inventoryAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findInventoryAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findInventoryAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Account], { name: "parentAccounts" })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async findParentAccounts(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    const results = await this.service.findParentAccounts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductGroup], {
    name: "purchaseAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findPurchaseAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findPurchaseAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductGroup], {
    name: "purchaseDiscountAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findPurchaseDiscountAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findPurchaseDiscountAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductGroup], {
    name: "purchaseReturnAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findPurchaseReturnAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findPurchaseReturnAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductGroup], {
    name: "saleDiscountAccountProductGroups",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findSaleDiscountAccountProductGroups(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findSaleDiscountAccountProductGroups(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SalePerson], { name: "salePeople" })
  @nestAccessControl.UseRoles({
    resource: "SalePerson",
    action: "read",
    possession: "any",
  })
  async findSalePeople(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: SalePersonFindManyArgs
  ): Promise<SalePerson[]> {
    const results = await this.service.findSalePeople(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "parentAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getParentAccountId(
    @graphql.Parent() parent: Account
  ): Promise<Account | null> {
    const result = await this.service.getParentAccountId(parent.id);

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
  async getTenantId(@graphql.Parent() parent: Account): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
