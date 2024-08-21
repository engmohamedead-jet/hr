import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleDetailServiceBase } from "./base/saleDetail.service.base";

@Injectable()
export class SaleDetailService extends SaleDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
