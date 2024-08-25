import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkOrderStatusModuleBase } from "./base/workOrderStatus.module.base";
import { WorkOrderStatusService } from "./workOrderStatus.service";
import { WorkOrderStatusController } from "./workOrderStatus.controller";
import { WorkOrderStatusResolver } from "./workOrderStatus.resolver";

@Module({
  imports: [WorkOrderStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkOrderStatusController],
  providers: [WorkOrderStatusService, WorkOrderStatusResolver],
  exports: [WorkOrderStatusService],
})
export class WorkOrderStatusModule {}
