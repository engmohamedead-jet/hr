import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerCateogryModuleBase } from "./base/customerCateogry.module.base";
import { CustomerCateogryService } from "./customerCateogry.service";
import { CustomerCateogryController } from "./customerCateogry.controller";
import { CustomerCateogryResolver } from "./customerCateogry.resolver";

@Module({
  imports: [CustomerCateogryModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerCateogryController],
  providers: [CustomerCateogryService, CustomerCateogryResolver],
  exports: [CustomerCateogryService],
})
export class CustomerCateogryModule {}
