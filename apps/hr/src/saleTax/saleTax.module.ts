import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleTaxModuleBase } from "./base/saleTax.module.base";
import { SaleTaxService } from "./saleTax.service";
import { SaleTaxController } from "./saleTax.controller";
import { SaleTaxResolver } from "./saleTax.resolver";

@Module({
  imports: [SaleTaxModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleTaxController],
  providers: [SaleTaxService, SaleTaxResolver],
  exports: [SaleTaxService],
})
export class SaleTaxModule {}
