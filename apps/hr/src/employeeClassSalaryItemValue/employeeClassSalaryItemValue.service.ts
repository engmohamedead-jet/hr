import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeClassSalaryItemValueServiceBase } from "./base/employeeClassSalaryItemValue.service.base";

@Injectable()
export class EmployeeClassSalaryItemValueService extends EmployeeClassSalaryItemValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
