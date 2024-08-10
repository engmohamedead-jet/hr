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
  StoreType as PrismaStoreType,
  Store as PrismaStore,
} from "@prisma/client";

export class StoreTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StoreTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.storeType.count(args);
  }

  async storeTypes(
    args: Prisma.StoreTypeFindManyArgs
  ): Promise<PrismaStoreType[]> {
    return this.prisma.storeType.findMany(args);
  }
  async storeType(
    args: Prisma.StoreTypeFindUniqueArgs
  ): Promise<PrismaStoreType | null> {
    return this.prisma.storeType.findUnique(args);
  }
  async createStoreType(
    args: Prisma.StoreTypeCreateArgs
  ): Promise<PrismaStoreType> {
    return this.prisma.storeType.create(args);
  }
  async updateStoreType(
    args: Prisma.StoreTypeUpdateArgs
  ): Promise<PrismaStoreType> {
    return this.prisma.storeType.update(args);
  }
  async deleteStoreType(
    args: Prisma.StoreTypeDeleteArgs
  ): Promise<PrismaStoreType> {
    return this.prisma.storeType.delete(args);
  }

  async findStores(
    parentId: number,
    args: Prisma.StoreFindManyArgs
  ): Promise<PrismaStore[]> {
    return this.prisma.storeType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .stores(args);
  }
}