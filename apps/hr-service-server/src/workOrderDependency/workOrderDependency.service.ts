import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkOrderDependencyServiceBase } from "./base/workOrderDependency.service.base";

@Injectable()
export class WorkOrderDependencyService extends WorkOrderDependencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
