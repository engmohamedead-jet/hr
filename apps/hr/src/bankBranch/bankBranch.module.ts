import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankBranchModuleBase } from "./base/bankBranch.module.base";
import { BankBranchService } from "./bankBranch.service";
import { BankBranchController } from "./bankBranch.controller";
import { BankBranchResolver } from "./bankBranch.resolver";

@Module({
  imports: [BankBranchModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankBranchController],
  providers: [BankBranchService, BankBranchResolver],
  exports: [BankBranchService],
})
export class BankBranchModule {}
