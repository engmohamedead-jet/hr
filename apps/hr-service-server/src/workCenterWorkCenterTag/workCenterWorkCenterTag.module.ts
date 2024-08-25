import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterWorkCenterTagModuleBase } from "./base/workCenterWorkCenterTag.module.base";
import { WorkCenterWorkCenterTagService } from "./workCenterWorkCenterTag.service";
import { WorkCenterWorkCenterTagController } from "./workCenterWorkCenterTag.controller";
import { WorkCenterWorkCenterTagResolver } from "./workCenterWorkCenterTag.resolver";

@Module({
  imports: [WorkCenterWorkCenterTagModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterWorkCenterTagController],
  providers: [WorkCenterWorkCenterTagService, WorkCenterWorkCenterTagResolver],
  exports: [WorkCenterWorkCenterTagService],
})
export class WorkCenterWorkCenterTagModule {}
