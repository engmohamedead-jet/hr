import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkCenterAlternativeServiceBase } from "./base/workCenterAlternative.service.base";

@Injectable()
export class WorkCenterAlternativeService extends WorkCenterAlternativeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
