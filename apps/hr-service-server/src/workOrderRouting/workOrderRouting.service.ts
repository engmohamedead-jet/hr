import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkOrderRoutingServiceBase } from "./base/workOrderRouting.service.base";

@Injectable()
export class WorkOrderRoutingService extends WorkOrderRoutingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
