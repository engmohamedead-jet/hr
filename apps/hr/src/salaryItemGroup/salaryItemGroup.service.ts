import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalaryItemGroupServiceBase } from "./base/salaryItemGroup.service.base";

@Injectable()
export class SalaryItemGroupService extends SalaryItemGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
