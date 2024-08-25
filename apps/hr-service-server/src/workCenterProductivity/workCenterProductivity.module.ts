import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterProductivityModuleBase } from "./base/workCenterProductivity.module.base";
import { WorkCenterProductivityService } from "./workCenterProductivity.service";
import { WorkCenterProductivityController } from "./workCenterProductivity.controller";
import { WorkCenterProductivityResolver } from "./workCenterProductivity.resolver";

@Module({
  imports: [WorkCenterProductivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterProductivityController],
  providers: [WorkCenterProductivityService, WorkCenterProductivityResolver],
  exports: [WorkCenterProductivityService],
})
export class WorkCenterProductivityModule {}
