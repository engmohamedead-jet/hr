import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionAvailabilityServiceBase } from "./base/productionAvailability.service.base";

@Injectable()
export class ProductionAvailabilityService extends ProductionAvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
