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
  PrintTemplateGroup as PrismaPrintTemplateGroup,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class PrintTemplateGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PrintTemplateGroupCountArgs, "select">
  ): Promise<number> {
    return this.prisma.printTemplateGroup.count(args);
  }

  async printTemplateGroups(
    args: Prisma.PrintTemplateGroupFindManyArgs
  ): Promise<PrismaPrintTemplateGroup[]> {
    return this.prisma.printTemplateGroup.findMany(args);
  }
  async printTemplateGroup(
    args: Prisma.PrintTemplateGroupFindUniqueArgs
  ): Promise<PrismaPrintTemplateGroup | null> {
    return this.prisma.printTemplateGroup.findUnique(args);
  }
  async createPrintTemplateGroup(
    args: Prisma.PrintTemplateGroupCreateArgs
  ): Promise<PrismaPrintTemplateGroup> {
    return this.prisma.printTemplateGroup.create(args);
  }
  async updatePrintTemplateGroup(
    args: Prisma.PrintTemplateGroupUpdateArgs
  ): Promise<PrismaPrintTemplateGroup> {
    return this.prisma.printTemplateGroup.update(args);
  }
  async deletePrintTemplateGroup(
    args: Prisma.PrintTemplateGroupDeleteArgs
  ): Promise<PrismaPrintTemplateGroup> {
    return this.prisma.printTemplateGroup.delete(args);
  }

  async getTenantId(parentId: number): Promise<PrismaTenant | null> {
    return this.prisma.printTemplateGroup
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
