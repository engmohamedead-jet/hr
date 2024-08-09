import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminRoleServiceBase } from "./base/adminRole.service.base";

@Injectable()
export class AdminRoleService extends AdminRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
