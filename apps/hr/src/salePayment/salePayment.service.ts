import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalePaymentServiceBase } from "./base/salePayment.service.base";

@Injectable()
export class SalePaymentService extends SalePaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
