import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TenantUserServiceBase } from "./base/tenantUser.service.base";

@Injectable()
export class TenantUserService extends TenantUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
