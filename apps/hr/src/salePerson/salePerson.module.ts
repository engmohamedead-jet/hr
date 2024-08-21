import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalePersonModuleBase } from "./base/salePerson.module.base";
import { SalePersonService } from "./salePerson.service";
import { SalePersonController } from "./salePerson.controller";
import { SalePersonResolver } from "./salePerson.resolver";

@Module({
  imports: [SalePersonModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalePersonController],
  providers: [SalePersonService, SalePersonResolver],
  exports: [SalePersonService],
})
export class SalePersonModule {}
