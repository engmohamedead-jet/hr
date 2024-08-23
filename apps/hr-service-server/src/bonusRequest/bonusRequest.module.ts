import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BonusRequestModuleBase } from "./base/bonusRequest.module.base";
import { BonusRequestService } from "./bonusRequest.service";
import { BonusRequestController } from "./bonusRequest.controller";
import { BonusRequestResolver } from "./bonusRequest.resolver";

@Module({
  imports: [BonusRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [BonusRequestController],
  providers: [BonusRequestService, BonusRequestResolver],
  exports: [BonusRequestService],
})
export class BonusRequestModule {}
