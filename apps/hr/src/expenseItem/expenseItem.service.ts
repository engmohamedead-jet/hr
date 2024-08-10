import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseItemServiceBase } from "./base/expenseItem.service.base";

@Injectable()
export class ExpenseItemService extends ExpenseItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
