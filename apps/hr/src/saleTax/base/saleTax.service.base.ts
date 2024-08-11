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
  SaleTax as PrismaSaleTax,
  ProductGroup as PrismaProductGroup,
  Store as PrismaStore,
} from "@prisma/client";

export class SaleTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SaleTaxCountArgs, "select">): Promise<number> {
    return this.prisma.saleTax.count(args);
  }

  async saleTaxes(args: Prisma.SaleTaxFindManyArgs): Promise<PrismaSaleTax[]> {
    return this.prisma.saleTax.findMany(args);
  }
  async saleTax(
    args: Prisma.SaleTaxFindUniqueArgs
  ): Promise<PrismaSaleTax | null> {
    return this.prisma.saleTax.findUnique(args);
  }
  async createSaleTax(args: Prisma.SaleTaxCreateArgs): Promise<PrismaSaleTax> {
    return this.prisma.saleTax.create(args);
  }
  async updateSaleTax(args: Prisma.SaleTaxUpdateArgs): Promise<PrismaSaleTax> {
    return this.prisma.saleTax.update(args);
  }
  async deleteSaleTax(args: Prisma.SaleTaxDeleteArgs): Promise<PrismaSaleTax> {
    return this.prisma.saleTax.delete(args);
  }

  async findProductGroups(
    parentId: number,
    args: Prisma.ProductGroupFindManyArgs
  ): Promise<PrismaProductGroup[]> {
    return this.prisma.saleTax
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productGroups(args);
  }

  async getStore(parentId: number): Promise<PrismaStore | null> {
    return this.prisma.saleTax
      .findUnique({
        where: { id: parentId },
      })
      .store();
  }
}
