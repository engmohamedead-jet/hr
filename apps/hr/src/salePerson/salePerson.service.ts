import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalePersonServiceBase } from "./base/salePerson.service.base";

@Injectable()
export class SalePersonService extends SalePersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
