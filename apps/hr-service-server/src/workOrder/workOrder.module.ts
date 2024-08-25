import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkOrderModuleBase } from "./base/workOrder.module.base";
import { WorkOrderService } from "./workOrder.service";
import { WorkOrderController } from "./workOrder.controller";
import { WorkOrderResolver } from "./workOrder.resolver";

@Module({
  imports: [WorkOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkOrderController],
  providers: [WorkOrderService, WorkOrderResolver],
  exports: [WorkOrderService],
})
export class WorkOrderModule {}
