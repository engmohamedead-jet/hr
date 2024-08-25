import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterTagModuleBase } from "./base/workCenterTag.module.base";
import { WorkCenterTagService } from "./workCenterTag.service";
import { WorkCenterTagController } from "./workCenterTag.controller";
import { WorkCenterTagResolver } from "./workCenterTag.resolver";

@Module({
  imports: [WorkCenterTagModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterTagController],
  providers: [WorkCenterTagService, WorkCenterTagResolver],
  exports: [WorkCenterTagService],
})
export class WorkCenterTagModule {}
