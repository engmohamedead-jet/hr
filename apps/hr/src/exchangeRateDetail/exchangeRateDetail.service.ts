import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExchangeRateDetailServiceBase } from "./base/exchangeRateDetail.service.base";

@Injectable()
export class ExchangeRateDetailService extends ExchangeRateDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
