import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ControlTypeServiceBase } from "./base/controlType.service.base";

@Injectable()
export class ControlTypeService extends ControlTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
