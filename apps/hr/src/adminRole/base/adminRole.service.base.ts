/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AdminRole as PrismaAdminRole } from "@prisma/client";

export class AdminRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AdminRoleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.adminRole.count(args);
  }

  async adminRoles(
    args: Prisma.AdminRoleFindManyArgs
  ): Promise<PrismaAdminRole[]> {
    return this.prisma.adminRole.findMany(args);
  }
  async adminRole(
    args: Prisma.AdminRoleFindUniqueArgs
  ): Promise<PrismaAdminRole | null> {
    return this.prisma.adminRole.findUnique(args);
  }
  async createAdminRole(
    args: Prisma.AdminRoleCreateArgs
  ): Promise<PrismaAdminRole> {
    return this.prisma.adminRole.create(args);
  }
  async updateAdminRole(
    args: Prisma.AdminRoleUpdateArgs
  ): Promise<PrismaAdminRole> {
    return this.prisma.adminRole.update(args);
  }
  async deleteAdminRole(
    args: Prisma.AdminRoleDeleteArgs
  ): Promise<PrismaAdminRole> {
    return this.prisma.adminRole.delete(args);
  }
}