/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ProductCategory as PrismaProductCategory,
  Product as PrismaProduct,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class ProductCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductCategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productCategory.count(args);
  }

  async productCategories(
    args: Prisma.ProductCategoryFindManyArgs
  ): Promise<PrismaProductCategory[]> {
    return this.prisma.productCategory.findMany(args);
  }
  async productCategory(
    args: Prisma.ProductCategoryFindUniqueArgs
  ): Promise<PrismaProductCategory | null> {
    return this.prisma.productCategory.findUnique(args);
  }
  async createProductCategory(
    args: Prisma.ProductCategoryCreateArgs
  ): Promise<PrismaProductCategory> {
    return this.prisma.productCategory.create(args);
  }
  async updateProductCategory(
    args: Prisma.ProductCategoryUpdateArgs
  ): Promise<PrismaProductCategory> {
    return this.prisma.productCategory.update(args);
  }
  async deleteProductCategory(
    args: Prisma.ProductCategoryDeleteArgs
  ): Promise<PrismaProductCategory> {
    return this.prisma.productCategory.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.productCategory
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.productCategory
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
