import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncomeItemServiceBase } from "./base/incomeItem.service.base";

@Injectable()
export class IncomeItemService extends IncomeItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
