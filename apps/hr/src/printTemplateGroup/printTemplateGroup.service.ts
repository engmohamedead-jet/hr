import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrintTemplateGroupServiceBase } from "./base/printTemplateGroup.service.base";

@Injectable()
export class PrintTemplateGroupService extends PrintTemplateGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
