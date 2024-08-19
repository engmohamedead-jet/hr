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
import { ProductCategory } from "./ProductCategory";
import { ProductCategoryCountArgs } from "./ProductCategoryCountArgs";
import { ProductCategoryFindManyArgs } from "./ProductCategoryFindManyArgs";
import { ProductCategoryFindUniqueArgs } from "./ProductCategoryFindUniqueArgs";
import { CreateProductCategoryArgs } from "./CreateProductCategoryArgs";
import { UpdateProductCategoryArgs } from "./UpdateProductCategoryArgs";
import { DeleteProductCategoryArgs } from "./DeleteProductCategoryArgs";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { Tenant } from "../../tenant/base/Tenant";
import { ProductCategoryService } from "../productCategory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductCategory)
export class ProductCategoryResolverBase {
  constructor(
    protected readonly service: ProductCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async _productCategoriesMeta(
    @graphql.Args() args: ProductCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProductCategory])
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async productCategories(
    @graphql.Args() args: ProductCategoryFindManyArgs
  ): Promise<ProductCategory[]> {
    return this.service.productCategories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductCategory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "own",
  })
  async productCategory(
    @graphql.Args() args: ProductCategoryFindUniqueArgs
  ): Promise<ProductCategory | null> {
    const result = await this.service.productCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "create",
    possession: "any",
  })
  async createProductCategory(
    @graphql.Args() args: CreateProductCategoryArgs
  ): Promise<ProductCategory> {
    return await this.service.createProductCategory({
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
  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "update",
    possession: "any",
  })
  async updateProductCategory(
    @graphql.Args() args: UpdateProductCategoryArgs
  ): Promise<ProductCategory | null> {
    try {
      return await this.service.updateProductCategory({
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

  @graphql.Mutation(() => ProductCategory)
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "delete",
    possession: "any",
  })
  async deleteProductCategory(
    @graphql.Args() args: DeleteProductCategoryArgs
  ): Promise<ProductCategory | null> {
    try {
      return await this.service.deleteProductCategory(args);
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
  @graphql.ResolveField(() => [Product], { name: "products" })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @graphql.Parent() parent: ProductCategory,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

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
    @graphql.Parent() parent: ProductCategory
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
