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
  Product as PrismaProduct,
  ProductGroup as PrismaProductGroup,
  Store as PrismaStore,
  Unit as PrismaUnit,
  ProductCategory as PrismaProductCategory,
  ProductDepartment as PrismaProductDepartment,
  ProductType as PrismaProductType,
  SaleTax as PrismaSaleTax,
} from "@prisma/client";

export class ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProductCountArgs, "select">): Promise<number> {
    return this.prisma.product.count(args);
  }

  async products(args: Prisma.ProductFindManyArgs): Promise<PrismaProduct[]> {
    return this.prisma.product.findMany(args);
  }
  async product(
    args: Prisma.ProductFindUniqueArgs
  ): Promise<PrismaProduct | null> {
    return this.prisma.product.findUnique(args);
  }
  async createProduct(args: Prisma.ProductCreateArgs): Promise<PrismaProduct> {
    return this.prisma.product.create(args);
  }
  async updateProduct(args: Prisma.ProductUpdateArgs): Promise<PrismaProduct> {
    return this.prisma.product.update(args);
  }
  async deleteProduct(args: Prisma.ProductDeleteArgs): Promise<PrismaProduct> {
    return this.prisma.product.delete(args);
  }

  async getProductGroupId(
    parentId: string
  ): Promise<PrismaProductGroup | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .ProductGroupId();
  }

  async getDefaultStoreId(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .defaultStoreId();
  }

  async getDefaultUnitId(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .defaultUnitId();
  }

  async getProductCategoryId(
    parentId: string
  ): Promise<PrismaProductCategory | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .productCategoryId();
  }

  async getProductDepartmentId(
    parentId: string
  ): Promise<PrismaProductDepartment | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .productDepartmentId();
  }

  async getProductTypeId(parentId: string): Promise<PrismaProductType | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .productTypeId();
  }

  async getSaleTaxId(parentId: string): Promise<PrismaSaleTax | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .saleTaxId();
  }
}
