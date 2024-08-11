import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MotorTypeModuleBase } from "./base/motorType.module.base";
import { MotorTypeService } from "./motorType.service";
import { MotorTypeController } from "./motorType.controller";
import { MotorTypeResolver } from "./motorType.resolver";

@Module({
  imports: [MotorTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [MotorTypeController],
  providers: [MotorTypeService, MotorTypeResolver],
  exports: [MotorTypeService],
})
export class MotorTypeModule {}
