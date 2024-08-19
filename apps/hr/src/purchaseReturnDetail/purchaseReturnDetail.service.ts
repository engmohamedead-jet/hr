import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseReturnDetailServiceBase } from "./base/purchaseReturnDetail.service.base";

@Injectable()
export class PurchaseReturnDetailService extends PurchaseReturnDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
