import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DayOffRequestModuleBase } from "./base/dayOffRequest.module.base";
import { DayOffRequestService } from "./dayOffRequest.service";
import { DayOffRequestController } from "./dayOffRequest.controller";
import { DayOffRequestResolver } from "./dayOffRequest.resolver";

@Module({
  imports: [DayOffRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [DayOffRequestController],
  providers: [DayOffRequestService, DayOffRequestResolver],
  exports: [DayOffRequestService],
})
export class DayOffRequestModule {}
