import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductionAvailabilityModuleBase } from "./base/productionAvailability.module.base";
import { ProductionAvailabilityService } from "./productionAvailability.service";
import { ProductionAvailabilityController } from "./productionAvailability.controller";
import { ProductionAvailabilityResolver } from "./productionAvailability.resolver";

@Module({
  imports: [ProductionAvailabilityModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductionAvailabilityController],
  providers: [ProductionAvailabilityService, ProductionAvailabilityResolver],
  exports: [ProductionAvailabilityService],
})
export class ProductionAvailabilityModule {}
