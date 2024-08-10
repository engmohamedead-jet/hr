import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankTypeServiceBase } from "./base/bankType.service.base";

@Injectable()
export class BankTypeService extends BankTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
