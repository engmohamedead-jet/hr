import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PressTypeServiceBase } from "./base/pressType.service.base";

@Injectable()
export class PressTypeService extends PressTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
