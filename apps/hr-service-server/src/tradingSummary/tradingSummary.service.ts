import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradingSummaryServiceBase } from "./base/tradingSummary.service.base";

@Injectable()
export class TradingSummaryService extends TradingSummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
