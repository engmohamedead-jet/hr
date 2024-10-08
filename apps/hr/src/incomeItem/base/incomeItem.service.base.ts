/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, IncomeItem as PrismaIncomeItem } from "@prisma/client";

export class IncomeItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IncomeItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.incomeItem.count(args);
  }

  async incomeItems(
    args: Prisma.IncomeItemFindManyArgs
  ): Promise<PrismaIncomeItem[]> {
    return this.prisma.incomeItem.findMany(args);
  }
  async incomeItem(
    args: Prisma.IncomeItemFindUniqueArgs
  ): Promise<PrismaIncomeItem | null> {
    return this.prisma.incomeItem.findUnique(args);
  }
  async createIncomeItem(
    args: Prisma.IncomeItemCreateArgs
  ): Promise<PrismaIncomeItem> {
    return this.prisma.incomeItem.create(args);
  }
  async updateIncomeItem(
    args: Prisma.IncomeItemUpdateArgs
  ): Promise<PrismaIncomeItem> {
    return this.prisma.incomeItem.update(args);
  }
  async deleteIncomeItem(
    args: Prisma.IncomeItemDeleteArgs
  ): Promise<PrismaIncomeItem> {
    return this.prisma.incomeItem.delete(args);
  }
}
