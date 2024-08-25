import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CheckInOutModuleBase } from "./base/checkInOut.module.base";
import { CheckInOutService } from "./checkInOut.service";
import { CheckInOutController } from "./checkInOut.controller";
import { CheckInOutResolver } from "./checkInOut.resolver";

@Module({
  imports: [CheckInOutModuleBase, forwardRef(() => AuthModule)],
  controllers: [CheckInOutController],
  providers: [CheckInOutService, CheckInOutResolver],
  exports: [CheckInOutService],
})
export class CheckInOutModule {}
