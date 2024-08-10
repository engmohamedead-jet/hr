import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankBranchServiceBase } from "./base/bankBranch.service.base";

@Injectable()
export class BankBranchService extends BankBranchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
