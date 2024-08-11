/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PressType as PrismaPressType } from "@prisma/client";

export class PressTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PressTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pressType.count(args);
  }

  async pressTypes(
    args: Prisma.PressTypeFindManyArgs
  ): Promise<PrismaPressType[]> {
    return this.prisma.pressType.findMany(args);
  }
  async pressType(
    args: Prisma.PressTypeFindUniqueArgs
  ): Promise<PrismaPressType | null> {
    return this.prisma.pressType.findUnique(args);
  }
  async createPressType(
    args: Prisma.PressTypeCreateArgs
  ): Promise<PrismaPressType> {
    return this.prisma.pressType.create(args);
  }
  async updatePressType(
    args: Prisma.PressTypeUpdateArgs
  ): Promise<PrismaPressType> {
    return this.prisma.pressType.update(args);
  }
  async deletePressType(
    args: Prisma.PressTypeDeleteArgs
  ): Promise<PrismaPressType> {
    return this.prisma.pressType.delete(args);
  }
}