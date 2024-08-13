import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrintTemplateServiceBase } from "./base/printTemplate.service.base";

@Injectable()
export class PrintTemplateService extends PrintTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
