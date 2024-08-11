import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DebitServiceBase } from "./base/debit.service.base";

@Injectable()
export class DebitService extends DebitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
