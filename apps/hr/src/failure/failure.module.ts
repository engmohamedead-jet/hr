import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FailureModuleBase } from "./base/failure.module.base";
import { FailureService } from "./failure.service";
import { FailureController } from "./failure.controller";
import { FailureResolver } from "./failure.resolver";

@Module({
  imports: [FailureModuleBase, forwardRef(() => AuthModule)],
  controllers: [FailureController],
  providers: [FailureService, FailureResolver],
  exports: [FailureService],
})
export class FailureModule {}
