import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterCapacityServiceBase } from "./base/workCenterCapacity.service.base";

@Injectable()
export class WorkCenterCapacityService extends WorkCenterCapacityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
