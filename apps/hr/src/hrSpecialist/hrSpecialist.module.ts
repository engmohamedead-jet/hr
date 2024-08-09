import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HrSpecialistModuleBase } from "./base/hrSpecialist.module.base";
import { HrSpecialistService } from "./hrSpecialist.service";
import { HrSpecialistController } from "./hrSpecialist.controller";
import { HrSpecialistResolver } from "./hrSpecialist.resolver";

@Module({
  imports: [HrSpecialistModuleBase, forwardRef(() => AuthModule)],
  controllers: [HrSpecialistController],
  providers: [HrSpecialistService, HrSpecialistResolver],
  exports: [HrSpecialistService],
})
export class HrSpecialistModule {}
