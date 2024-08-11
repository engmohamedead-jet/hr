import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductDepartmentServiceBase } from "./base/productDepartment.service.base";

@Injectable()
export class ProductDepartmentService extends ProductDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
