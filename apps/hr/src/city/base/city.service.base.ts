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
  City as PrismaCity,
  Bank as PrismaBank,
  State as PrismaState,
} from "@prisma/client";

export class CityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CityCountArgs, "select">): Promise<number> {
    return this.prisma.city.count(args);
  }

  async cities(args: Prisma.CityFindManyArgs): Promise<PrismaCity[]> {
    return this.prisma.city.findMany(args);
  }
  async city(args: Prisma.CityFindUniqueArgs): Promise<PrismaCity | null> {
    return this.prisma.city.findUnique(args);
  }
  async createCity(args: Prisma.CityCreateArgs): Promise<PrismaCity> {
    return this.prisma.city.create(args);
  }
  async updateCity(args: Prisma.CityUpdateArgs): Promise<PrismaCity> {
    return this.prisma.city.update(args);
  }
  async deleteCity(args: Prisma.CityDeleteArgs): Promise<PrismaCity> {
    return this.prisma.city.delete(args);
  }

  async findBanks(
    parentId: string,
    args: Prisma.BankFindManyArgs
  ): Promise<PrismaBank[]> {
    return this.prisma.city
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .banks(args);
  }

  async getStateId(parentId: string): Promise<PrismaState | null> {
    return this.prisma.city
      .findUnique({
        where: { id: parentId },
      })
      .stateId();
  }
}
