import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterRoutingServiceBase } from "./base/workCenterRouting.service.base";

@Injectable()
export class WorkCenterRoutingService extends WorkCenterRoutingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
