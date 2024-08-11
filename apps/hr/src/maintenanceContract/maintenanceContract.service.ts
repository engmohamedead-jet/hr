import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceContractServiceBase } from "./base/maintenanceContract.service.base";

@Injectable()
export class MaintenanceContractService extends MaintenanceContractServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
