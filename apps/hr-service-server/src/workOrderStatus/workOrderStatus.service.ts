import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkOrderStatusServiceBase } from "./base/workOrderStatus.service.base";

@Injectable()
export class WorkOrderStatusService extends WorkOrderStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
