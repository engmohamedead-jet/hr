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
  Currency as PrismaCurrency,
  Customer as PrismaCustomer,
  PaymentVoucher as PrismaPaymentVoucher,
  ReceiptVoucher as PrismaReceiptVoucher,
  SalePayment as PrismaSalePayment,
  Supplier as PrismaSupplier,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class CurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CurrencyCountArgs, "select">): Promise<number> {
    return this.prisma.currency.count(args);
  }

  async currencies(
    args: Prisma.CurrencyFindManyArgs
  ): Promise<PrismaCurrency[]> {
    return this.prisma.currency.findMany(args);
  }
  async currency(
    args: Prisma.CurrencyFindUniqueArgs
  ): Promise<PrismaCurrency | null> {
    return this.prisma.currency.findUnique(args);
  }
  async createCurrency(
    args: Prisma.CurrencyCreateArgs
  ): Promise<PrismaCurrency> {
    return this.prisma.currency.create(args);
  }
  async updateCurrency(
    args: Prisma.CurrencyUpdateArgs
  ): Promise<PrismaCurrency> {
    return this.prisma.currency.update(args);
  }
  async deleteCurrency(
    args: Prisma.CurrencyDeleteArgs
  ): Promise<PrismaCurrency> {
    return this.prisma.currency.delete(args);
  }

  async findCustomers(
    parentId: string,
    args: Prisma.CustomerFindManyArgs
  ): Promise<PrismaCustomer[]> {
    return this.prisma.currency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customers(args);
  }

  async findPaymentVouchers(
    parentId: string,
    args: Prisma.PaymentVoucherFindManyArgs
  ): Promise<PrismaPaymentVoucher[]> {
    return this.prisma.currency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paymentVouchers(args);
  }

  async findReceiptVouchers(
    parentId: string,
    args: Prisma.ReceiptVoucherFindManyArgs
  ): Promise<PrismaReceiptVoucher[]> {
    return this.prisma.currency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .receiptVouchers(args);
  }

  async findSalePayments(
    parentId: string,
    args: Prisma.SalePaymentFindManyArgs
  ): Promise<PrismaSalePayment[]> {
    return this.prisma.currency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .salePayments(args);
  }

  async findSuppliers(
    parentId: string,
    args: Prisma.SupplierFindManyArgs
  ): Promise<PrismaSupplier[]> {
    return this.prisma.currency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .suppliers(args);
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.currency
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
