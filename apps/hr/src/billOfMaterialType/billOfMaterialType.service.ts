import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillOfMaterialTypeServiceBase } from "./base/billOfMaterialType.service.base";

@Injectable()
export class BillOfMaterialTypeService extends BillOfMaterialTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
