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
  ProductionDocument as PrismaProductionDocument,
} from "@prisma/client";

export class ProductionDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductionDocumentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productionDocument.count(args);
  }

  async productionDocuments(
    args: Prisma.ProductionDocumentFindManyArgs
  ): Promise<PrismaProductionDocument[]> {
    return this.prisma.productionDocument.findMany(args);
  }
  async productionDocument(
    args: Prisma.ProductionDocumentFindUniqueArgs
  ): Promise<PrismaProductionDocument | null> {
    return this.prisma.productionDocument.findUnique(args);
  }
  async createProductionDocument(
    args: Prisma.ProductionDocumentCreateArgs
  ): Promise<PrismaProductionDocument> {
    return this.prisma.productionDocument.create(args);
  }
  async updateProductionDocument(
    args: Prisma.ProductionDocumentUpdateArgs
  ): Promise<PrismaProductionDocument> {
    return this.prisma.productionDocument.update(args);
  }
  async deleteProductionDocument(
    args: Prisma.ProductionDocumentDeleteArgs
  ): Promise<PrismaProductionDocument> {
    return this.prisma.productionDocument.delete(args);
  }
}
