import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailyMovementRequestServiceBase } from "./base/dailyMovementRequest.service.base";

@Injectable()
export class DailyMovementRequestService extends DailyMovementRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
