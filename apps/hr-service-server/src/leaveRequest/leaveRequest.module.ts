import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeaveRequestModuleBase } from "./base/leaveRequest.module.base";
import { LeaveRequestService } from "./leaveRequest.service";
import { LeaveRequestController } from "./leaveRequest.controller";
import { LeaveRequestResolver } from "./leaveRequest.resolver";

@Module({
  imports: [LeaveRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestService, LeaveRequestResolver],
  exports: [LeaveRequestService],
})
export class LeaveRequestModule {}
