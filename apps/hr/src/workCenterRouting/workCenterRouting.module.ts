import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterRoutingModuleBase } from "./base/workCenterRouting.module.base";
import { WorkCenterRoutingService } from "./workCenterRouting.service";
import { WorkCenterRoutingController } from "./workCenterRouting.controller";
import { WorkCenterRoutingResolver } from "./workCenterRouting.resolver";

@Module({
  imports: [WorkCenterRoutingModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterRoutingController],
  providers: [WorkCenterRoutingService, WorkCenterRoutingResolver],
  exports: [WorkCenterRoutingService],
})
export class WorkCenterRoutingModule {}
