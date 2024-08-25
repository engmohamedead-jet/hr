import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkSheetTypeModuleBase } from "./base/workSheetType.module.base";
import { WorkSheetTypeService } from "./workSheetType.service";
import { WorkSheetTypeController } from "./workSheetType.controller";
import { WorkSheetTypeResolver } from "./workSheetType.resolver";

@Module({
  imports: [WorkSheetTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkSheetTypeController],
  providers: [WorkSheetTypeService, WorkSheetTypeResolver],
  exports: [WorkSheetTypeService],
})
export class WorkSheetTypeModule {}
