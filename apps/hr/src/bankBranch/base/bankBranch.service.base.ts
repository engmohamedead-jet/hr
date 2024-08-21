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
  BankBranch as PrismaBankBranch,
  SalePayment as PrismaSalePayment,
  Bank as PrismaBank,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class BankBranchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BankBranchCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bankBranch.count(args);
  }

  async bankBranches(
    args: Prisma.BankBranchFindManyArgs
  ): Promise<PrismaBankBranch[]> {
    return this.prisma.bankBranch.findMany(args);
  }
  async bankBranch(
    args: Prisma.BankBranchFindUniqueArgs
  ): Promise<PrismaBankBranch | null> {
    return this.prisma.bankBranch.findUnique(args);
  }
  async createBankBranch(
    args: Prisma.BankBranchCreateArgs
  ): Promise<PrismaBankBranch> {
    return this.prisma.bankBranch.create(args);
  }
  async updateBankBranch(
    args: Prisma.BankBranchUpdateArgs
  ): Promise<PrismaBankBranch> {
    return this.prisma.bankBranch.update(args);
  }
  async deleteBankBranch(
    args: Prisma.BankBranchDeleteArgs
  ): Promise<PrismaBankBranch> {
    return this.prisma.bankBranch.delete(args);
  }

  async findSalePayments(
    parentId: string,
    args: Prisma.SalePaymentFindManyArgs
  ): Promise<PrismaSalePayment[]> {
    return this.prisma.bankBranch
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .salePayments(args);
  }

  async getBank(parentId: string): Promise<PrismaBank | null> {
    return this.prisma.bankBranch
      .findUnique({
        where: { id: parentId },
      })
      .bank();
  }

  async getTenant(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.bankBranch
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}
