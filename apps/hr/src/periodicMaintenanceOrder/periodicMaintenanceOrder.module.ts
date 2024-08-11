import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodicMaintenanceOrderModuleBase } from "./base/periodicMaintenanceOrder.module.base";
import { PeriodicMaintenanceOrderService } from "./periodicMaintenanceOrder.service";
import { PeriodicMaintenanceOrderController } from "./periodicMaintenanceOrder.controller";
import { PeriodicMaintenanceOrderResolver } from "./periodicMaintenanceOrder.resolver";

@Module({
  imports: [PeriodicMaintenanceOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodicMaintenanceOrderController],
  providers: [
    PeriodicMaintenanceOrderService,
    PeriodicMaintenanceOrderResolver,
  ],
  exports: [PeriodicMaintenanceOrderService],
})
export class PeriodicMaintenanceOrderModule {}
