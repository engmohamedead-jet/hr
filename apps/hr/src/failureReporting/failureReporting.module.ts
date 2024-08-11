import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FailureReportingModuleBase } from "./base/failureReporting.module.base";
import { FailureReportingService } from "./failureReporting.service";
import { FailureReportingController } from "./failureReporting.controller";
import { FailureReportingResolver } from "./failureReporting.resolver";

@Module({
  imports: [FailureReportingModuleBase, forwardRef(() => AuthModule)],
  controllers: [FailureReportingController],
  providers: [FailureReportingService, FailureReportingResolver],
  exports: [FailureReportingService],
})
export class FailureReportingModule {}
