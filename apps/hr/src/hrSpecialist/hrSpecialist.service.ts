import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HrSpecialistServiceBase } from "./base/hrSpecialist.service.base";

@Injectable()
export class HrSpecialistService extends HrSpecialistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
