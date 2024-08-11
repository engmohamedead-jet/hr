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
  PaymentTerm as PrismaPaymentTerm,
  Period as PrismaPeriod,
  InstallmentSaleFee as PrismaInstallmentSaleFee,
} from "@prisma/client";

export class PaymentTermServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentTermCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentTerm.count(args);
  }

  async paymentTerms(
    args: Prisma.PaymentTermFindManyArgs
  ): Promise<PrismaPaymentTerm[]> {
    return this.prisma.paymentTerm.findMany(args);
  }
  async paymentTerm(
    args: Prisma.PaymentTermFindUniqueArgs
  ): Promise<PrismaPaymentTerm | null> {
    return this.prisma.paymentTerm.findUnique(args);
  }
  async createPaymentTerm(
    args: Prisma.PaymentTermCreateArgs
  ): Promise<PrismaPaymentTerm> {
    return this.prisma.paymentTerm.create(args);
  }
  async updatePaymentTerm(
    args: Prisma.PaymentTermUpdateArgs
  ): Promise<PrismaPaymentTerm> {
    return this.prisma.paymentTerm.update(args);
  }
  async deletePaymentTerm(
    args: Prisma.PaymentTermDeleteArgs
  ): Promise<PrismaPaymentTerm> {
    return this.prisma.paymentTerm.delete(args);
  }

  async getDuePeriodId(parentId: string): Promise<PrismaPeriod | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .duePeriodId();
  }

  async getInstallmentSaleFeeId(
    parentId: string
  ): Promise<PrismaInstallmentSaleFee | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .installmentSaleFeeId();
  }

  async getInstallmentSaleFeePostingPeriodId(
    parentId: string
  ): Promise<PrismaPeriod | null> {
    return this.prisma.paymentTerm
      .findUnique({
        where: { id: parentId },
      })
      .installmentSaleFeePostingPeriodId();
  }
}