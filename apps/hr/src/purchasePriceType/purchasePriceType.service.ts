import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchasePriceTypeServiceBase } from "./base/purchasePriceType.service.base";

@Injectable()
export class PurchasePriceTypeService extends PurchasePriceTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
