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
  Elevator as PrismaElevator,
  CustomerElevator as PrismaCustomerElevator,
  CustomerUser as PrismaCustomerUser,
  ElevatorSparePart as PrismaElevatorSparePart,
  FailureReporting as PrismaFailureReporting,
  InstallationContract as PrismaInstallationContract,
  MaintenanceContract as PrismaMaintenanceContract,
  MaintenanceVisit as PrismaMaintenanceVisit,
  PeriodicMaintenanceOrder as PrismaPeriodicMaintenanceOrder,
  ControlType as PrismaControlType,
  DoorType as PrismaDoorType,
  ElevatorType as PrismaElevatorType,
  MotorType as PrismaMotorType,
  Store as PrismaStore,
} from "@prisma/client";

export class ElevatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ElevatorCountArgs, "select">): Promise<number> {
    return this.prisma.elevator.count(args);
  }

  async elevators(
    args: Prisma.ElevatorFindManyArgs
  ): Promise<PrismaElevator[]> {
    return this.prisma.elevator.findMany(args);
  }
  async elevator(
    args: Prisma.ElevatorFindUniqueArgs
  ): Promise<PrismaElevator | null> {
    return this.prisma.elevator.findUnique(args);
  }
  async createElevator(
    args: Prisma.ElevatorCreateArgs
  ): Promise<PrismaElevator> {
    return this.prisma.elevator.create(args);
  }
  async updateElevator(
    args: Prisma.ElevatorUpdateArgs
  ): Promise<PrismaElevator> {
    return this.prisma.elevator.update(args);
  }
  async deleteElevator(
    args: Prisma.ElevatorDeleteArgs
  ): Promise<PrismaElevator> {
    return this.prisma.elevator.delete(args);
  }

  async findCustomerElevators(
    parentId: string,
    args: Prisma.CustomerElevatorFindManyArgs
  ): Promise<PrismaCustomerElevator[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerElevators(args);
  }

  async findCustomerUsers(
    parentId: string,
    args: Prisma.CustomerUserFindManyArgs
  ): Promise<PrismaCustomerUser[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customerUsers(args);
  }

  async findElevatorSpareParts(
    parentId: string,
    args: Prisma.ElevatorSparePartFindManyArgs
  ): Promise<PrismaElevatorSparePart[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .elevatorSpareParts(args);
  }

  async findFailureReportings(
    parentId: string,
    args: Prisma.FailureReportingFindManyArgs
  ): Promise<PrismaFailureReporting[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .failureReportings(args);
  }

  async findInstallationContracts(
    parentId: string,
    args: Prisma.InstallationContractFindManyArgs
  ): Promise<PrismaInstallationContract[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .installationContracts(args);
  }

  async findMaintenanceContracts(
    parentId: string,
    args: Prisma.MaintenanceContractFindManyArgs
  ): Promise<PrismaMaintenanceContract[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .maintenanceContracts(args);
  }

  async findMaintenanceVisits(
    parentId: string,
    args: Prisma.MaintenanceVisitFindManyArgs
  ): Promise<PrismaMaintenanceVisit[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .maintenanceVisits(args);
  }

  async findPeriodicMaintenanceOrders(
    parentId: string,
    args: Prisma.PeriodicMaintenanceOrderFindManyArgs
  ): Promise<PrismaPeriodicMaintenanceOrder[]> {
    return this.prisma.elevator
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .periodicMaintenanceOrders(args);
  }

  async getControlTypeId(parentId: string): Promise<PrismaControlType | null> {
    return this.prisma.elevator
      .findUnique({
        where: { id: parentId },
      })
      .controlTypeId();
  }

  async getDoorTypeId(parentId: string): Promise<PrismaDoorType | null> {
    return this.prisma.elevator
      .findUnique({
        where: { id: parentId },
      })
      .doorTypeId();
  }

  async getElevatorTypeId(
    parentId: string
  ): Promise<PrismaElevatorType | null> {
    return this.prisma.elevator
      .findUnique({
        where: { id: parentId },
      })
      .elevatorTypeId();
  }

  async getMotorTypeId(parentId: string): Promise<PrismaMotorType | null> {
    return this.prisma.elevator
      .findUnique({
        where: { id: parentId },
      })
      .motorTypeId();
  }

  async getStoreId(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.elevator
      .findUnique({
        where: { id: parentId },
      })
      .storeId();
  }
}
