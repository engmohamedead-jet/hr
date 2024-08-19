import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleQuotationDetailServiceBase } from "./base/saleQuotationDetail.service.base";

@Injectable()
export class SaleQuotationDetailService extends SaleQuotationDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
