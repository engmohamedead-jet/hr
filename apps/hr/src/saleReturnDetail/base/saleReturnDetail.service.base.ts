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
  SaleReturnDetail as PrismaSaleReturnDetail,
  Product as PrismaProduct,
  ProductVariant as PrismaProductVariant,
  SalePriceType as PrismaSalePriceType,
  SaleReturn as PrismaSaleReturn,
  Tenant as PrismaTenant,
  Unit as PrismaUnit,
} from "@prisma/client";

export class SaleReturnDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SaleReturnDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.saleReturnDetail.count(args);
  }

  async saleReturnDetails(
    args: Prisma.SaleReturnDetailFindManyArgs
  ): Promise<PrismaSaleReturnDetail[]> {
    return this.prisma.saleReturnDetail.findMany(args);
  }
  async saleReturnDetail(
    args: Prisma.SaleReturnDetailFindUniqueArgs
  ): Promise<PrismaSaleReturnDetail | null> {
    return this.prisma.saleReturnDetail.findUnique(args);
  }
  async createSaleReturnDetail(
    args: Prisma.SaleReturnDetailCreateArgs
  ): Promise<PrismaSaleReturnDetail> {
    return this.prisma.saleReturnDetail.create(args);
  }
  async updateSaleReturnDetail(
    args: Prisma.SaleReturnDetailUpdateArgs
  ): Promise<PrismaSaleReturnDetail> {
    return this.prisma.saleReturnDetail.update(args);
  }
  async deleteSaleReturnDetail(
    args: Prisma.SaleReturnDetailDeleteArgs
  ): Promise<PrismaSaleReturnDetail> {
    return this.prisma.saleReturnDetail.delete(args);
  }

  async getProductId(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.saleReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .productId();
  }

  async getProductVariantId(
    parentId: string
  ): Promise<PrismaProductVariant | null> {
    return this.prisma.saleReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .productVariantId();
  }

  async getSalePriceType(
    parentId: string
  ): Promise<PrismaSalePriceType | null> {
    return this.prisma.saleReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .salePriceType();
  }

  async getSaleReturnId(parentId: string): Promise<PrismaSaleReturn | null> {
    return this.prisma.saleReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .saleReturnId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.saleReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }

  async getUnitId(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.saleReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .unitId();
  }
}
