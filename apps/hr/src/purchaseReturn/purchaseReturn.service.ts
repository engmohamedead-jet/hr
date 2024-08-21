import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseReturnServiceBase } from "./base/purchaseReturn.service.base";

@Injectable()
export class PurchaseReturnService extends PurchaseReturnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
