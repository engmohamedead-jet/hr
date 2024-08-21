import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalaryLawServiceBase } from "./base/salaryLaw.service.base";

@Injectable()
export class SalaryLawService extends SalaryLawServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
