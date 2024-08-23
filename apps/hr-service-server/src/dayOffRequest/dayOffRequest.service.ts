import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DayOffRequestServiceBase } from "./base/dayOffRequest.service.base";

@Injectable()
export class DayOffRequestService extends DayOffRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
