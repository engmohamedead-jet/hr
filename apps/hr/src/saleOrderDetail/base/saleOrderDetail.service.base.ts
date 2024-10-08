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
  SaleOrderDetail as PrismaSaleOrderDetail,
  Product as PrismaProduct,
  ProductVariant as PrismaProductVariant,
  SaleOrder as PrismaSaleOrder,
  SalePriceType as PrismaSalePriceType,
  Tenant as PrismaTenant,
  Unit as PrismaUnit,
} from "@prisma/client";

export class SaleOrderDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SaleOrderDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.saleOrderDetail.count(args);
  }

  async saleOrderDetails(
    args: Prisma.SaleOrderDetailFindManyArgs
  ): Promise<PrismaSaleOrderDetail[]> {
    return this.prisma.saleOrderDetail.findMany(args);
  }
  async saleOrderDetail(
    args: Prisma.SaleOrderDetailFindUniqueArgs
  ): Promise<PrismaSaleOrderDetail | null> {
    return this.prisma.saleOrderDetail.findUnique(args);
  }
  async createSaleOrderDetail(
    args: Prisma.SaleOrderDetailCreateArgs
  ): Promise<PrismaSaleOrderDetail> {
    return this.prisma.saleOrderDetail.create(args);
  }
  async updateSaleOrderDetail(
    args: Prisma.SaleOrderDetailUpdateArgs
  ): Promise<PrismaSaleOrderDetail> {
    return this.prisma.saleOrderDetail.update(args);
  }
  async deleteSaleOrderDetail(
    args: Prisma.SaleOrderDetailDeleteArgs
  ): Promise<PrismaSaleOrderDetail> {
    return this.prisma.saleOrderDetail.delete(args);
  }

  async getProductId(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.saleOrderDetail
      .findUnique({
        where: { id: parentId },
      })
      .productId();
  }

  async getProductVariantId(
    parentId: string
  ): Promise<PrismaProductVariant | null> {
    return this.prisma.saleOrderDetail
      .findUnique({
        where: { id: parentId },
      })
      .productVariantId();
  }

  async getSaleOrder(parentId: string): Promise<PrismaSaleOrder | null> {
    return this.prisma.saleOrderDetail
      .findUnique({
        where: { id: parentId },
      })
      .saleOrder();
  }

  async getSalePriceTypeId(
    parentId: string
  ): Promise<PrismaSalePriceType | null> {
    return this.prisma.saleOrderDetail
      .findUnique({
        where: { id: parentId },
      })
      .salePriceTypeId();
  }

  async getTenant(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.saleOrderDetail
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }

  async getUnitId(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.saleOrderDetail
      .findUnique({
        where: { id: parentId },
      })
      .unitId();
  }
}
