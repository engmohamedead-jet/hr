import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankTypeModuleBase } from "./base/bankType.module.base";
import { BankTypeService } from "./bankType.service";
import { BankTypeController } from "./bankType.controller";
import { BankTypeResolver } from "./bankType.resolver";

@Module({
  imports: [BankTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankTypeController],
  providers: [BankTypeService, BankTypeResolver],
  exports: [BankTypeService],
})
export class BankTypeModule {}
