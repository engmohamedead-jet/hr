import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FiscalWeekModuleBase } from "./base/fiscalWeek.module.base";
import { FiscalWeekService } from "./fiscalWeek.service";
import { FiscalWeekController } from "./fiscalWeek.controller";
import { FiscalWeekResolver } from "./fiscalWeek.resolver";

@Module({
  imports: [FiscalWeekModuleBase, forwardRef(() => AuthModule)],
  controllers: [FiscalWeekController],
  providers: [FiscalWeekService, FiscalWeekResolver],
  exports: [FiscalWeekService],
})
export class FiscalWeekModule {}
