import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterAlternativeModuleBase } from "./base/workCenterAlternative.module.base";
import { WorkCenterAlternativeService } from "./workCenterAlternative.service";
import { WorkCenterAlternativeController } from "./workCenterAlternative.controller";
import { WorkCenterAlternativeResolver } from "./workCenterAlternative.resolver";

@Module({
  imports: [WorkCenterAlternativeModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterAlternativeController],
  providers: [WorkCenterAlternativeService, WorkCenterAlternativeResolver],
  exports: [WorkCenterAlternativeService],
})
export class WorkCenterAlternativeModule {}
