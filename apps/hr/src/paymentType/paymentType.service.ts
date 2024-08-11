import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentTypeServiceBase } from "./base/paymentType.service.base";

@Injectable()
export class PaymentTypeService extends PaymentTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
