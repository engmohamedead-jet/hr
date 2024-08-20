import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimeModeModuleBase } from "./base/timeMode.module.base";
import { TimeModeService } from "./timeMode.service";
import { TimeModeController } from "./timeMode.controller";
import { TimeModeResolver } from "./timeMode.resolver";

@Module({
  imports: [TimeModeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimeModeController],
  providers: [TimeModeService, TimeModeResolver],
  exports: [TimeModeService],
})
export class TimeModeModule {}
