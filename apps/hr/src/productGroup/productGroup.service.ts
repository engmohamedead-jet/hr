import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductGroupServiceBase } from "./base/productGroup.service.base";

@Injectable()
export class ProductGroupService extends ProductGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
