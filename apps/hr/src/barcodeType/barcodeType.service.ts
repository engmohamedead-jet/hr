import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BarcodeTypeServiceBase } from "./base/barcodeType.service.base";

@Injectable()
export class BarcodeTypeService extends BarcodeTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
