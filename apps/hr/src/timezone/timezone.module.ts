import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimezoneModuleBase } from "./base/timezone.module.base";
import { TimezoneService } from "./timezone.service";
import { TimezoneController } from "./timezone.controller";
import { TimezoneResolver } from "./timezone.resolver";

@Module({
  imports: [TimezoneModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimezoneController],
  providers: [TimezoneService, TimezoneResolver],
  exports: [TimezoneService],
})
export class TimezoneModule {}
