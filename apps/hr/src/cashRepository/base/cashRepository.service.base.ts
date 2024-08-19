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
  CashRepository as PrismaCashRepository,
  PurchaseReturn as PrismaPurchaseReturn,
  SaleReturn as PrismaSaleReturn,
  Sale as PrismaSale,
  Purchase as PrismaPurchase,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class CashRepositoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CashRepositoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cashRepository.count(args);
  }

  async cashRepositories(
    args: Prisma.CashRepositoryFindManyArgs
  ): Promise<PrismaCashRepository[]> {
    return this.prisma.cashRepository.findMany(args);
  }
  async cashRepository(
    args: Prisma.CashRepositoryFindUniqueArgs
  ): Promise<PrismaCashRepository | null> {
    return this.prisma.cashRepository.findUnique(args);
  }
  async createCashRepository(
    args: Prisma.CashRepositoryCreateArgs
  ): Promise<PrismaCashRepository> {
    return this.prisma.cashRepository.create(args);
  }
  async updateCashRepository(
    args: Prisma.CashRepositoryUpdateArgs
  ): Promise<PrismaCashRepository> {
    return this.prisma.cashRepository.update(args);
  }
  async deleteCashRepository(
    args: Prisma.CashRepositoryDeleteArgs
  ): Promise<PrismaCashRepository> {
    return this.prisma.cashRepository.delete(args);
  }

  async findCashRepositories(
    parentId: string,
    args: Prisma.CashRepositoryFindManyArgs
  ): Promise<PrismaCashRepository[]> {
    return this.prisma.cashRepository
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .cashRepositories(args);
  }

  async findPurchaseReturns(
    parentId: string,
    args: Prisma.PurchaseReturnFindManyArgs
  ): Promise<PrismaPurchaseReturn[]> {
    return this.prisma.cashRepository
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .purchaseReturns(args);
  }

  async findSaleReturns(
    parentId: string,
    args: Prisma.SaleReturnFindManyArgs
  ): Promise<PrismaSaleReturn[]> {
    return this.prisma.cashRepository
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .saleReturns(args);
  }

  async findSales(
    parentId: string,
    args: Prisma.SaleFindManyArgs
  ): Promise<PrismaSale[]> {
    return this.prisma.cashRepository
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sales(args);
  }

  async getParentCashRepositoryId(
    parentId: string
  ): Promise<PrismaCashRepository | null> {
    return this.prisma.cashRepository
      .findUnique({
        where: { id: parentId },
      })
      .parentCashRepositoryId();
  }

  async getPurchases(parentId: string): Promise<PrismaPurchase | null> {
    return this.prisma.cashRepository
      .findUnique({
        where: { id: parentId },
      })
      .purchases();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.cashRepository
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
