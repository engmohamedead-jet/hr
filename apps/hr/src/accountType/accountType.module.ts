import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountTypeModuleBase } from "./base/accountType.module.base";
import { AccountTypeService } from "./accountType.service";
import { AccountTypeController } from "./accountType.controller";
import { AccountTypeResolver } from "./accountType.resolver";

@Module({
  imports: [AccountTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountTypeController],
  providers: [AccountTypeService, AccountTypeResolver],
  exports: [AccountTypeService],
})
export class AccountTypeModule {}
