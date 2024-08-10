import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StoreTypeModuleBase } from "./base/storeType.module.base";
import { StoreTypeService } from "./storeType.service";
import { StoreTypeController } from "./storeType.controller";
import { StoreTypeResolver } from "./storeType.resolver";

@Module({
  imports: [StoreTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [StoreTypeController],
  providers: [StoreTypeService, StoreTypeResolver],
  exports: [StoreTypeService],
})
export class StoreTypeModule {}
