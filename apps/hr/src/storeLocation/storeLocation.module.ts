import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StoreLocationModuleBase } from "./base/storeLocation.module.base";
import { StoreLocationService } from "./storeLocation.service";
import { StoreLocationController } from "./storeLocation.controller";
import { StoreLocationResolver } from "./storeLocation.resolver";

@Module({
  imports: [StoreLocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [StoreLocationController],
  providers: [StoreLocationService, StoreLocationResolver],
  exports: [StoreLocationService],
})
export class StoreLocationModule {}
