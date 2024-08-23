import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeaveRequestTypeModuleBase } from "./base/leaveRequestType.module.base";
import { LeaveRequestTypeService } from "./leaveRequestType.service";
import { LeaveRequestTypeController } from "./leaveRequestType.controller";
import { LeaveRequestTypeResolver } from "./leaveRequestType.resolver";

@Module({
  imports: [LeaveRequestTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [LeaveRequestTypeController],
  providers: [LeaveRequestTypeService, LeaveRequestTypeResolver],
  exports: [LeaveRequestTypeService],
})
export class LeaveRequestTypeModule {}
