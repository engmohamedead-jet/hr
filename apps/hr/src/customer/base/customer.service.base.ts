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
  Customer as PrismaCustomer,
  Currency as PrismaCurrency,
  CustomerCateogry as PrismaCustomerCateogry,
  CustomerType as PrismaCustomerType,
  Rating as PrismaRating,
  SalePriceType as PrismaSalePriceType,
  Supplier as PrismaSupplier,
} from "@prisma/client";

export class CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CustomerCountArgs, "select">): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async customers(
    args: Prisma.CustomerFindManyArgs
  ): Promise<PrismaCustomer[]> {
    return this.prisma.customer.findMany(args);
  }
  async customer(
    args: Prisma.CustomerFindUniqueArgs
  ): Promise<PrismaCustomer | null> {
    return this.prisma.customer.findUnique(args);
  }
  async createCustomer(
    args: Prisma.CustomerCreateArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.create(args);
  }
  async updateCustomer(
    args: Prisma.CustomerUpdateArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.update(args);
  }
  async deleteCustomer(
    args: Prisma.CustomerDeleteArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.delete(args);
  }

  async getCurrencyId(parentId: string): Promise<PrismaCurrency | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .currencyId();
  }

  async getCustomerCateogryId(
    parentId: string
  ): Promise<PrismaCustomerCateogry | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .customerCateogryId();
  }

  async getCustomerTypeId(
    parentId: string
  ): Promise<PrismaCustomerType | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .customerTypeId();
  }

  async getGuarantorRatingId(parentId: string): Promise<PrismaRating | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .guarantorRatingId();
  }

  async getRating(parentId: string): Promise<PrismaRating | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .rating();
  }

  async getSalePriceTypeId(
    parentId: string
  ): Promise<PrismaSalePriceType | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .salePriceTypeId();
  }

  async getSupplierId(parentId: string): Promise<PrismaSupplier | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .supplierId();
  }
}