import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkSheetTypeServiceBase } from "./base/workSheetType.service.base";

@Injectable()
export class WorkSheetTypeService extends WorkSheetTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
