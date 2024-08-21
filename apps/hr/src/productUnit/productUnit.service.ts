import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductUnitServiceBase } from "./base/productUnit.service.base";

@Injectable()
export class ProductUnitService extends ProductUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
