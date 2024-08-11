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
  PeriodicMaintenanceOrder as PrismaPeriodicMaintenanceOrder,
  CustomerElevator as PrismaCustomerElevator,
  CustomerUser as PrismaCustomerUser,
  Elevator as PrismaElevator,
  Store as PrismaStore,
} from "@prisma/client";

export class PeriodicMaintenanceOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PeriodicMaintenanceOrderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.periodicMaintenanceOrder.count(args);
  }

  async periodicMaintenanceOrders(
    args: Prisma.PeriodicMaintenanceOrderFindManyArgs
  ): Promise<PrismaPeriodicMaintenanceOrder[]> {
    return this.prisma.periodicMaintenanceOrder.findMany(args);
  }
  async periodicMaintenanceOrder(
    args: Prisma.PeriodicMaintenanceOrderFindUniqueArgs
  ): Promise<PrismaPeriodicMaintenanceOrder | null> {
    return this.prisma.periodicMaintenanceOrder.findUnique(args);
  }
  async createPeriodicMaintenanceOrder(
    args: Prisma.PeriodicMaintenanceOrderCreateArgs
  ): Promise<PrismaPeriodicMaintenanceOrder> {
    return this.prisma.periodicMaintenanceOrder.create(args);
  }
  async updatePeriodicMaintenanceOrder(
    args: Prisma.PeriodicMaintenanceOrderUpdateArgs
  ): Promise<PrismaPeriodicMaintenanceOrder> {
    return this.prisma.periodicMaintenanceOrder.update(args);
  }
  async deletePeriodicMaintenanceOrder(
    args: Prisma.PeriodicMaintenanceOrderDeleteArgs
  ): Promise<PrismaPeriodicMaintenanceOrder> {
    return this.prisma.periodicMaintenanceOrder.delete(args);
  }

  async getCustomerElevator(
    parentId: string
  ): Promise<PrismaCustomerElevator | null> {
    return this.prisma.periodicMaintenanceOrder
      .findUnique({
        where: { id: parentId },
      })
      .customerElevator();
  }

  async getCustomerUserId(
    parentId: string
  ): Promise<PrismaCustomerUser | null> {
    return this.prisma.periodicMaintenanceOrder
      .findUnique({
        where: { id: parentId },
      })
      .customerUserId();
  }

  async getElevatorId(parentId: string): Promise<PrismaElevator | null> {
    return this.prisma.periodicMaintenanceOrder
      .findUnique({
        where: { id: parentId },
      })
      .elevatorId();
  }

  async getStoreId(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.periodicMaintenanceOrder
      .findUnique({
        where: { id: parentId },
      })
      .storeId();
  }
}