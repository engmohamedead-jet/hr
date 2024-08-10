import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerCateogryServiceBase } from "./base/customerCateogry.service.base";

@Injectable()
export class CustomerCateogryService extends CustomerCateogryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
