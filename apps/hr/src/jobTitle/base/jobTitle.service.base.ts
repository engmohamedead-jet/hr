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
  JobTitle as PrismaJobTitle,
  Employee as PrismaEmployee,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class JobTitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.JobTitleCountArgs, "select">): Promise<number> {
    return this.prisma.jobTitle.count(args);
  }

  async jobTitles(
    args: Prisma.JobTitleFindManyArgs
  ): Promise<PrismaJobTitle[]> {
    return this.prisma.jobTitle.findMany(args);
  }
  async jobTitle(
    args: Prisma.JobTitleFindUniqueArgs
  ): Promise<PrismaJobTitle | null> {
    return this.prisma.jobTitle.findUnique(args);
  }
  async createJobTitle(
    args: Prisma.JobTitleCreateArgs
  ): Promise<PrismaJobTitle> {
    return this.prisma.jobTitle.create(args);
  }
  async updateJobTitle(
    args: Prisma.JobTitleUpdateArgs
  ): Promise<PrismaJobTitle> {
    return this.prisma.jobTitle.update(args);
  }
  async deleteJobTitle(
    args: Prisma.JobTitleDeleteArgs
  ): Promise<PrismaJobTitle> {
    return this.prisma.jobTitle.delete(args);
  }

  async findEmployees(
    parentId: string,
    args: Prisma.EmployeeFindManyArgs
  ): Promise<PrismaEmployee[]> {
    return this.prisma.jobTitle
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employees(args);
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.jobTitle
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
