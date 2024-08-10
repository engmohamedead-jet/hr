import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreTypeServiceBase } from "./base/storeType.service.base";

@Injectable()
export class StoreTypeService extends StoreTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
