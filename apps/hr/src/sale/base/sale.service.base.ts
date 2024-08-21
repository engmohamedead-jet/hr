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
  Sale as PrismaSale,
  SaleDetail as PrismaSaleDetail,
  SalePayment as PrismaSalePayment,
  SaleReturn as PrismaSaleReturn,
  CashRepository as PrismaCashRepository,
  Customer as PrismaCustomer,
  InvoiceType as PrismaInvoiceType,
  PaymentTerm as PrismaPaymentTerm,
  PaymentType as PrismaPaymentType,
  SalePriceType as PrismaSalePriceType,
  Store as PrismaStore,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class SaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SaleCountArgs, "select">): Promise<number> {
    return this.prisma.sale.count(args);
  }

  async sales(args: Prisma.SaleFindManyArgs): Promise<PrismaSale[]> {
    return this.prisma.sale.findMany(args);
  }
  async sale(args: Prisma.SaleFindUniqueArgs): Promise<PrismaSale | null> {
    return this.prisma.sale.findUnique(args);
  }
  async createSale(args: Prisma.SaleCreateArgs): Promise<PrismaSale> {
    return this.prisma.sale.create(args);
  }
  async updateSale(args: Prisma.SaleUpdateArgs): Promise<PrismaSale> {
    return this.prisma.sale.update(args);
  }
  async deleteSale(args: Prisma.SaleDeleteArgs): Promise<PrismaSale> {
    return this.prisma.sale.delete(args);
  }

  async findSaleDetails(
    parentId: string,
    args: Prisma.SaleDetailFindManyArgs
  ): Promise<PrismaSaleDetail[]> {
    return this.prisma.sale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .saleDetails(args);
  }

  async findSalePayments(
    parentId: string,
    args: Prisma.SalePaymentFindManyArgs
  ): Promise<PrismaSalePayment[]> {
    return this.prisma.sale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .salePayments(args);
  }

  async findSaleReturns(
    parentId: string,
    args: Prisma.SaleReturnFindManyArgs
  ): Promise<PrismaSaleReturn[]> {
    return this.prisma.sale
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .saleReturns(args);
  }

  async getCashRepositoryId(
    parentId: string
  ): Promise<PrismaCashRepository | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .cashRepositoryId();
  }

  async getCustomerId(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .customerId();
  }

  async getInvoiceTypeId(parentId: string): Promise<PrismaInvoiceType | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .invoiceTypeId();
  }

  async getPaymentTerm(parentId: string): Promise<PrismaPaymentTerm | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .paymentTerm();
  }

  async getPaymentTypeId(parentId: string): Promise<PrismaPaymentType | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .paymentTypeId();
  }

  async getSalePriceTypeId(
    parentId: string
  ): Promise<PrismaSalePriceType | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .salePriceTypeId();
  }

  async getStoreId(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .storeId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
