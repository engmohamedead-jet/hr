import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterWorkCenterTagServiceBase } from "./base/workCenterWorkCenterTag.service.base";

@Injectable()
export class WorkCenterWorkCenterTagService extends WorkCenterWorkCenterTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
