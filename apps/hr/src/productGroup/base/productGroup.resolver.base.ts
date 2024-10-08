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
import { ProductGroup } from "./ProductGroup";
import { ProductGroupCountArgs } from "./ProductGroupCountArgs";
import { ProductGroupFindManyArgs } from "./ProductGroupFindManyArgs";
import { ProductGroupFindUniqueArgs } from "./ProductGroupFindUniqueArgs";
import { CreateProductGroupArgs } from "./CreateProductGroupArgs";
import { UpdateProductGroupArgs } from "./UpdateProductGroupArgs";
import { DeleteProductGroupArgs } from "./DeleteProductGroupArgs";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { Account } from "../../account/base/Account";
import { SaleTax } from "../../saleTax/base/SaleTax";
import { Tenant } from "../../tenant/base/Tenant";
import { ProductGroupService } from "../productGroup.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductGroup)
export class ProductGroupResolverBase {
  constructor(
    protected readonly service: ProductGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async _productGroupsMeta(
    @graphql.Args() args: ProductGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProductGroup])
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async productGroups(
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    return this.service.productGroups(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "own",
  })
  async productGroup(
    @graphql.Args() args: ProductGroupFindUniqueArgs
  ): Promise<ProductGroup | null> {
    const result = await this.service.productGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductGroup)
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "create",
    possession: "any",
  })
  async createProductGroup(
    @graphql.Args() args: CreateProductGroupArgs
  ): Promise<ProductGroup> {
    return await this.service.createProductGroup({
      ...args,
      data: {
        ...args.data,

        costOfGoodsSoldAccount: args.data.costOfGoodsSoldAccount
          ? {
              connect: args.data.costOfGoodsSoldAccount,
            }
          : undefined,

        inventoryAccount: args.data.inventoryAccount
          ? {
              connect: args.data.inventoryAccount,
            }
          : undefined,

        parentProductGroupId: args.data.parentProductGroupId
          ? {
              connect: args.data.parentProductGroupId,
            }
          : undefined,

        purchaseAccountId: args.data.purchaseAccountId
          ? {
              connect: args.data.purchaseAccountId,
            }
          : undefined,

        purchaseDiscountAccountId: args.data.purchaseDiscountAccountId
          ? {
              connect: args.data.purchaseDiscountAccountId,
            }
          : undefined,

        purchaseReturnAccountId: args.data.purchaseReturnAccountId
          ? {
              connect: args.data.purchaseReturnAccountId,
            }
          : undefined,

        saleAccountId: args.data.saleAccountId
          ? {
              connect: args.data.saleAccountId,
            }
          : undefined,

        saleDiscountAccountId: args.data.saleDiscountAccountId
          ? {
              connect: args.data.saleDiscountAccountId,
            }
          : undefined,

        saleReturnAccountId: args.data.saleReturnAccountId
          ? {
              connect: args.data.saleReturnAccountId,
            }
          : undefined,

        saleTaxId: args.data.saleTaxId
          ? {
              connect: args.data.saleTaxId,
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
  @graphql.Mutation(() => ProductGroup)
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "update",
    possession: "any",
  })
  async updateProductGroup(
    @graphql.Args() args: UpdateProductGroupArgs
  ): Promise<ProductGroup | null> {
    try {
      return await this.service.updateProductGroup({
        ...args,
        data: {
          ...args.data,

          costOfGoodsSoldAccount: args.data.costOfGoodsSoldAccount
            ? {
                connect: args.data.costOfGoodsSoldAccount,
              }
            : undefined,

          inventoryAccount: args.data.inventoryAccount
            ? {
                connect: args.data.inventoryAccount,
              }
            : undefined,

          parentProductGroupId: args.data.parentProductGroupId
            ? {
                connect: args.data.parentProductGroupId,
              }
            : undefined,

          purchaseAccountId: args.data.purchaseAccountId
            ? {
                connect: args.data.purchaseAccountId,
              }
            : undefined,

          purchaseDiscountAccountId: args.data.purchaseDiscountAccountId
            ? {
                connect: args.data.purchaseDiscountAccountId,
              }
            : undefined,

          purchaseReturnAccountId: args.data.purchaseReturnAccountId
            ? {
                connect: args.data.purchaseReturnAccountId,
              }
            : undefined,

          saleAccountId: args.data.saleAccountId
            ? {
                connect: args.data.saleAccountId,
              }
            : undefined,

          saleDiscountAccountId: args.data.saleDiscountAccountId
            ? {
                connect: args.data.saleDiscountAccountId,
              }
            : undefined,

          saleReturnAccountId: args.data.saleReturnAccountId
            ? {
                connect: args.data.saleReturnAccountId,
              }
            : undefined,

          saleTaxId: args.data.saleTaxId
            ? {
                connect: args.data.saleTaxId,
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

  @graphql.Mutation(() => ProductGroup)
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "delete",
    possession: "any",
  })
  async deleteProductGroup(
    @graphql.Args() args: DeleteProductGroupArgs
  ): Promise<ProductGroup | null> {
    try {
      return await this.service.deleteProductGroup(args);
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
  @graphql.ResolveField(() => [ProductGroup], { name: "productGroups" })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findProductGroups(
    @graphql.Parent() parent: ProductGroup,
    @graphql.Args() args: ProductGroupFindManyArgs
  ): Promise<ProductGroup[]> {
    const results = await this.service.findProductGroups(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product], { name: "products" })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @graphql.Parent() parent: ProductGroup,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "costOfGoodsSoldAccount",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getCostOfGoodsSoldAccount(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getCostOfGoodsSoldAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "inventoryAccount",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getInventoryAccount(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getInventoryAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProductGroup, {
    nullable: true,
    name: "parentProductGroupId",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async getParentProductGroupId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<ProductGroup | null> {
    const result = await this.service.getParentProductGroupId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "purchaseAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getPurchaseAccountId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getPurchaseAccountId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "purchaseDiscountAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getPurchaseDiscountAccountId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getPurchaseDiscountAccountId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "purchaseReturnAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getPurchaseReturnAccountId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getPurchaseReturnAccountId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "saleAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getSaleAccountId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getSaleAccountId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "saleDiscountAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getSaleDiscountAccountId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getSaleDiscountAccountId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "saleReturnAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getSaleReturnAccountId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<Account | null> {
    const result = await this.service.getSaleReturnAccountId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SaleTax, {
    nullable: true,
    name: "saleTaxId",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "read",
    possession: "any",
  })
  async getSaleTaxId(
    @graphql.Parent() parent: ProductGroup
  ): Promise<SaleTax | null> {
    const result = await this.service.getSaleTaxId(parent.id);

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
    @graphql.Parent() parent: ProductGroup
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
