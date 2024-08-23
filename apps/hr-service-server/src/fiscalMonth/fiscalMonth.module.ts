import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FiscalMonthModuleBase } from "./base/fiscalMonth.module.base";
import { FiscalMonthService } from "./fiscalMonth.service";
import { FiscalMonthController } from "./fiscalMonth.controller";
import { FiscalMonthResolver } from "./fiscalMonth.resolver";

@Module({
  imports: [FiscalMonthModuleBase, forwardRef(() => AuthModule)],
  controllers: [FiscalMonthController],
  providers: [FiscalMonthService, FiscalMonthResolver],
  exports: [FiscalMonthService],
})
export class FiscalMonthModule {}
