import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleOrderServiceBase } from "./base/saleOrder.service.base";

@Injectable()
export class SaleOrderService extends SaleOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
