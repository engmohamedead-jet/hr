import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterProductivityLossServiceBase } from "./base/workCenterProductivityLoss.service.base";

@Injectable()
export class WorkCenterProductivityLossService extends WorkCenterProductivityLossServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
