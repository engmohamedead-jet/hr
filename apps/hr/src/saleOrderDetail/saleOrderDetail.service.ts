import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleOrderDetailServiceBase } from "./base/saleOrderDetail.service.base";

@Injectable()
export class SaleOrderDetailService extends SaleOrderDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
