import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalaryItemTypeServiceBase } from "./base/salaryItemType.service.base";

@Injectable()
export class SalaryItemTypeService extends SalaryItemTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
