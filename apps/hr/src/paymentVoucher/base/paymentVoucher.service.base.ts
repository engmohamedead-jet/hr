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
  PaymentVoucher as PrismaPaymentVoucher,
  AccountTransaction as PrismaAccountTransaction,
  CashRepository as PrismaCashRepository,
  Currency as PrismaCurrency,
  Employee as PrismaEmployee,
  ExpenseItem as PrismaExpenseItem,
  Supplier as PrismaSupplier,
  Tenant as PrismaTenant,
  VoucherType as PrismaVoucherType,
} from "@prisma/client";

export class PaymentVoucherServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentVoucherCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentVoucher.count(args);
  }

  async paymentVouchers(
    args: Prisma.PaymentVoucherFindManyArgs
  ): Promise<PrismaPaymentVoucher[]> {
    return this.prisma.paymentVoucher.findMany(args);
  }
  async paymentVoucher(
    args: Prisma.PaymentVoucherFindUniqueArgs
  ): Promise<PrismaPaymentVoucher | null> {
    return this.prisma.paymentVoucher.findUnique(args);
  }
  async createPaymentVoucher(
    args: Prisma.PaymentVoucherCreateArgs
  ): Promise<PrismaPaymentVoucher> {
    return this.prisma.paymentVoucher.create(args);
  }
  async updatePaymentVoucher(
    args: Prisma.PaymentVoucherUpdateArgs
  ): Promise<PrismaPaymentVoucher> {
    return this.prisma.paymentVoucher.update(args);
  }
  async deletePaymentVoucher(
    args: Prisma.PaymentVoucherDeleteArgs
  ): Promise<PrismaPaymentVoucher> {
    return this.prisma.paymentVoucher.delete(args);
  }

  async getAccountTransactionId(
    parentId: string
  ): Promise<PrismaAccountTransaction | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .accountTransactionId();
  }

  async getCashRepositoryId(
    parentId: string
  ): Promise<PrismaCashRepository | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .cashRepositoryId();
  }

  async getCurrency(parentId: string): Promise<PrismaCurrency | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .currency();
  }

  async getEmployeeId(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .employeeId();
  }

  async getExpenseItemId(parentId: string): Promise<PrismaExpenseItem | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .expenseItemId();
  }

  async getSupplier(parentId: string): Promise<PrismaSupplier | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .supplier();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }

  async getVoucherTypeId(parentId: string): Promise<PrismaVoucherType | null> {
    return this.prisma.paymentVoucher
      .findUnique({
        where: { id: parentId },
      })
      .voucherTypeId();
  }
}
