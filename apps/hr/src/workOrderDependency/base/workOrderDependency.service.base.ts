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
  WorkOrderDependency as PrismaWorkOrderDependency,
  WorkOrder as PrismaWorkOrder,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class WorkOrderDependencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkOrderDependencyCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workOrderDependency.count(args);
  }

  async workOrderDependencies(
    args: Prisma.WorkOrderDependencyFindManyArgs
  ): Promise<PrismaWorkOrderDependency[]> {
    return this.prisma.workOrderDependency.findMany(args);
  }
  async workOrderDependency(
    args: Prisma.WorkOrderDependencyFindUniqueArgs
  ): Promise<PrismaWorkOrderDependency | null> {
    return this.prisma.workOrderDependency.findUnique(args);
  }
  async createWorkOrderDependency(
    args: Prisma.WorkOrderDependencyCreateArgs
  ): Promise<PrismaWorkOrderDependency> {
    return this.prisma.workOrderDependency.create(args);
  }
  async updateWorkOrderDependency(
    args: Prisma.WorkOrderDependencyUpdateArgs
  ): Promise<PrismaWorkOrderDependency> {
    return this.prisma.workOrderDependency.update(args);
  }
  async deleteWorkOrderDependency(
    args: Prisma.WorkOrderDependencyDeleteArgs
  ): Promise<PrismaWorkOrderDependency> {
    return this.prisma.workOrderDependency.delete(args);
  }

  async getBlockedByWorkOrderId(
    parentId: string
  ): Promise<PrismaWorkOrder | null> {
    return this.prisma.workOrderDependency
      .findUnique({
        where: { id: parentId },
      })
      .blockedByWorkOrderId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.workOrderDependency
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }

  async getWorkOrderId(parentId: string): Promise<PrismaWorkOrder | null> {
    return this.prisma.workOrderDependency
      .findUnique({
        where: { id: parentId },
      })
      .workOrderId();
  }
}
