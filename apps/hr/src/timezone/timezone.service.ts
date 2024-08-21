import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimezoneServiceBase } from "./base/timezone.service.base";

@Injectable()
export class TimezoneService extends TimezoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
