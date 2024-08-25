import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterProductivityLossModuleBase } from "./base/workCenterProductivityLoss.module.base";
import { WorkCenterProductivityLossService } from "./workCenterProductivityLoss.service";
import { WorkCenterProductivityLossController } from "./workCenterProductivityLoss.controller";
import { WorkCenterProductivityLossResolver } from "./workCenterProductivityLoss.resolver";

@Module({
  imports: [WorkCenterProductivityLossModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterProductivityLossController],
  providers: [
    WorkCenterProductivityLossService,
    WorkCenterProductivityLossResolver,
  ],
  exports: [WorkCenterProductivityLossService],
})
export class WorkCenterProductivityLossModule {}
