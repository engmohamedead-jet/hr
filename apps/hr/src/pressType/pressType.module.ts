import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PressTypeModuleBase } from "./base/pressType.module.base";
import { PressTypeService } from "./pressType.service";
import { PressTypeController } from "./pressType.controller";
import { PressTypeResolver } from "./pressType.resolver";

@Module({
  imports: [PressTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [PressTypeController],
  providers: [PressTypeService, PressTypeResolver],
  exports: [PressTypeService],
})
export class PressTypeModule {}
