import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoorTypeServiceBase } from "./base/doorType.service.base";

@Injectable()
export class DoorTypeService extends DoorTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
