import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceContractModuleBase } from "./base/maintenanceContract.module.base";
import { MaintenanceContractService } from "./maintenanceContract.service";
import { MaintenanceContractController } from "./maintenanceContract.controller";
import { MaintenanceContractResolver } from "./maintenanceContract.resolver";

@Module({
  imports: [MaintenanceContractModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceContractController],
  providers: [MaintenanceContractService, MaintenanceContractResolver],
  exports: [MaintenanceContractService],
})
export class MaintenanceContractModule {}
