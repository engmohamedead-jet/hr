/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Employee as PrismaEmployee,
  PaymentVoucher as PrismaPaymentVoucher,
  ReceiptVoucher as PrismaReceiptVoucher,
  SalePerson as PrismaSalePerson,
  EmployeeClass as PrismaEmployeeClass,
  EmployeeDepartment as PrismaEmployeeDepartment,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class EmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EmployeeCountArgs, "select">): Promise<number> {
    return this.prisma.employee.count(args);
  }

  async employees(
    args: Prisma.EmployeeFindManyArgs
  ): Promise<PrismaEmployee[]> {
    return this.prisma.employee.findMany(args);
  }
  async employee(
    args: Prisma.EmployeeFindUniqueArgs
  ): Promise<PrismaEmployee | null> {
    return this.prisma.employee.findUnique(args);
  }
  async createEmployee(
    args: Prisma.EmployeeCreateArgs
  ): Promise<PrismaEmployee> {
    return this.prisma.employee.create(args);
  }
  async updateEmployee(
    args: Prisma.EmployeeUpdateArgs
  ): Promise<PrismaEmployee> {
    return this.prisma.employee.update(args);
  }
  async deleteEmployee(
    args: Prisma.EmployeeDeleteArgs
  ): Promise<PrismaEmployee> {
    return this.prisma.employee.delete(args);
  }

  async findPaymentVouchers(
    parentId: string,
    args: Prisma.PaymentVoucherFindManyArgs
  ): Promise<PrismaPaymentVoucher[]> {
    return this.prisma.employee
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paymentVouchers(args);
  }

  async findReceiptVouchers(
    parentId: string,
    args: Prisma.ReceiptVoucherFindManyArgs
  ): Promise<PrismaReceiptVoucher[]> {
    return this.prisma.employee
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .receiptVouchers(args);
  }

  async findSalePeople(
    parentId: string,
    args: Prisma.SalePersonFindManyArgs
  ): Promise<PrismaSalePerson[]> {
    return this.prisma.employee
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .salePeople(args);
  }

  async getEmployeeClassId(
    parentId: string
  ): Promise<PrismaEmployeeClass | null> {
    return this.prisma.employee
      .findUnique({
        where: { id: parentId },
      })
      .employeeClassId();
  }

  async getEmployeeDepartmentId(
    parentId: string
  ): Promise<PrismaEmployeeDepartment | null> {
    return this.prisma.employee
      .findUnique({
        where: { id: parentId },
      })
      .employeeDepartmentId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.employee
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
