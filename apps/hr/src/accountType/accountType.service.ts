import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountTypeServiceBase } from "./base/accountType.service.base";

@Injectable()
export class AccountTypeService extends AccountTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
