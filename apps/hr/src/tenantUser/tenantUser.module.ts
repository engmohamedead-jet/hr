import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TenantUserModuleBase } from "./base/tenantUser.module.base";
import { TenantUserService } from "./tenantUser.service";
import { TenantUserController } from "./tenantUser.controller";
import { TenantUserResolver } from "./tenantUser.resolver";

@Module({
  imports: [TenantUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [TenantUserController],
  providers: [TenantUserService, TenantUserResolver],
  exports: [TenantUserService],
})
export class TenantUserModule {}
