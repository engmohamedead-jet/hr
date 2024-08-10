import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountCategoryServiceBase } from "./base/accountCategory.service.base";

@Injectable()
export class AccountCategoryService extends AccountCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
