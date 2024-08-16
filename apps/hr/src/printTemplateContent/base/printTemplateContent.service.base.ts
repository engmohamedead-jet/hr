/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PrintTemplateContent as PrismaPrintTemplateContent,
  PrintTemplate as PrismaPrintTemplate,
} from "@prisma/client";

export class PrintTemplateContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PrintTemplateContentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.printTemplateContent.count(args);
  }

  async printTemplateContents(
    args: Prisma.PrintTemplateContentFindManyArgs
  ): Promise<PrismaPrintTemplateContent[]> {
    return this.prisma.printTemplateContent.findMany(args);
  }
  async printTemplateContent(
    args: Prisma.PrintTemplateContentFindUniqueArgs
  ): Promise<PrismaPrintTemplateContent | null> {
    return this.prisma.printTemplateContent.findUnique(args);
  }
  async createPrintTemplateContent(
    args: Prisma.PrintTemplateContentCreateArgs
  ): Promise<PrismaPrintTemplateContent> {
    return this.prisma.printTemplateContent.create(args);
  }
  async updatePrintTemplateContent(
    args: Prisma.PrintTemplateContentUpdateArgs
  ): Promise<PrismaPrintTemplateContent> {
    return this.prisma.printTemplateContent.update(args);
  }
  async deletePrintTemplateContent(
    args: Prisma.PrintTemplateContentDeleteArgs
  ): Promise<PrismaPrintTemplateContent> {
    return this.prisma.printTemplateContent.delete(args);
  }

  async getPrintTemplate(
    parentId: string
  ): Promise<PrismaPrintTemplate | null> {
    return this.prisma.printTemplateContent
      .findUnique({
        where: { id: parentId },
      })
      .printTemplate();
  }
}
