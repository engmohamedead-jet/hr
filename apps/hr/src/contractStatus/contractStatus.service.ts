import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractStatusServiceBase } from "./base/contractStatus.service.base";

@Injectable()
export class ContractStatusService extends ContractStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
