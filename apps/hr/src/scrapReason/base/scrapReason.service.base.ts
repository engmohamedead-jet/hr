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
  ScrapReason as PrismaScrapReason,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class ScrapReasonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ScrapReasonCountArgs, "select">
  ): Promise<number> {
    return this.prisma.scrapReason.count(args);
  }

  async scrapReasons(
    args: Prisma.ScrapReasonFindManyArgs
  ): Promise<PrismaScrapReason[]> {
    return this.prisma.scrapReason.findMany(args);
  }
  async scrapReason(
    args: Prisma.ScrapReasonFindUniqueArgs
  ): Promise<PrismaScrapReason | null> {
    return this.prisma.scrapReason.findUnique(args);
  }
  async createScrapReason(
    args: Prisma.ScrapReasonCreateArgs
  ): Promise<PrismaScrapReason> {
    return this.prisma.scrapReason.create(args);
  }
  async updateScrapReason(
    args: Prisma.ScrapReasonUpdateArgs
  ): Promise<PrismaScrapReason> {
    return this.prisma.scrapReason.update(args);
  }
  async deleteScrapReason(
    args: Prisma.ScrapReasonDeleteArgs
  ): Promise<PrismaScrapReason> {
    return this.prisma.scrapReason.delete(args);
  }

  async getTenantId(parentId: number): Promise<PrismaTenant | null> {
    return this.prisma.scrapReason
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}