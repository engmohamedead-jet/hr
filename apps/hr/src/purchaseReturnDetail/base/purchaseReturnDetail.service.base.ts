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
  PurchaseReturnDetail as PrismaPurchaseReturnDetail,
  Product as PrismaProduct,
  ProductVariant as PrismaProductVariant,
  PurchasePriceType as PrismaPurchasePriceType,
  PurchaseReturn as PrismaPurchaseReturn,
  Tenant as PrismaTenant,
  Unit as PrismaUnit,
} from "@prisma/client";

export class PurchaseReturnDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PurchaseReturnDetailCountArgs, "select">
  ): Promise<number> {
    return this.prisma.purchaseReturnDetail.count(args);
  }

  async purchaseReturnDetails(
    args: Prisma.PurchaseReturnDetailFindManyArgs
  ): Promise<PrismaPurchaseReturnDetail[]> {
    return this.prisma.purchaseReturnDetail.findMany(args);
  }
  async purchaseReturnDetail(
    args: Prisma.PurchaseReturnDetailFindUniqueArgs
  ): Promise<PrismaPurchaseReturnDetail | null> {
    return this.prisma.purchaseReturnDetail.findUnique(args);
  }
  async createPurchaseReturnDetail(
    args: Prisma.PurchaseReturnDetailCreateArgs
  ): Promise<PrismaPurchaseReturnDetail> {
    return this.prisma.purchaseReturnDetail.create(args);
  }
  async updatePurchaseReturnDetail(
    args: Prisma.PurchaseReturnDetailUpdateArgs
  ): Promise<PrismaPurchaseReturnDetail> {
    return this.prisma.purchaseReturnDetail.update(args);
  }
  async deletePurchaseReturnDetail(
    args: Prisma.PurchaseReturnDetailDeleteArgs
  ): Promise<PrismaPurchaseReturnDetail> {
    return this.prisma.purchaseReturnDetail.delete(args);
  }

  async getProductId(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.purchaseReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .productId();
  }

  async getProductVariantId(
    parentId: string
  ): Promise<PrismaProductVariant | null> {
    return this.prisma.purchaseReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .productVariantId();
  }

  async getPurchasePriceTypeId(
    parentId: string
  ): Promise<PrismaPurchasePriceType | null> {
    return this.prisma.purchaseReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .purchasePriceTypeId();
  }

  async getPurchaseReturnId(
    parentId: string
  ): Promise<PrismaPurchaseReturn | null> {
    return this.prisma.purchaseReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .purchaseReturnId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.purchaseReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }

  async getUnitId(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.purchaseReturnDetail
      .findUnique({
        where: { id: parentId },
      })
      .unitId();
  }
}
