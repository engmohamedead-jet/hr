import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerTypeModuleBase } from "./base/customerType.module.base";
import { CustomerTypeService } from "./customerType.service";
import { CustomerTypeController } from "./customerType.controller";
import { CustomerTypeResolver } from "./customerType.resolver";

@Module({
  imports: [CustomerTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerTypeController],
  providers: [CustomerTypeService, CustomerTypeResolver],
  exports: [CustomerTypeService],
})
export class CustomerTypeModule {}
