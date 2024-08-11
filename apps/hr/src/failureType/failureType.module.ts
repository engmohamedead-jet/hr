import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FailureTypeModuleBase } from "./base/failureType.module.base";
import { FailureTypeService } from "./failureType.service";
import { FailureTypeController } from "./failureType.controller";
import { FailureTypeResolver } from "./failureType.resolver";

@Module({
  imports: [FailureTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [FailureTypeController],
  providers: [FailureTypeService, FailureTypeResolver],
  exports: [FailureTypeService],
})
export class FailureTypeModule {}
