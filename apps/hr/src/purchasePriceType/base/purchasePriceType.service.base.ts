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
  PurchasePriceType as PrismaPurchasePriceType,
  PurchaseDetail as PrismaPurchaseDetail,
  PurchaseReturnDetail as PrismaPurchaseReturnDetail,
  PurchaseReturn as PrismaPurchaseReturn,
  Purchase as PrismaPurchase,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class PurchasePriceTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PurchasePriceTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.purchasePriceType.count(args);
  }

  async purchasePriceTypes(
    args: Prisma.PurchasePriceTypeFindManyArgs
  ): Promise<PrismaPurchasePriceType[]> {
    return this.prisma.purchasePriceType.findMany(args);
  }
  async purchasePriceType(
    args: Prisma.PurchasePriceTypeFindUniqueArgs
  ): Promise<PrismaPurchasePriceType | null> {
    return this.prisma.purchasePriceType.findUnique(args);
  }
  async createPurchasePriceType(
    args: Prisma.PurchasePriceTypeCreateArgs
  ): Promise<PrismaPurchasePriceType> {
    return this.prisma.purchasePriceType.create(args);
  }
  async updatePurchasePriceType(
    args: Prisma.PurchasePriceTypeUpdateArgs
  ): Promise<PrismaPurchasePriceType> {
    return this.prisma.purchasePriceType.update(args);
  }
  async deletePurchasePriceType(
    args: Prisma.PurchasePriceTypeDeleteArgs
  ): Promise<PrismaPurchasePriceType> {
    return this.prisma.purchasePriceType.delete(args);
  }

  async getPurchaseDetails(
    parentId: number
  ): Promise<PrismaPurchaseDetail | null> {
    return this.prisma.purchasePriceType
      .findUnique({
        where: { id: parentId },
      })
      .purchaseDetails();
  }

  async getPurchaseReturnDetails(
    parentId: number
  ): Promise<PrismaPurchaseReturnDetail | null> {
    return this.prisma.purchasePriceType
      .findUnique({
        where: { id: parentId },
      })
      .purchaseReturnDetails();
  }

  async getPurchaseReturns(
    parentId: number
  ): Promise<PrismaPurchaseReturn | null> {
    return this.prisma.purchasePriceType
      .findUnique({
        where: { id: parentId },
      })
      .purchaseReturns();
  }

  async getPurchases(parentId: number): Promise<PrismaPurchase | null> {
    return this.prisma.purchasePriceType
      .findUnique({
        where: { id: parentId },
      })
      .purchases();
  }

  async getTenantId(parentId: number): Promise<PrismaTenant | null> {
    return this.prisma.purchasePriceType
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
