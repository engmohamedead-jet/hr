import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashRepositoryServiceBase } from "./base/cashRepository.service.base";

@Injectable()
export class CashRepositoryService extends CashRepositoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
