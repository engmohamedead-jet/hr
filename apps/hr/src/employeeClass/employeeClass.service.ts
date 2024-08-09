import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeClassServiceBase } from "./base/employeeClass.service.base";

@Injectable()
export class EmployeeClassService extends EmployeeClassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
