import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkCenterCapacityModuleBase } from "./base/workCenterCapacity.module.base";
import { WorkCenterCapacityService } from "./workCenterCapacity.service";
import { WorkCenterCapacityController } from "./workCenterCapacity.controller";
import { WorkCenterCapacityResolver } from "./workCenterCapacity.resolver";

@Module({
  imports: [WorkCenterCapacityModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkCenterCapacityController],
  providers: [WorkCenterCapacityService, WorkCenterCapacityResolver],
  exports: [WorkCenterCapacityService],
})
export class WorkCenterCapacityModule {}
