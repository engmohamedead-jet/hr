import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseDetailServiceBase } from "./base/purchaseDetail.service.base";

@Injectable()
export class PurchaseDetailService extends PurchaseDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
