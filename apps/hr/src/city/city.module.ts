import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CityModuleBase } from "./base/city.module.base";
import { CityService } from "./city.service";
import { CityController } from "./city.controller";
import { CityResolver } from "./city.resolver";

@Module({
  imports: [CityModuleBase, forwardRef(() => AuthModule)],
  controllers: [CityController],
  providers: [CityService, CityResolver],
  exports: [CityService],
})
export class CityModule {}
