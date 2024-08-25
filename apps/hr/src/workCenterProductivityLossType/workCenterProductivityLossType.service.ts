import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterProductivityLossTypeServiceBase } from "./base/workCenterProductivityLossType.service.base";

@Injectable()
export class WorkCenterProductivityLossTypeService extends WorkCenterProductivityLossTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
