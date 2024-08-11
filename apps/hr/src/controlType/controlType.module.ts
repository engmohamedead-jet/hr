import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ControlTypeModuleBase } from "./base/controlType.module.base";
import { ControlTypeService } from "./controlType.service";
import { ControlTypeController } from "./controlType.controller";
import { ControlTypeResolver } from "./controlType.resolver";

@Module({
  imports: [ControlTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ControlTypeController],
  providers: [ControlTypeService, ControlTypeResolver],
  exports: [ControlTypeService],
})
export class ControlTypeModule {}
