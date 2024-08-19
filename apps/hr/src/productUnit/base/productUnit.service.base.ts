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
  ProductUnit as PrismaProductUnit,
  Unit as PrismaUnit,
  Product as PrismaProduct,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class ProductUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductUnitCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productUnit.count(args);
  }

  async productUnits(
    args: Prisma.ProductUnitFindManyArgs
  ): Promise<PrismaProductUnit[]> {
    return this.prisma.productUnit.findMany(args);
  }
  async productUnit(
    args: Prisma.ProductUnitFindUniqueArgs
  ): Promise<PrismaProductUnit | null> {
    return this.prisma.productUnit.findUnique(args);
  }
  async createProductUnit(
    args: Prisma.ProductUnitCreateArgs
  ): Promise<PrismaProductUnit> {
    return this.prisma.productUnit.create(args);
  }
  async updateProductUnit(
    args: Prisma.ProductUnitUpdateArgs
  ): Promise<PrismaProductUnit> {
    return this.prisma.productUnit.update(args);
  }
  async deleteProductUnit(
    args: Prisma.ProductUnitDeleteArgs
  ): Promise<PrismaProductUnit> {
    return this.prisma.productUnit.delete(args);
  }

  async getCompareUnitId(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.productUnit
      .findUnique({
        where: { id: parentId },
      })
      .compareUnitId();
  }

  async getProductId(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.productUnit
      .findUnique({
        where: { id: parentId },
      })
      .productId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.productUnit
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }

  async getUnitId(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.productUnit
      .findUnique({
        where: { id: parentId },
      })
      .unitId();
  }
}