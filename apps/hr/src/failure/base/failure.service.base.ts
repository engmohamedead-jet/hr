/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Failure as PrismaFailure } from "@prisma/client";

export class FailureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FailureCountArgs, "select">): Promise<number> {
    return this.prisma.failure.count(args);
  }

  async failures(args: Prisma.FailureFindManyArgs): Promise<PrismaFailure[]> {
    return this.prisma.failure.findMany(args);
  }
  async failure(
    args: Prisma.FailureFindUniqueArgs
  ): Promise<PrismaFailure | null> {
    return this.prisma.failure.findUnique(args);
  }
  async createFailure(args: Prisma.FailureCreateArgs): Promise<PrismaFailure> {
    return this.prisma.failure.create(args);
  }
  async updateFailure(args: Prisma.FailureUpdateArgs): Promise<PrismaFailure> {
    return this.prisma.failure.update(args);
  }
  async deleteFailure(args: Prisma.FailureDeleteArgs): Promise<PrismaFailure> {
    return this.prisma.failure.delete(args);
  }
}