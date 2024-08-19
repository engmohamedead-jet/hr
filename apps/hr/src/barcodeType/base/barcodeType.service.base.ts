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
  BarcodeType as PrismaBarcodeType,
  ProductBarcode as PrismaProductBarcode,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class BarcodeTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BarcodeTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.barcodeType.count(args);
  }

  async barcodeTypes(
    args: Prisma.BarcodeTypeFindManyArgs
  ): Promise<PrismaBarcodeType[]> {
    return this.prisma.barcodeType.findMany(args);
  }
  async barcodeType(
    args: Prisma.BarcodeTypeFindUniqueArgs
  ): Promise<PrismaBarcodeType | null> {
    return this.prisma.barcodeType.findUnique(args);
  }
  async createBarcodeType(
    args: Prisma.BarcodeTypeCreateArgs
  ): Promise<PrismaBarcodeType> {
    return this.prisma.barcodeType.create(args);
  }
  async updateBarcodeType(
    args: Prisma.BarcodeTypeUpdateArgs
  ): Promise<PrismaBarcodeType> {
    return this.prisma.barcodeType.update(args);
  }
  async deleteBarcodeType(
    args: Prisma.BarcodeTypeDeleteArgs
  ): Promise<PrismaBarcodeType> {
    return this.prisma.barcodeType.delete(args);
  }

  async findProductBarcodes(
    parentId: number,
    args: Prisma.ProductBarcodeFindManyArgs
  ): Promise<PrismaProductBarcode[]> {
    return this.prisma.barcodeType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productBarcodes(args);
  }

  async getTenantId(parentId: number): Promise<PrismaTenant | null> {
    return this.prisma.barcodeType
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
