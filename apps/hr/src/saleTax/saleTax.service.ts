import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleTaxServiceBase } from "./base/saleTax.service.base";

@Injectable()
export class SaleTaxService extends SaleTaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
