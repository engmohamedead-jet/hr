import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeoffTypeServiceBase } from "./base/timeoffType.service.base";

@Injectable()
export class TimeoffTypeService extends TimeoffTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
