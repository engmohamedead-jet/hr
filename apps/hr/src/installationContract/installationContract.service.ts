import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstallationContractServiceBase } from "./base/installationContract.service.base";

@Injectable()
export class InstallationContractService extends InstallationContractServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
