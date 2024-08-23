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
  TimeMode as PrismaTimeMode,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class TimeModeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TimeModeCountArgs, "select">): Promise<number> {
    return this.prisma.timeMode.count(args);
  }

  async timeModes(
    args: Prisma.TimeModeFindManyArgs
  ): Promise<PrismaTimeMode[]> {
    return this.prisma.timeMode.findMany(args);
  }
  async timeMode(
    args: Prisma.TimeModeFindUniqueArgs
  ): Promise<PrismaTimeMode | null> {
    return this.prisma.timeMode.findUnique(args);
  }
  async createTimeMode(
    args: Prisma.TimeModeCreateArgs
  ): Promise<PrismaTimeMode> {
    return this.prisma.timeMode.create(args);
  }
  async updateTimeMode(
    args: Prisma.TimeModeUpdateArgs
  ): Promise<PrismaTimeMode> {
    return this.prisma.timeMode.update(args);
  }
  async deleteTimeMode(
    args: Prisma.TimeModeDeleteArgs
  ): Promise<PrismaTimeMode> {
    return this.prisma.timeMode.delete(args);
  }

  async getTenantId(parentId: number): Promise<PrismaTenant | null> {
    return this.prisma.timeMode
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}