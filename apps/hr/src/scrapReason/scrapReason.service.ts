import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrapReasonServiceBase } from "./base/scrapReason.service.base";

@Injectable()
export class ScrapReasonService extends ScrapReasonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
