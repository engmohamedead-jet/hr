/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Attachment as PrismaAttachment } from "@prisma/client";

export class AttachmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttachmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attachment.count(args);
  }

  async attachments(
    args: Prisma.AttachmentFindManyArgs
  ): Promise<PrismaAttachment[]> {
    return this.prisma.attachment.findMany(args);
  }
  async attachment(
    args: Prisma.AttachmentFindUniqueArgs
  ): Promise<PrismaAttachment | null> {
    return this.prisma.attachment.findUnique(args);
  }
  async createAttachment(
    args: Prisma.AttachmentCreateArgs
  ): Promise<PrismaAttachment> {
    return this.prisma.attachment.create(args);
  }
  async updateAttachment(
    args: Prisma.AttachmentUpdateArgs
  ): Promise<PrismaAttachment> {
    return this.prisma.attachment.update(args);
  }
  async deleteAttachment(
    args: Prisma.AttachmentDeleteArgs
  ): Promise<PrismaAttachment> {
    return this.prisma.attachment.delete(args);
  }
}
