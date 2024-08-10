import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountTransactionServiceBase } from "./base/accountTransaction.service.base";

@Injectable()
export class AccountTransactionService extends AccountTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
