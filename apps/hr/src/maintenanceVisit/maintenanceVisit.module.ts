import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceVisitModuleBase } from "./base/maintenanceVisit.module.base";
import { MaintenanceVisitService } from "./maintenanceVisit.service";
import { MaintenanceVisitController } from "./maintenanceVisit.controller";
import { MaintenanceVisitResolver } from "./maintenanceVisit.resolver";

@Module({
  imports: [MaintenanceVisitModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceVisitController],
  providers: [MaintenanceVisitService, MaintenanceVisitResolver],
  exports: [MaintenanceVisitService],
})
export class MaintenanceVisitModule {}
