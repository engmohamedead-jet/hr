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
  SaleOrder as PrismaSaleOrder,
  SaleOrderDetail as PrismaSaleOrderDetail,
  CashRepository as PrismaCashRepository,
  Customer as PrismaCustomer,
  InvoiceType as PrismaInvoiceType,
  OrderStatus as PrismaOrderStatus,
  PaymentStatus as PrismaPaymentStatus,
  PaymentType as PrismaPaymentType,
  SalePriceType as PrismaSalePriceType,
  SaleQuotation as PrismaSaleQuotation,
  ShippingStatus as PrismaShippingStatus,
  Store as PrismaStore,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class SaleOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SaleOrderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.saleOrder.count(args);
  }

  async saleOrders(
    args: Prisma.SaleOrderFindManyArgs
  ): Promise<PrismaSaleOrder[]> {
    return this.prisma.saleOrder.findMany(args);
  }
  async saleOrder(
    args: Prisma.SaleOrderFindUniqueArgs
  ): Promise<PrismaSaleOrder | null> {
    return this.prisma.saleOrder.findUnique(args);
  }
  async createSaleOrder(
    args: Prisma.SaleOrderCreateArgs
  ): Promise<PrismaSaleOrder> {
    return this.prisma.saleOrder.create(args);
  }
  async updateSaleOrder(
    args: Prisma.SaleOrderUpdateArgs
  ): Promise<PrismaSaleOrder> {
    return this.prisma.saleOrder.update(args);
  }
  async deleteSaleOrder(
    args: Prisma.SaleOrderDeleteArgs
  ): Promise<PrismaSaleOrder> {
    return this.prisma.saleOrder.delete(args);
  }

  async findSaleOrderDetails(
    parentId: string,
    args: Prisma.SaleOrderDetailFindManyArgs
  ): Promise<PrismaSaleOrderDetail[]> {
    return this.prisma.saleOrder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .saleOrderDetails(args);
  }

  async getCashRepositoryId(
    parentId: string
  ): Promise<PrismaCashRepository | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .cashRepositoryId();
  }

  async getCustomerId(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .customerId();
  }

  async getInvoiceTypeId(parentId: string): Promise<PrismaInvoiceType | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .invoiceTypeId();
  }

  async getOrderStatus(parentId: string): Promise<PrismaOrderStatus | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .orderStatus();
  }

  async getPaymentStatus(
    parentId: string
  ): Promise<PrismaPaymentStatus | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .paymentStatus();
  }

  async getPaymentTypeId(parentId: string): Promise<PrismaPaymentType | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .paymentTypeId();
  }

  async getSalePriceType(
    parentId: string
  ): Promise<PrismaSalePriceType | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .salePriceType();
  }

  async getSaleQuotation(
    parentId: string
  ): Promise<PrismaSaleQuotation | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .saleQuotation();
  }

  async getShippingStatus(
    parentId: string
  ): Promise<PrismaShippingStatus | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .shippingStatus();
  }

  async getStoreId(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .storeId();
  }

  async getTenant(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.saleOrder
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}
