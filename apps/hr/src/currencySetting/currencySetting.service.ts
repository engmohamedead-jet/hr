import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CurrencySettingServiceBase } from "./base/currencySetting.service.base";

@Injectable()
export class CurrencySettingService extends CurrencySettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
