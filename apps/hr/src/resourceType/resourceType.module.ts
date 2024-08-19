import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResourceTypeModuleBase } from "./base/resourceType.module.base";
import { ResourceTypeService } from "./resourceType.service";
import { ResourceTypeController } from "./resourceType.controller";
import { ResourceTypeResolver } from "./resourceType.resolver";

@Module({
  imports: [ResourceTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResourceTypeController],
  providers: [ResourceTypeService, ResourceTypeResolver],
  exports: [ResourceTypeService],
})
export class ResourceTypeModule {}
