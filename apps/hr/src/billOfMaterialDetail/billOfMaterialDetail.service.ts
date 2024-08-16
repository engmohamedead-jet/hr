import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillOfMaterialDetailServiceBase } from "./base/billOfMaterialDetail.service.base";

@Injectable()
export class BillOfMaterialDetailService extends BillOfMaterialDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
