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
  ContractStatus as PrismaContractStatus,
  InstallationContract as PrismaInstallationContract,
} from "@prisma/client";

export class ContractStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContractStatusCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contractStatus.count(args);
  }

  async contractStatuses(
    args: Prisma.ContractStatusFindManyArgs
  ): Promise<PrismaContractStatus[]> {
    return this.prisma.contractStatus.findMany(args);
  }
  async contractStatus(
    args: Prisma.ContractStatusFindUniqueArgs
  ): Promise<PrismaContractStatus | null> {
    return this.prisma.contractStatus.findUnique(args);
  }
  async createContractStatus(
    args: Prisma.ContractStatusCreateArgs
  ): Promise<PrismaContractStatus> {
    return this.prisma.contractStatus.create(args);
  }
  async updateContractStatus(
    args: Prisma.ContractStatusUpdateArgs
  ): Promise<PrismaContractStatus> {
    return this.prisma.contractStatus.update(args);
  }
  async deleteContractStatus(
    args: Prisma.ContractStatusDeleteArgs
  ): Promise<PrismaContractStatus> {
    return this.prisma.contractStatus.delete(args);
  }

  async getInstallationContracts(
    parentId: string
  ): Promise<PrismaInstallationContract | null> {
    return this.prisma.contractStatus
      .findUnique({
        where: { id: parentId },
      })
      .installationContracts();
  }
}
