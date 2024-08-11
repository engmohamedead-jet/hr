import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstallmentSaleFeeServiceBase } from "./base/installmentSaleFee.service.base";

@Injectable()
export class InstallmentSaleFeeService extends InstallmentSaleFeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
