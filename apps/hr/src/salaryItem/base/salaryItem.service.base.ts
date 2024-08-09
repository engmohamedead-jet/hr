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
  SalaryItem as PrismaSalaryItem,
  EmployeeClassSalaryItemValue as PrismaEmployeeClassSalaryItemValue,
  EmployeeSalaryDetail as PrismaEmployeeSalaryDetail,
} from "@prisma/client";

export class SalaryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SalaryItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.salaryItem.count(args);
  }

  async salaryItems(
    args: Prisma.SalaryItemFindManyArgs
  ): Promise<PrismaSalaryItem[]> {
    return this.prisma.salaryItem.findMany(args);
  }
  async salaryItem(
    args: Prisma.SalaryItemFindUniqueArgs
  ): Promise<PrismaSalaryItem | null> {
    return this.prisma.salaryItem.findUnique(args);
  }
  async createSalaryItem(
    args: Prisma.SalaryItemCreateArgs
  ): Promise<PrismaSalaryItem> {
    return this.prisma.salaryItem.create(args);
  }
  async updateSalaryItem(
    args: Prisma.SalaryItemUpdateArgs
  ): Promise<PrismaSalaryItem> {
    return this.prisma.salaryItem.update(args);
  }
  async deleteSalaryItem(
    args: Prisma.SalaryItemDeleteArgs
  ): Promise<PrismaSalaryItem> {
    return this.prisma.salaryItem.delete(args);
  }

  async findEmployeeClassSalaryItemValues(
    parentId: string,
    args: Prisma.EmployeeClassSalaryItemValueFindManyArgs
  ): Promise<PrismaEmployeeClassSalaryItemValue[]> {
    return this.prisma.salaryItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employeeClassSalaryItemValues(args);
  }

  async findEmployeeSalaryDetails(
    parentId: string,
    args: Prisma.EmployeeSalaryDetailFindManyArgs
  ): Promise<PrismaEmployeeSalaryDetail[]> {
    return this.prisma.salaryItem
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employeeSalaryDetails(args);
  }
}