import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterModuleBase } from "./base/workCenter.module.base";
import { WorkCenterService } from "./workCenter.service";
import { WorkCenterController } from "./workCenter.controller";
import { WorkCenterResolver } from "./workCenter.resolver";

@Module({
  imports: [WorkCenterModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterController],
  providers: [WorkCenterService, WorkCenterResolver],
  exports: [WorkCenterService],
})
export class WorkCenterModule {}
