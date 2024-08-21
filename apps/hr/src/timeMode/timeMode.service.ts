import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeModeServiceBase } from "./base/timeMode.service.base";

@Injectable()
export class TimeModeService extends TimeModeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
