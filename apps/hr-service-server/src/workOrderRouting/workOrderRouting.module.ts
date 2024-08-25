import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkOrderRoutingModuleBase } from "./base/workOrderRouting.module.base";
import { WorkOrderRoutingService } from "./workOrderRouting.service";
import { WorkOrderRoutingController } from "./workOrderRouting.controller";
import { WorkOrderRoutingResolver } from "./workOrderRouting.resolver";

@Module({
  imports: [WorkOrderRoutingModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkOrderRoutingController],
  providers: [WorkOrderRoutingService, WorkOrderRoutingResolver],
  exports: [WorkOrderRoutingService],
})
export class WorkOrderRoutingModule {}
