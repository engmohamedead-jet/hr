import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SettingGroupModuleBase } from "./base/settingGroup.module.base";
import { SettingGroupService } from "./settingGroup.service";
import { SettingGroupController } from "./settingGroup.controller";
import { SettingGroupResolver } from "./settingGroup.resolver";

@Module({
  imports: [SettingGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [SettingGroupController],
  providers: [SettingGroupService, SettingGroupResolver],
  exports: [SettingGroupService],
})
export class SettingGroupModule {}
