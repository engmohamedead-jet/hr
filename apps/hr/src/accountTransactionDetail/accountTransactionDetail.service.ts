import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountTransactionDetailServiceBase } from "./base/accountTransactionDetail.service.base";

@Injectable()
export class AccountTransactionDetailService extends AccountTransactionDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
