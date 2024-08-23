import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeDepartmentServiceBase } from "./base/employeeDepartment.service.base";

@Injectable()
export class EmployeeDepartmentService extends EmployeeDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
