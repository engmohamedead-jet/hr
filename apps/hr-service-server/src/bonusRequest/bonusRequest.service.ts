import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BonusRequestServiceBase } from "./base/bonusRequest.service.base";

@Injectable()
export class BonusRequestService extends BonusRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
