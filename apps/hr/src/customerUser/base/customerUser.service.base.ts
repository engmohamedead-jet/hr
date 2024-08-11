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
  CustomerUser as PrismaCustomerUser,
  FailureReporting as PrismaFailureReporting,
  MaintenanceContract as PrismaMaintenanceContract,
  PeriodicMaintenanceOrder as PrismaPeriodicMaintenanceOrder,
  Elevator as PrismaElevator,
} from "@prisma/client";

import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class CustomerUserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count(
    args: Omit<Prisma.CustomerUserCountArgs, "select">
  ): Promise<number> {
    return this.prisma.customerUser.count(args);
  }

  async customerUsers(
    args: Prisma.CustomerUserFindManyArgs
  ): Promise<PrismaCustomerUser[]> {
    return this.prisma.customerUser.findMany(args);
  }
  async customerUser(
    args: Prisma.CustomerUserFindUniqueArgs
  ): Promise<PrismaCustomerUser | null> {
    return this.prisma.customerUser.findUnique(args);
  }
  async createCustomerUser(
    args: Prisma.CustomerUserCreateArgs
  ): Promise<PrismaCustomerUser> {
    return this.prisma.customerUser.create({
      ...args,

      data: {
        ...args.data,
        passwordHash: await this.passwordService.hash(args.data.passwordHash),
      },
    });
  }
  async updateCustomerUser(
    args: Prisma.CustomerUserUpdateArgs
  ): Promise<PrismaCustomerUser> {
    return this.prisma.customerUser.update({
      ...args,

      data: {
        ...args.data,

        passwordHash:
          args.data.passwordHash &&
          (await transformStringFieldUpdateInput(
            args.data.passwordHash,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async deleteCustomerUser(
    args: Prisma.CustomerUserDeleteArgs
  ): Promise<PrismaCustomerUser> {
    return this.prisma.customerUser.delete(args);
  }

  async findFailureReportings(
    parentId: string,
    args: Prisma.FailureReportingFindManyArgs
  ): Promise<PrismaFailureReporting[]> {
    return this.prisma.customerUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .failureReportings(args);
  }

  async findMaintenanceContracts(
    parentId: string,
    args: Prisma.MaintenanceContractFindManyArgs
  ): Promise<PrismaMaintenanceContract[]> {
    return this.prisma.customerUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .maintenanceContracts(args);
  }

  async findPeriodicMaintenanceOrders(
    parentId: string,
    args: Prisma.PeriodicMaintenanceOrderFindManyArgs
  ): Promise<PrismaPeriodicMaintenanceOrder[]> {
    return this.prisma.customerUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .periodicMaintenanceOrders(args);
  }

  async getElevatorId(parentId: string): Promise<PrismaElevator | null> {
    return this.prisma.customerUser
      .findUnique({
        where: { id: parentId },
      })
      .elevatorId();
  }
}