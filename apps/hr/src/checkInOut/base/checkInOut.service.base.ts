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
  CheckInOut as PrismaCheckInOut,
  User as PrismaUser,
  Employee as PrismaEmployee,
  Machine as PrismaMachine,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class CheckInOutServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CheckInOutCountArgs, "select">
  ): Promise<number> {
    return this.prisma.checkInOut.count(args);
  }

  async checkInOuts(
    args: Prisma.CheckInOutFindManyArgs
  ): Promise<PrismaCheckInOut[]> {
    return this.prisma.checkInOut.findMany(args);
  }
  async checkInOut(
    args: Prisma.CheckInOutFindUniqueArgs
  ): Promise<PrismaCheckInOut | null> {
    return this.prisma.checkInOut.findUnique(args);
  }
  async createCheckInOut(
    args: Prisma.CheckInOutCreateArgs
  ): Promise<PrismaCheckInOut> {
    return this.prisma.checkInOut.create(args);
  }
  async updateCheckInOut(
    args: Prisma.CheckInOutUpdateArgs
  ): Promise<PrismaCheckInOut> {
    return this.prisma.checkInOut.update(args);
  }
  async deleteCheckInOut(
    args: Prisma.CheckInOutDeleteArgs
  ): Promise<PrismaCheckInOut> {
    return this.prisma.checkInOut.delete(args);
  }

  async getApprovedByUserId(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.checkInOut
      .findUnique({
        where: { id: parentId },
      })
      .approvedByUserId();
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.checkInOut
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getMachine(parentId: string): Promise<PrismaMachine | null> {
    return this.prisma.checkInOut
      .findUnique({
        where: { id: parentId },
      })
      .machine();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.checkInOut
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
