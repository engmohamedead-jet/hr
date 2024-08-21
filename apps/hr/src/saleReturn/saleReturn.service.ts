import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleReturnServiceBase } from "./base/saleReturn.service.base";

@Injectable()
export class SaleReturnService extends SaleReturnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
