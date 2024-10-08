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
  ShippingStatus as PrismaShippingStatus,
  SaleOrder as PrismaSaleOrder,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class ShippingStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ShippingStatusCountArgs, "select">
  ): Promise<number> {
    return this.prisma.shippingStatus.count(args);
  }

  async shippingStatuses(
    args: Prisma.ShippingStatusFindManyArgs
  ): Promise<PrismaShippingStatus[]> {
    return this.prisma.shippingStatus.findMany(args);
  }
  async shippingStatus(
    args: Prisma.ShippingStatusFindUniqueArgs
  ): Promise<PrismaShippingStatus | null> {
    return this.prisma.shippingStatus.findUnique(args);
  }
  async createShippingStatus(
    args: Prisma.ShippingStatusCreateArgs
  ): Promise<PrismaShippingStatus> {
    return this.prisma.shippingStatus.create(args);
  }
  async updateShippingStatus(
    args: Prisma.ShippingStatusUpdateArgs
  ): Promise<PrismaShippingStatus> {
    return this.prisma.shippingStatus.update(args);
  }
  async deleteShippingStatus(
    args: Prisma.ShippingStatusDeleteArgs
  ): Promise<PrismaShippingStatus> {
    return this.prisma.shippingStatus.delete(args);
  }

  async getSaleOrders(parentId: number): Promise<PrismaSaleOrder | null> {
    return this.prisma.shippingStatus
      .findUnique({
        where: { id: parentId },
      })
      .saleOrders();
  }

  async getTenant(parentId: number): Promise<PrismaTenant | null> {
    return this.prisma.shippingStatus
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}
