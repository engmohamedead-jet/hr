import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleReturnDetailServiceBase } from "./base/saleReturnDetail.service.base";

@Injectable()
export class SaleReturnDetailService extends SaleReturnDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
