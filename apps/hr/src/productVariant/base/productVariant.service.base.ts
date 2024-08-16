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
  ProductVariant as PrismaProductVariant,
  BillOfMaterialDetail as PrismaBillOfMaterialDetail,
  BillOfMaterial as PrismaBillOfMaterial,
  ProductBarcode as PrismaProductBarcode,
  AttributeValue as PrismaAttributeValue,
  Product as PrismaProduct,
} from "@prisma/client";

export class ProductVariantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductVariantCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productVariant.count(args);
  }

  async productVariants(
    args: Prisma.ProductVariantFindManyArgs
  ): Promise<PrismaProductVariant[]> {
    return this.prisma.productVariant.findMany(args);
  }
  async productVariant(
    args: Prisma.ProductVariantFindUniqueArgs
  ): Promise<PrismaProductVariant | null> {
    return this.prisma.productVariant.findUnique(args);
  }
  async createProductVariant(
    args: Prisma.ProductVariantCreateArgs
  ): Promise<PrismaProductVariant> {
    return this.prisma.productVariant.create(args);
  }
  async updateProductVariant(
    args: Prisma.ProductVariantUpdateArgs
  ): Promise<PrismaProductVariant> {
    return this.prisma.productVariant.update(args);
  }
  async deleteProductVariant(
    args: Prisma.ProductVariantDeleteArgs
  ): Promise<PrismaProductVariant> {
    return this.prisma.productVariant.delete(args);
  }

  async findBillOfMaterialDetails(
    parentId: string,
    args: Prisma.BillOfMaterialDetailFindManyArgs
  ): Promise<PrismaBillOfMaterialDetail[]> {
    return this.prisma.productVariant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .billOfMaterialDetails(args);
  }

  async findBillOfMaterials(
    parentId: string,
    args: Prisma.BillOfMaterialFindManyArgs
  ): Promise<PrismaBillOfMaterial[]> {
    return this.prisma.productVariant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .billOfMaterials(args);
  }

  async findProductBarcodes(
    parentId: string,
    args: Prisma.ProductBarcodeFindManyArgs
  ): Promise<PrismaProductBarcode[]> {
    return this.prisma.productVariant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productBarcodes(args);
  }

  async getAttributeValueId(
    parentId: string
  ): Promise<PrismaAttributeValue | null> {
    return this.prisma.productVariant
      .findUnique({
        where: { id: parentId },
      })
      .attributeValueId();
  }

  async getProductId(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.productVariant
      .findUnique({
        where: { id: parentId },
      })
      .productId();
  }
}