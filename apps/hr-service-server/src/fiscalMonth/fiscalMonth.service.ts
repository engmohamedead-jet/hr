import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FiscalMonthServiceBase } from "./base/fiscalMonth.service.base";

@Injectable()
export class FiscalMonthService extends FiscalMonthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
