import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionTypeServiceBase } from "./base/transactionType.service.base";

@Injectable()
export class TransactionTypeService extends TransactionTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
