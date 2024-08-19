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
  Unit as PrismaUnit,
  BillOfMaterialDetail as PrismaBillOfMaterialDetail,
  BillOfMaterial as PrismaBillOfMaterial,
  ProductUnit as PrismaProductUnit,
  ProductionOrder as PrismaProductionOrder,
  Product as PrismaProduct,
  PurchaseDetail as PrismaPurchaseDetail,
  PurchaseReturnDetail as PrismaPurchaseReturnDetail,
  SaleDetail as PrismaSaleDetail,
  SaleQuotationDetail as PrismaSaleQuotationDetail,
  SaleReturnDetail as PrismaSaleReturnDetail,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class UnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UnitCountArgs, "select">): Promise<number> {
    return this.prisma.unit.count(args);
  }

  async units(args: Prisma.UnitFindManyArgs): Promise<PrismaUnit[]> {
    return this.prisma.unit.findMany(args);
  }
  async unit(args: Prisma.UnitFindUniqueArgs): Promise<PrismaUnit | null> {
    return this.prisma.unit.findUnique(args);
  }
  async createUnit(args: Prisma.UnitCreateArgs): Promise<PrismaUnit> {
    return this.prisma.unit.create(args);
  }
  async updateUnit(args: Prisma.UnitUpdateArgs): Promise<PrismaUnit> {
    return this.prisma.unit.update(args);
  }
  async deleteUnit(args: Prisma.UnitDeleteArgs): Promise<PrismaUnit> {
    return this.prisma.unit.delete(args);
  }

  async findBillOfMaterialDetails(
    parentId: string,
    args: Prisma.BillOfMaterialDetailFindManyArgs
  ): Promise<PrismaBillOfMaterialDetail[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .billOfMaterialDetails(args);
  }

  async findBillOfMaterials(
    parentId: string,
    args: Prisma.BillOfMaterialFindManyArgs
  ): Promise<PrismaBillOfMaterial[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .billOfMaterials(args);
  }

  async findProductUnits(
    parentId: string,
    args: Prisma.ProductUnitFindManyArgs
  ): Promise<PrismaProductUnit[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productUnits(args);
  }

  async findProductionOrders(
    parentId: string,
    args: Prisma.ProductionOrderFindManyArgs
  ): Promise<PrismaProductionOrder[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productionOrders(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async findPurchaseDetails(
    parentId: string,
    args: Prisma.PurchaseDetailFindManyArgs
  ): Promise<PrismaPurchaseDetail[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .purchaseDetails(args);
  }

  async findPurchaseReturnDetails(
    parentId: string,
    args: Prisma.PurchaseReturnDetailFindManyArgs
  ): Promise<PrismaPurchaseReturnDetail[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .purchaseReturnDetails(args);
  }

  async findSaleDetails(
    parentId: string,
    args: Prisma.SaleDetailFindManyArgs
  ): Promise<PrismaSaleDetail[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .saleDetails(args);
  }

  async findSaleQuotationDetails(
    parentId: string,
    args: Prisma.SaleQuotationDetailFindManyArgs
  ): Promise<PrismaSaleQuotationDetail[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .saleQuotationDetails(args);
  }

  async findSaleReturnDetails(
    parentId: string,
    args: Prisma.SaleReturnDetailFindManyArgs
  ): Promise<PrismaSaleReturnDetail[]> {
    return this.prisma.unit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .saleReturnDetails(args);
  }

  async getProductUnitCompareUnits(
    parentId: string
  ): Promise<PrismaProductUnit | null> {
    return this.prisma.unit
      .findUnique({
        where: { id: parentId },
      })
      .productUnitCompareUnits();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.unit
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
