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
  SalaryItemType as PrismaSalaryItemType,
  SalaryItem as PrismaSalaryItem,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class SalaryItemTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SalaryItemTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.salaryItemType.count(args);
  }

  async salaryItemTypes(
    args: Prisma.SalaryItemTypeFindManyArgs
  ): Promise<PrismaSalaryItemType[]> {
    return this.prisma.salaryItemType.findMany(args);
  }
  async salaryItemType(
    args: Prisma.SalaryItemTypeFindUniqueArgs
  ): Promise<PrismaSalaryItemType | null> {
    return this.prisma.salaryItemType.findUnique(args);
  }
  async createSalaryItemType(
    args: Prisma.SalaryItemTypeCreateArgs
  ): Promise<PrismaSalaryItemType> {
    return this.prisma.salaryItemType.create(args);
  }
  async updateSalaryItemType(
    args: Prisma.SalaryItemTypeUpdateArgs
  ): Promise<PrismaSalaryItemType> {
    return this.prisma.salaryItemType.update(args);
  }
  async deleteSalaryItemType(
    args: Prisma.SalaryItemTypeDeleteArgs
  ): Promise<PrismaSalaryItemType> {
    return this.prisma.salaryItemType.delete(args);
  }

  async findSalaryItems(
    parentId: number,
    args: Prisma.SalaryItemFindManyArgs
  ): Promise<PrismaSalaryItem[]> {
    return this.prisma.salaryItemType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .salaryItems(args);
  }

  async getTenantId(parentId: number): Promise<PrismaTenant | null> {
    return this.prisma.salaryItemType
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
