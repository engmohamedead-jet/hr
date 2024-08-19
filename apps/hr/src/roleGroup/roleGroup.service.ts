import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoleGroupServiceBase } from "./base/roleGroup.service.base";

@Injectable()
export class RoleGroupService extends RoleGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
