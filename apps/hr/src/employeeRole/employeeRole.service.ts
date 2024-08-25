import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeRoleServiceBase } from "./base/employeeRole.service.base";

@Injectable()
export class EmployeeRoleService extends EmployeeRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
