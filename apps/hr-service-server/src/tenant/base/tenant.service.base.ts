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
  Tenant as PrismaTenant,
  Attendance as PrismaAttendance,
  BonusRequest as PrismaBonusRequest,
  CheckInOut as PrismaCheckInOut,
  DailyMovementRequest as PrismaDailyMovementRequest,
  DayOffRequest as PrismaDayOffRequest,
  EmployeeDepartment as PrismaEmployeeDepartment,
  EmployeeGroup as PrismaEmployeeGroup,
  EmployeeRole as PrismaEmployeeRole,
  Employee as PrismaEmployee,
  Machine as PrismaMachine,
  FiscalMonth as PrismaFiscalMonth,
  JobTitle as PrismaJobTitle,
  LeaveRequestType as PrismaLeaveRequestType,
  LeaveRequest as PrismaLeaveRequest,
  OverNightRequest as PrismaOverNightRequest,
} from "@prisma/client";

export class TenantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TenantCountArgs, "select">): Promise<number> {
    return this.prisma.tenant.count(args);
  }

  async tenants(args: Prisma.TenantFindManyArgs): Promise<PrismaTenant[]> {
    return this.prisma.tenant.findMany(args);
  }
  async tenant(
    args: Prisma.TenantFindUniqueArgs
  ): Promise<PrismaTenant | null> {
    return this.prisma.tenant.findUnique(args);
  }
  async createTenant(args: Prisma.TenantCreateArgs): Promise<PrismaTenant> {
    return this.prisma.tenant.create(args);
  }
  async updateTenant(args: Prisma.TenantUpdateArgs): Promise<PrismaTenant> {
    return this.prisma.tenant.update(args);
  }
  async deleteTenant(args: Prisma.TenantDeleteArgs): Promise<PrismaTenant> {
    return this.prisma.tenant.delete(args);
  }

  async findAttendances(
    parentId: string,
    args: Prisma.AttendanceFindManyArgs
  ): Promise<PrismaAttendance[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attendances(args);
  }

  async findBonusRequests(
    parentId: string,
    args: Prisma.BonusRequestFindManyArgs
  ): Promise<PrismaBonusRequest[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bonusRequests(args);
  }

  async findCheckInOuts(
    parentId: string,
    args: Prisma.CheckInOutFindManyArgs
  ): Promise<PrismaCheckInOut[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .checkInOuts(args);
  }

  async findDailyMovements(
    parentId: string,
    args: Prisma.DailyMovementRequestFindManyArgs
  ): Promise<PrismaDailyMovementRequest[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .dailyMovements(args);
  }

  async findDayOffs(
    parentId: string,
    args: Prisma.DayOffRequestFindManyArgs
  ): Promise<PrismaDayOffRequest[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .dayOffs(args);
  }

  async findEmployeeDepartments(
    parentId: string,
    args: Prisma.EmployeeDepartmentFindManyArgs
  ): Promise<PrismaEmployeeDepartment[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employeeDepartments(args);
  }

  async findEmployeeGroups(
    parentId: string,
    args: Prisma.EmployeeGroupFindManyArgs
  ): Promise<PrismaEmployeeGroup[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employeeGroups(args);
  }

  async findEmployeeRoles(
    parentId: string,
    args: Prisma.EmployeeRoleFindManyArgs
  ): Promise<PrismaEmployeeRole[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employeeRoles(args);
  }

  async findEmployees(
    parentId: string,
    args: Prisma.EmployeeFindManyArgs
  ): Promise<PrismaEmployee[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employees(args);
  }

  async findFingerprintMachines(
    parentId: string,
    args: Prisma.MachineFindManyArgs
  ): Promise<PrismaMachine[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fingerprintMachines(args);
  }

  async findFiscalMonths(
    parentId: string,
    args: Prisma.FiscalMonthFindManyArgs
  ): Promise<PrismaFiscalMonth[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fiscalMonths(args);
  }

  async findJobTitles(
    parentId: string,
    args: Prisma.JobTitleFindManyArgs
  ): Promise<PrismaJobTitle[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .jobTitles(args);
  }

  async findLeaveRequestTypes(
    parentId: string,
    args: Prisma.LeaveRequestTypeFindManyArgs
  ): Promise<PrismaLeaveRequestType[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leaveRequestTypes(args);
  }

  async findLeaveRequests(
    parentId: string,
    args: Prisma.LeaveRequestFindManyArgs
  ): Promise<PrismaLeaveRequest[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leaveRequests(args);
  }

  async findOverNights(
    parentId: string,
    args: Prisma.OverNightRequestFindManyArgs
  ): Promise<PrismaOverNightRequest[]> {
    return this.prisma.tenant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .overNights(args);
  }
}