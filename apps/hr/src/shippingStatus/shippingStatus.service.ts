import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShippingStatusServiceBase } from "./base/shippingStatus.service.base";

@Injectable()
export class ShippingStatusService extends ShippingStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
