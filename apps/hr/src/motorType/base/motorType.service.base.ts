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
  MotorType as PrismaMotorType,
  Elevator as PrismaElevator,
} from "@prisma/client";

export class MotorTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MotorTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.motorType.count(args);
  }

  async motorTypes(
    args: Prisma.MotorTypeFindManyArgs
  ): Promise<PrismaMotorType[]> {
    return this.prisma.motorType.findMany(args);
  }
  async motorType(
    args: Prisma.MotorTypeFindUniqueArgs
  ): Promise<PrismaMotorType | null> {
    return this.prisma.motorType.findUnique(args);
  }
  async createMotorType(
    args: Prisma.MotorTypeCreateArgs
  ): Promise<PrismaMotorType> {
    return this.prisma.motorType.create(args);
  }
  async updateMotorType(
    args: Prisma.MotorTypeUpdateArgs
  ): Promise<PrismaMotorType> {
    return this.prisma.motorType.update(args);
  }
  async deleteMotorType(
    args: Prisma.MotorTypeDeleteArgs
  ): Promise<PrismaMotorType> {
    return this.prisma.motorType.delete(args);
  }

  async findElevators(
    parentId: number,
    args: Prisma.ElevatorFindManyArgs
  ): Promise<PrismaElevator[]> {
    return this.prisma.motorType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .elevators(args);
  }
}
