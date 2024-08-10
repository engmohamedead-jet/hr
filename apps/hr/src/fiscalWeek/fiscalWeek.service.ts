import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FiscalWeekServiceBase } from "./base/fiscalWeek.service.base";

@Injectable()
export class FiscalWeekService extends FiscalWeekServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
