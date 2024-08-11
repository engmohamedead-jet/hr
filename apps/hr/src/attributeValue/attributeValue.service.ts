import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttributeValueServiceBase } from "./base/attributeValue.service.base";

@Injectable()
export class AttributeValueService extends AttributeValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
