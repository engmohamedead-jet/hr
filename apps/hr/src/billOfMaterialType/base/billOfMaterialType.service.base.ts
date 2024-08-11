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
  BillOfMaterialType as PrismaBillOfMaterialType,
} from "@prisma/client";

export class BillOfMaterialTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BillOfMaterialTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.billOfMaterialType.count(args);
  }

  async billOfMaterialTypes(
    args: Prisma.BillOfMaterialTypeFindManyArgs
  ): Promise<PrismaBillOfMaterialType[]> {
    return this.prisma.billOfMaterialType.findMany(args);
  }
  async billOfMaterialType(
    args: Prisma.BillOfMaterialTypeFindUniqueArgs
  ): Promise<PrismaBillOfMaterialType | null> {
    return this.prisma.billOfMaterialType.findUnique(args);
  }
  async createBillOfMaterialType(
    args: Prisma.BillOfMaterialTypeCreateArgs
  ): Promise<PrismaBillOfMaterialType> {
    return this.prisma.billOfMaterialType.create(args);
  }
  async updateBillOfMaterialType(
    args: Prisma.BillOfMaterialTypeUpdateArgs
  ): Promise<PrismaBillOfMaterialType> {
    return this.prisma.billOfMaterialType.update(args);
  }
  async deleteBillOfMaterialType(
    args: Prisma.BillOfMaterialTypeDeleteArgs
  ): Promise<PrismaBillOfMaterialType> {
    return this.prisma.billOfMaterialType.delete(args);
  }
}