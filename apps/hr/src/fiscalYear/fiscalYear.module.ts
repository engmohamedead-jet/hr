import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FiscalYearModuleBase } from "./base/fiscalYear.module.base";
import { FiscalYearService } from "./fiscalYear.service";
import { FiscalYearController } from "./fiscalYear.controller";
import { FiscalYearResolver } from "./fiscalYear.resolver";

@Module({
  imports: [FiscalYearModuleBase, forwardRef(() => AuthModule)],
  controllers: [FiscalYearController],
  providers: [FiscalYearService, FiscalYearResolver],
  exports: [FiscalYearService],
})
export class FiscalYearModule {}
