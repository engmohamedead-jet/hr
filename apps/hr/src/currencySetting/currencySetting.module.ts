import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CurrencySettingModuleBase } from "./base/currencySetting.module.base";
import { CurrencySettingService } from "./currencySetting.service";
import { CurrencySettingController } from "./currencySetting.controller";
import { CurrencySettingResolver } from "./currencySetting.resolver";

@Module({
  imports: [CurrencySettingModuleBase, forwardRef(() => AuthModule)],
  controllers: [CurrencySettingController],
  providers: [CurrencySettingService, CurrencySettingResolver],
  exports: [CurrencySettingService],
})
export class CurrencySettingModule {}
