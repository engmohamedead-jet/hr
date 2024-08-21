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
  WorkCenterRouting as PrismaWorkCenterRouting,
  BillOfMaterialDetail as PrismaBillOfMaterialDetail,
  Tenant as PrismaTenant,
  WorkCenter as PrismaWorkCenter,
} from "@prisma/client";

export class WorkCenterRoutingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkCenterRoutingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workCenterRouting.count(args);
  }

  async workCenterRoutings(
    args: Prisma.WorkCenterRoutingFindManyArgs
  ): Promise<PrismaWorkCenterRouting[]> {
    return this.prisma.workCenterRouting.findMany(args);
  }
  async workCenterRouting(
    args: Prisma.WorkCenterRoutingFindUniqueArgs
  ): Promise<PrismaWorkCenterRouting | null> {
    return this.prisma.workCenterRouting.findUnique(args);
  }
  async createWorkCenterRouting(
    args: Prisma.WorkCenterRoutingCreateArgs
  ): Promise<PrismaWorkCenterRouting> {
    return this.prisma.workCenterRouting.create(args);
  }
  async updateWorkCenterRouting(
    args: Prisma.WorkCenterRoutingUpdateArgs
  ): Promise<PrismaWorkCenterRouting> {
    return this.prisma.workCenterRouting.update(args);
  }
  async deleteWorkCenterRouting(
    args: Prisma.WorkCenterRoutingDeleteArgs
  ): Promise<PrismaWorkCenterRouting> {
    return this.prisma.workCenterRouting.delete(args);
  }

  async findBillOfMaterialDetails(
    parentId: string,
    args: Prisma.BillOfMaterialDetailFindManyArgs
  ): Promise<PrismaBillOfMaterialDetail[]> {
    return this.prisma.workCenterRouting
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .billOfMaterialDetails(args);
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.workCenterRouting
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }

  async getWorkCenterId(parentId: string): Promise<PrismaWorkCenter | null> {
    return this.prisma.workCenterRouting
      .findUnique({
        where: { id: parentId },
      })
      .workCenterId();
  }
}
