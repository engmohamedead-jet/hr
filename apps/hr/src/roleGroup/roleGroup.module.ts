import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoleGroupModuleBase } from "./base/roleGroup.module.base";
import { RoleGroupService } from "./roleGroup.service";
import { RoleGroupController } from "./roleGroup.controller";
import { RoleGroupResolver } from "./roleGroup.resolver";

@Module({
  imports: [RoleGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoleGroupController],
  providers: [RoleGroupService, RoleGroupResolver],
  exports: [RoleGroupService],
})
export class RoleGroupModule {}
