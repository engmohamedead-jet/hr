import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterTagServiceBase } from "./base/workCenterTag.service.base";

@Injectable()
export class WorkCenterTagService extends WorkCenterTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
