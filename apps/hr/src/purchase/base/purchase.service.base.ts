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
  Purchase as PrismaPurchase,
  PurchaseDetail as PrismaPurchaseDetail,
  PurchaseReturn as PrismaPurchaseReturn,
  CashRepository as PrismaCashRepository,
  InvoiceType as PrismaInvoiceType,
  PaymentType as PrismaPaymentType,
  PurchasePriceType as PrismaPurchasePriceType,
  Store as PrismaStore,
  Supplier as PrismaSupplier,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class PurchaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PurchaseCountArgs, "select">): Promise<number> {
    return this.prisma.purchase.count(args);
  }

  async purchases(
    args: Prisma.PurchaseFindManyArgs
  ): Promise<PrismaPurchase[]> {
    return this.prisma.purchase.findMany(args);
  }
  async purchase(
    args: Prisma.PurchaseFindUniqueArgs
  ): Promise<PrismaPurchase | null> {
    return this.prisma.purchase.findUnique(args);
  }
  async createPurchase(
    args: Prisma.PurchaseCreateArgs
  ): Promise<PrismaPurchase> {
    return this.prisma.purchase.create(args);
  }
  async updatePurchase(
    args: Prisma.PurchaseUpdateArgs
  ): Promise<PrismaPurchase> {
    return this.prisma.purchase.update(args);
  }
  async deletePurchase(
    args: Prisma.PurchaseDeleteArgs
  ): Promise<PrismaPurchase> {
    return this.prisma.purchase.delete(args);
  }

  async findPurchaseDetails(
    parentId: string,
    args: Prisma.PurchaseDetailFindManyArgs
  ): Promise<PrismaPurchaseDetail[]> {
    return this.prisma.purchase
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .purchaseDetails(args);
  }

  async findPurchaseReturns(
    parentId: string,
    args: Prisma.PurchaseReturnFindManyArgs
  ): Promise<PrismaPurchaseReturn[]> {
    return this.prisma.purchase
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .purchaseReturns(args);
  }

  async getCashRepositoryId(
    parentId: string
  ): Promise<PrismaCashRepository | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .cashRepositoryId();
  }

  async getInvoiceTypeId(parentId: string): Promise<PrismaInvoiceType | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .invoiceTypeId();
  }

  async getPaymentTypeId(parentId: string): Promise<PrismaPaymentType | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .paymentTypeId();
  }

  async getPurchasePriceTypeId(
    parentId: string
  ): Promise<PrismaPurchasePriceType | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .purchasePriceTypeId();
  }

  async getStoreId(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .storeId();
  }

  async getSupplierId(parentId: string): Promise<PrismaSupplier | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .supplierId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.purchase
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}