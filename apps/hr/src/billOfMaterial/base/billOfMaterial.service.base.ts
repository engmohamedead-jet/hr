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
  BillOfMaterial as PrismaBillOfMaterial,
  BillOfMaterialDetail as PrismaBillOfMaterialDetail,
  ProductionOrder as PrismaProductionOrder,
  BillOfMaterialType as PrismaBillOfMaterialType,
  Product as PrismaProduct,
  ProductVariant as PrismaProductVariant,
  Unit as PrismaUnit,
} from "@prisma/client";

export class BillOfMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BillOfMaterialCountArgs, "select">
  ): Promise<number> {
    return this.prisma.billOfMaterial.count(args);
  }

  async billOfMaterials(
    args: Prisma.BillOfMaterialFindManyArgs
  ): Promise<PrismaBillOfMaterial[]> {
    return this.prisma.billOfMaterial.findMany(args);
  }
  async billOfMaterial(
    args: Prisma.BillOfMaterialFindUniqueArgs
  ): Promise<PrismaBillOfMaterial | null> {
    return this.prisma.billOfMaterial.findUnique(args);
  }
  async createBillOfMaterial(
    args: Prisma.BillOfMaterialCreateArgs
  ): Promise<PrismaBillOfMaterial> {
    return this.prisma.billOfMaterial.create(args);
  }
  async updateBillOfMaterial(
    args: Prisma.BillOfMaterialUpdateArgs
  ): Promise<PrismaBillOfMaterial> {
    return this.prisma.billOfMaterial.update(args);
  }
  async deleteBillOfMaterial(
    args: Prisma.BillOfMaterialDeleteArgs
  ): Promise<PrismaBillOfMaterial> {
    return this.prisma.billOfMaterial.delete(args);
  }

  async findBillOfMaterialDetails(
    parentId: string,
    args: Prisma.BillOfMaterialDetailFindManyArgs
  ): Promise<PrismaBillOfMaterialDetail[]> {
    return this.prisma.billOfMaterial
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .billOfMaterialDetails(args);
  }

  async findProductionOrders(
    parentId: string,
    args: Prisma.ProductionOrderFindManyArgs
  ): Promise<PrismaProductionOrder[]> {
    return this.prisma.billOfMaterial
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productionOrders(args);
  }

  async getBillOfMaterialTypeId(
    parentId: string
  ): Promise<PrismaBillOfMaterialType | null> {
    return this.prisma.billOfMaterial
      .findUnique({
        where: { id: parentId },
      })
      .billOfMaterialTypeId();
  }

  async getProductId(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.billOfMaterial
      .findUnique({
        where: { id: parentId },
      })
      .productId();
  }

  async getProductVariantId(
    parentId: string
  ): Promise<PrismaProductVariant | null> {
    return this.prisma.billOfMaterial
      .findUnique({
        where: { id: parentId },
      })
      .productVariantId();
  }

  async getUnitId(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.billOfMaterial
      .findUnique({
        where: { id: parentId },
      })
      .unitId();
  }
}