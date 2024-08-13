import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrintTemplateContentServiceBase } from "./base/printTemplateContent.service.base";

@Injectable()
export class PrintTemplateContentService extends PrintTemplateContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
