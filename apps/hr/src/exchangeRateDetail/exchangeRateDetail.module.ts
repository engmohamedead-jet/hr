import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExchangeRateDetailModuleBase } from "./base/exchangeRateDetail.module.base";
import { ExchangeRateDetailService } from "./exchangeRateDetail.service";
import { ExchangeRateDetailController } from "./exchangeRateDetail.controller";
import { ExchangeRateDetailResolver } from "./exchangeRateDetail.resolver";

@Module({
  imports: [ExchangeRateDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExchangeRateDetailController],
  providers: [ExchangeRateDetailService, ExchangeRateDetailResolver],
  exports: [ExchangeRateDetailService],
})
export class ExchangeRateDetailModule {}
