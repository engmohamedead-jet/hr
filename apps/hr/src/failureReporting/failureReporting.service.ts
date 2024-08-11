import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailureReportingServiceBase } from "./base/failureReporting.service.base";

@Injectable()
export class FailureReportingService extends FailureReportingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
