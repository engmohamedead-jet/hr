import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoorTypeModuleBase } from "./base/doorType.module.base";
import { DoorTypeService } from "./doorType.service";
import { DoorTypeController } from "./doorType.controller";
import { DoorTypeResolver } from "./doorType.resolver";

@Module({
  imports: [DoorTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoorTypeController],
  providers: [DoorTypeService, DoorTypeResolver],
  exports: [DoorTypeService],
})
export class DoorTypeModule {}
