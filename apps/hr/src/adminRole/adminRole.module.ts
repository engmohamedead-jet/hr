import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdminRoleModuleBase } from "./base/adminRole.module.base";
import { AdminRoleService } from "./adminRole.service";
import { AdminRoleController } from "./adminRole.controller";
import { AdminRoleResolver } from "./adminRole.resolver";

@Module({
  imports: [AdminRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdminRoleController],
  providers: [AdminRoleService, AdminRoleResolver],
  exports: [AdminRoleService],
})
export class AdminRoleModule {}
