import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SaleTeamServiceBase } from "./base/saleTeam.service.base";

@Injectable()
export class SaleTeamService extends SaleTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
