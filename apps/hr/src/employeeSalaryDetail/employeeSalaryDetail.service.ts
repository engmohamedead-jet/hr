import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeSalaryDetailServiceBase } from "./base/employeeSalaryDetail.service.base";

@Injectable()
export class EmployeeSalaryDetailService extends EmployeeSalaryDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
