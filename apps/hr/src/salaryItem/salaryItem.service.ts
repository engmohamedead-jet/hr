import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalaryItemServiceBase } from "./base/salaryItem.service.base";

@Injectable()
export class SalaryItemService extends SalaryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
