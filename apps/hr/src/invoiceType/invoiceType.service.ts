import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvoiceTypeServiceBase } from "./base/invoiceType.service.base";

@Injectable()
export class InvoiceTypeService extends InvoiceTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
