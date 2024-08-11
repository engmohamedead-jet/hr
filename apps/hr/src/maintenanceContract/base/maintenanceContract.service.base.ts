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
  MaintenanceContract as PrismaMaintenanceContract,
  ContractPeriod as PrismaContractPeriod,
  Customer as PrismaCustomer,
  CustomerUser as PrismaCustomerUser,
  Elevator as PrismaElevator,
  Store as PrismaStore,
} from "@prisma/client";

export class MaintenanceContractServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MaintenanceContractCountArgs, "select">
  ): Promise<number> {
    return this.prisma.maintenanceContract.count(args);
  }

  async maintenanceContracts(
    args: Prisma.MaintenanceContractFindManyArgs
  ): Promise<PrismaMaintenanceContract[]> {
    return this.prisma.maintenanceContract.findMany(args);
  }
  async maintenanceContract(
    args: Prisma.MaintenanceContractFindUniqueArgs
  ): Promise<PrismaMaintenanceContract | null> {
    return this.prisma.maintenanceContract.findUnique(args);
  }
  async createMaintenanceContract(
    args: Prisma.MaintenanceContractCreateArgs
  ): Promise<PrismaMaintenanceContract> {
    return this.prisma.maintenanceContract.create(args);
  }
  async updateMaintenanceContract(
    args: Prisma.MaintenanceContractUpdateArgs
  ): Promise<PrismaMaintenanceContract> {
    return this.prisma.maintenanceContract.update(args);
  }
  async deleteMaintenanceContract(
    args: Prisma.MaintenanceContractDeleteArgs
  ): Promise<PrismaMaintenanceContract> {
    return this.prisma.maintenanceContract.delete(args);
  }

  async getContractPeriodId(
    parentId: string
  ): Promise<PrismaContractPeriod | null> {
    return this.prisma.maintenanceContract
      .findUnique({
        where: { id: parentId },
      })
      .contractPeriodId();
  }

  async getCustomerId(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.maintenanceContract
      .findUnique({
        where: { id: parentId },
      })
      .customerId();
  }

  async getCustomerUserId(
    parentId: string
  ): Promise<PrismaCustomerUser | null> {
    return this.prisma.maintenanceContract
      .findUnique({
        where: { id: parentId },
      })
      .customerUserId();
  }

  async getElevatorId(parentId: string): Promise<PrismaElevator | null> {
    return this.prisma.maintenanceContract
      .findUnique({
        where: { id: parentId },
      })
      .elevatorId();
  }

  async getStoreId(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.maintenanceContract
      .findUnique({
        where: { id: parentId },
      })
      .storeId();
  }
}