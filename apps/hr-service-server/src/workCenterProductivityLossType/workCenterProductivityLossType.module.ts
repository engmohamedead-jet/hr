import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterProductivityLossTypeModuleBase } from "./base/workCenterProductivityLossType.module.base";
import { WorkCenterProductivityLossTypeService } from "./workCenterProductivityLossType.service";
import { WorkCenterProductivityLossTypeController } from "./workCenterProductivityLossType.controller";
import { WorkCenterProductivityLossTypeResolver } from "./workCenterProductivityLossType.resolver";

@Module({
  imports: [
    WorkCenterProductivityLossTypeModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [WorkCenterProductivityLossTypeController],
  providers: [
    WorkCenterProductivityLossTypeService,
    WorkCenterProductivityLossTypeResolver,
  ],
  exports: [WorkCenterProductivityLossTypeService],
})
export class WorkCenterProductivityLossTypeModule {}
