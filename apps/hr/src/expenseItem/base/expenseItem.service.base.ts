/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ExpenseItem as PrismaExpenseItem } from "@prisma/client";

export class ExpenseItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ExpenseItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.expenseItem.count(args);
  }

  async expenseItems(
    args: Prisma.ExpenseItemFindManyArgs
  ): Promise<PrismaExpenseItem[]> {
    return this.prisma.expenseItem.findMany(args);
  }
  async expenseItem(
    args: Prisma.ExpenseItemFindUniqueArgs
  ): Promise<PrismaExpenseItem | null> {
    return this.prisma.expenseItem.findUnique(args);
  }
  async createExpenseItem(
    args: Prisma.ExpenseItemCreateArgs
  ): Promise<PrismaExpenseItem> {
    return this.prisma.expenseItem.create(args);
  }
  async updateExpenseItem(
    args: Prisma.ExpenseItemUpdateArgs
  ): Promise<PrismaExpenseItem> {
    return this.prisma.expenseItem.update(args);
  }
  async deleteExpenseItem(
    args: Prisma.ExpenseItemDeleteArgs
  ): Promise<PrismaExpenseItem> {
    return this.prisma.expenseItem.delete(args);
  }
}