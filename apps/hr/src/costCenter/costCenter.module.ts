import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CostCenterModuleBase } from "./base/costCenter.module.base";
import { CostCenterService } from "./costCenter.service";
import { CostCenterController } from "./costCenter.controller";
import { CostCenterResolver } from "./costCenter.resolver";

@Module({
  imports: [CostCenterModuleBase, forwardRef(() => AuthModule)],
  controllers: [CostCenterController],
  providers: [CostCenterService, CostCenterResolver],
  exports: [CostCenterService],
})
export class CostCenterModule {}
