import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountCategoryModuleBase } from "./base/accountCategory.module.base";
import { AccountCategoryService } from "./accountCategory.service";
import { AccountCategoryController } from "./accountCategory.controller";
import { AccountCategoryResolver } from "./accountCategory.resolver";

@Module({
  imports: [AccountCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountCategoryController],
  providers: [AccountCategoryService, AccountCategoryResolver],
  exports: [AccountCategoryService],
})
export class AccountCategoryModule {}
