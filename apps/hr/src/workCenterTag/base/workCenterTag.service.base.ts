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
  WorkCenterTag as PrismaWorkCenterTag,
  WorkCenterWorkCenterTag as PrismaWorkCenterWorkCenterTag,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class WorkCenterTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkCenterTagCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workCenterTag.count(args);
  }

  async workCenterTags(
    args: Prisma.WorkCenterTagFindManyArgs
  ): Promise<PrismaWorkCenterTag[]> {
    return this.prisma.workCenterTag.findMany(args);
  }
  async workCenterTag(
    args: Prisma.WorkCenterTagFindUniqueArgs
  ): Promise<PrismaWorkCenterTag | null> {
    return this.prisma.workCenterTag.findUnique(args);
  }
  async createWorkCenterTag(
    args: Prisma.WorkCenterTagCreateArgs
  ): Promise<PrismaWorkCenterTag> {
    return this.prisma.workCenterTag.create(args);
  }
  async updateWorkCenterTag(
    args: Prisma.WorkCenterTagUpdateArgs
  ): Promise<PrismaWorkCenterTag> {
    return this.prisma.workCenterTag.update(args);
  }
  async deleteWorkCenterTag(
    args: Prisma.WorkCenterTagDeleteArgs
  ): Promise<PrismaWorkCenterTag> {
    return this.prisma.workCenterTag.delete(args);
  }

  async findWorkCenterWorkCenterTags(
    parentId: string,
    args: Prisma.WorkCenterWorkCenterTagFindManyArgs
  ): Promise<PrismaWorkCenterWorkCenterTag[]> {
    return this.prisma.workCenterTag
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workCenterWorkCenterTags(args);
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.workCenterTag
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}