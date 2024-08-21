import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreLocationServiceBase } from "./base/storeLocation.service.base";

@Injectable()
export class StoreLocationService extends StoreLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
