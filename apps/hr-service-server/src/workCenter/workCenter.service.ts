import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterServiceBase } from "./base/workCenter.service.base";

@Injectable()
export class WorkCenterService extends WorkCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
