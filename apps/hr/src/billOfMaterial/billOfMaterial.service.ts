import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillOfMaterialServiceBase } from "./base/billOfMaterial.service.base";

@Injectable()
export class BillOfMaterialService extends BillOfMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
