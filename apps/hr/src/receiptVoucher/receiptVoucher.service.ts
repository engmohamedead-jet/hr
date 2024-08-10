import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceiptVoucherServiceBase } from "./base/receiptVoucher.service.base";

@Injectable()
export class ReceiptVoucherService extends ReceiptVoucherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
