import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionDocumentServiceBase } from "./base/productionDocument.service.base";

@Injectable()
export class ProductionDocumentService extends ProductionDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
