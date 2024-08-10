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
  CostCenter as PrismaCostCenter,
  AccountTransaction as PrismaAccountTransaction,
} from "@prisma/client";

export class CostCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CostCenterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.costCenter.count(args);
  }

  async costCenters(
    args: Prisma.CostCenterFindManyArgs
  ): Promise<PrismaCostCenter[]> {
    return this.prisma.costCenter.findMany(args);
  }
  async costCenter(
    args: Prisma.CostCenterFindUniqueArgs
  ): Promise<PrismaCostCenter | null> {
    return this.prisma.costCenter.findUnique(args);
  }
  async createCostCenter(
    args: Prisma.CostCenterCreateArgs
  ): Promise<PrismaCostCenter> {
    return this.prisma.costCenter.create(args);
  }
  async updateCostCenter(
    args: Prisma.CostCenterUpdateArgs
  ): Promise<PrismaCostCenter> {
    return this.prisma.costCenter.update(args);
  }
  async deleteCostCenter(
    args: Prisma.CostCenterDeleteArgs
  ): Promise<PrismaCostCenter> {
    return this.prisma.costCenter.delete(args);
  }

  async findAccountTransactions(
    parentId: string,
    args: Prisma.AccountTransactionFindManyArgs
  ): Promise<PrismaAccountTransaction[]> {
    return this.prisma.costCenter
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accountTransactions(args);
  }
}
