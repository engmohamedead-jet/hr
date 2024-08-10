import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalePriceTypeServiceBase } from "./base/salePriceType.service.base";

@Injectable()
export class SalePriceTypeService extends SalePriceTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
