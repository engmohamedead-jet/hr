import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractPeriodServiceBase } from "./base/contractPeriod.service.base";

@Injectable()
export class ContractPeriodService extends ContractPeriodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
