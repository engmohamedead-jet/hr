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
  Supplier as PrismaSupplier,
  PaymentVoucher as PrismaPaymentVoucher,
  PurchaseReturn as PrismaPurchaseReturn,
  Purchase as PrismaPurchase,
  Currency as PrismaCurrency,
  Customer as PrismaCustomer,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class SupplierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SupplierCountArgs, "select">): Promise<number> {
    return this.prisma.supplier.count(args);
  }

  async suppliers(
    args: Prisma.SupplierFindManyArgs
  ): Promise<PrismaSupplier[]> {
    return this.prisma.supplier.findMany(args);
  }
  async supplier(
    args: Prisma.SupplierFindUniqueArgs
  ): Promise<PrismaSupplier | null> {
    return this.prisma.supplier.findUnique(args);
  }
  async createSupplier(
    args: Prisma.SupplierCreateArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.create(args);
  }
  async updateSupplier(
    args: Prisma.SupplierUpdateArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.update(args);
  }
  async deleteSupplier(
    args: Prisma.SupplierDeleteArgs
  ): Promise<PrismaSupplier> {
    return this.prisma.supplier.delete(args);
  }

  async findPaymentVouchers(
    parentId: string,
    args: Prisma.PaymentVoucherFindManyArgs
  ): Promise<PrismaPaymentVoucher[]> {
    return this.prisma.supplier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paymentVouchers(args);
  }

  async findPurchaseReturns(
    parentId: string,
    args: Prisma.PurchaseReturnFindManyArgs
  ): Promise<PrismaPurchaseReturn[]> {
    return this.prisma.supplier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .purchaseReturns(args);
  }

  async findPurchases(
    parentId: string,
    args: Prisma.PurchaseFindManyArgs
  ): Promise<PrismaPurchase[]> {
    return this.prisma.supplier
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .purchases(args);
  }

  async getCurrency(parentId: string): Promise<PrismaCurrency | null> {
    return this.prisma.supplier
      .findUnique({
        where: { id: parentId },
      })
      .currency();
  }

  async getCustomerId(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.supplier
      .findUnique({
        where: { id: parentId },
      })
      .customerId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.supplier
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
