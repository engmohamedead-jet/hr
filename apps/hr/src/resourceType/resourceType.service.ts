import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResourceTypeServiceBase } from "./base/resourceType.service.base";

@Injectable()
export class ResourceTypeService extends ResourceTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
