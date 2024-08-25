import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterProductivityServiceBase } from "./base/workCenterProductivity.service.base";

@Injectable()
export class WorkCenterProductivityService extends WorkCenterProductivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
