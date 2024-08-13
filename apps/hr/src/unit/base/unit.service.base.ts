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
  Unit as PrismaUnit,
  CompoundUnit as PrismaCompoundUnit,
  Product as PrismaProduct,
} from "@prisma/client";

export class UnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UnitCountArgs, "select">): Promise<number> {
    return this.prisma.unit.count(args);
  }

  async units(args: Prisma.UnitFindManyArgs): Promise<PrismaUnit[]> {
    return this.prisma.unit.findMany(args);
  }
  async unit(args: Prisma.UnitFindUniqueArgs): Promise<PrismaUnit | null> {
    return this.prisma.unit.findUnique(args);
  }
  async createUnit(args: Prisma.UnitCreateArgs): Promise<PrismaUnit> {
    return this.prisma.unit.create(args);
  }
  async updateUnit(args: Prisma.UnitUpdateArgs): Promise<PrismaUnit> {
    return this.prisma.unit.update(args);
  }
  async deleteUnit(args: Prisma.UnitDeleteArgs): Promise<PrismaUnit> {
    return this.prisma.unit.delete(args);
  }

  async findCompoundUnits(
    parentId: string,
    args: Prisma.CompoundUnitFindManyArgs
  ): Promise<PrismaCompoundUnit[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .compoundUnits(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getCompareUnit(parentId: string): Promise<PrismaCompoundUnit | null> {
    return this.prisma.unit
      .findUnique({
        where: { id: parentId },
      })
      .compareUnit();
  }
}
