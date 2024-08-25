import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OverNightRequestModuleBase } from "./base/overNightRequest.module.base";
import { OverNightRequestService } from "./overNightRequest.service";
import { OverNightRequestController } from "./overNightRequest.controller";
import { OverNightRequestResolver } from "./overNightRequest.resolver";

@Module({
  imports: [OverNightRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [OverNightRequestController],
  providers: [OverNightRequestService, OverNightRequestResolver],
  exports: [OverNightRequestService],
})
export class OverNightRequestModule {}
