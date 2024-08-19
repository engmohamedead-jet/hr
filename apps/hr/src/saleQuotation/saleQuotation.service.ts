import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleQuotationServiceBase } from "./base/saleQuotation.service.base";

@Injectable()
export class SaleQuotationService extends SaleQuotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
