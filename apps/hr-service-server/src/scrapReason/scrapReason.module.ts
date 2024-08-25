import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScrapReasonModuleBase } from "./base/scrapReason.module.base";
import { ScrapReasonService } from "./scrapReason.service";
import { ScrapReasonController } from "./scrapReason.controller";
import { ScrapReasonResolver } from "./scrapReason.resolver";

@Module({
  imports: [ScrapReasonModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScrapReasonController],
  providers: [ScrapReasonService, ScrapReasonResolver],
  exports: [ScrapReasonService],
})
export class ScrapReasonModule {}
