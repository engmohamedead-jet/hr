import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductBarcodeServiceBase } from "./base/productBarcode.service.base";

@Injectable()
export class ProductBarcodeService extends ProductBarcodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
