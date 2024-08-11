import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodicMaintenanceOrderServiceBase } from "./base/periodicMaintenanceOrder.service.base";

@Injectable()
export class PeriodicMaintenanceOrderService extends PeriodicMaintenanceOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
