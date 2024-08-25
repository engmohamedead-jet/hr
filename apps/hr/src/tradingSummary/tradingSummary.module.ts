import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TradingSummaryModuleBase } from "./base/tradingSummary.module.base";
import { TradingSummaryService } from "./tradingSummary.service";
import { TradingSummaryController } from "./tradingSummary.controller";
import { TradingSummaryResolver } from "./tradingSummary.resolver";

@Module({
  imports: [TradingSummaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [TradingSummaryController],
  providers: [TradingSummaryService, TradingSummaryResolver],
  exports: [TradingSummaryService],
})
export class TradingSummaryModule {}
