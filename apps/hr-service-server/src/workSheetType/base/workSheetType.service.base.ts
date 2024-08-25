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
  WorkSheetType as PrismaWorkSheetType,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class WorkSheetTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkSheetTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workSheetType.count(args);
  }

  async workSheetTypes(
    args: Prisma.WorkSheetTypeFindManyArgs
  ): Promise<PrismaWorkSheetType[]> {
    return this.prisma.workSheetType.findMany(args);
  }
  async workSheetType(
    args: Prisma.WorkSheetTypeFindUniqueArgs
  ): Promise<PrismaWorkSheetType | null> {
    return this.prisma.workSheetType.findUnique(args);
  }
  async createWorkSheetType(
    args: Prisma.WorkSheetTypeCreateArgs
  ): Promise<PrismaWorkSheetType> {
    return this.prisma.workSheetType.create(args);
  }
  async updateWorkSheetType(
    args: Prisma.WorkSheetTypeUpdateArgs
  ): Promise<PrismaWorkSheetType> {
    return this.prisma.workSheetType.update(args);
  }
  async deleteWorkSheetType(
    args: Prisma.WorkSheetTypeDeleteArgs
  ): Promise<PrismaWorkSheetType> {
    return this.prisma.workSheetType.delete(args);
  }

  async getTenant(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.workSheetType
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}
