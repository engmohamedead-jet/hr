import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimeoffTypeModuleBase } from "./base/timeoffType.module.base";
import { TimeoffTypeService } from "./timeoffType.service";
import { TimeoffTypeController } from "./timeoffType.controller";
import { TimeoffTypeResolver } from "./timeoffType.resolver";

@Module({
  imports: [TimeoffTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimeoffTypeController],
  providers: [TimeoffTypeService, TimeoffTypeResolver],
  exports: [TimeoffTypeService],
})
export class TimeoffTypeModule {}
