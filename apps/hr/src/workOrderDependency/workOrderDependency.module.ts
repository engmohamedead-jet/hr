import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkOrderDependencyModuleBase } from "./base/workOrderDependency.module.base";
import { WorkOrderDependencyService } from "./workOrderDependency.service";
import { WorkOrderDependencyController } from "./workOrderDependency.controller";
import { WorkOrderDependencyResolver } from "./workOrderDependency.resolver";

@Module({
  imports: [WorkOrderDependencyModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkOrderDependencyController],
  providers: [WorkOrderDependencyService, WorkOrderDependencyResolver],
  exports: [WorkOrderDependencyService],
})
export class WorkOrderDependencyModule {}
