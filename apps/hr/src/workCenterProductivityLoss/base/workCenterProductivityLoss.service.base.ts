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
  WorkCenterProductivityLoss as PrismaWorkCenterProductivityLoss,
  Tenant as PrismaTenant,
  WorkCenter as PrismaWorkCenter,
  WorkCenterProductivityLossType as PrismaWorkCenterProductivityLossType,
} from "@prisma/client";

export class WorkCenterProductivityLossServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkCenterProductivityLossCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workCenterProductivityLoss.count(args);
  }

  async workCenterProductivityLosses(
    args: Prisma.WorkCenterProductivityLossFindManyArgs
  ): Promise<PrismaWorkCenterProductivityLoss[]> {
    return this.prisma.workCenterProductivityLoss.findMany(args);
  }
  async workCenterProductivityLoss(
    args: Prisma.WorkCenterProductivityLossFindUniqueArgs
  ): Promise<PrismaWorkCenterProductivityLoss | null> {
    return this.prisma.workCenterProductivityLoss.findUnique(args);
  }
  async createWorkCenterProductivityLoss(
    args: Prisma.WorkCenterProductivityLossCreateArgs
  ): Promise<PrismaWorkCenterProductivityLoss> {
    return this.prisma.workCenterProductivityLoss.create(args);
  }
  async updateWorkCenterProductivityLoss(
    args: Prisma.WorkCenterProductivityLossUpdateArgs
  ): Promise<PrismaWorkCenterProductivityLoss> {
    return this.prisma.workCenterProductivityLoss.update(args);
  }
  async deleteWorkCenterProductivityLoss(
    args: Prisma.WorkCenterProductivityLossDeleteArgs
  ): Promise<PrismaWorkCenterProductivityLoss> {
    return this.prisma.workCenterProductivityLoss.delete(args);
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.workCenterProductivityLoss
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }

  async getWorkCenterId(parentId: string): Promise<PrismaWorkCenter | null> {
    return this.prisma.workCenterProductivityLoss
      .findUnique({
        where: { id: parentId },
      })
      .workCenterId();
  }

  async getWorkCenterProductivityLossTypeI(
    parentId: string
  ): Promise<PrismaWorkCenterProductivityLossType | null> {
    return this.prisma.workCenterProductivityLoss
      .findUnique({
        where: { id: parentId },
      })
      .workCenterProductivityLossTypeI();
  }
}