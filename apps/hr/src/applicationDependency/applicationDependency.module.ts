import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationDependencyModuleBase } from "./base/applicationDependency.module.base";
import { ApplicationDependencyService } from "./applicationDependency.service";
import { ApplicationDependencyController } from "./applicationDependency.controller";
import { ApplicationDependencyResolver } from "./applicationDependency.resolver";

@Module({
  imports: [ApplicationDependencyModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationDependencyController],
  providers: [ApplicationDependencyService, ApplicationDependencyResolver],
  exports: [ApplicationDependencyService],
})
export class ApplicationDependencyModule {}
