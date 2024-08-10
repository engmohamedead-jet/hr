import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CashRepositoryModuleBase } from "./base/cashRepository.module.base";
import { CashRepositoryService } from "./cashRepository.service";
import { CashRepositoryController } from "./cashRepository.controller";
import { CashRepositoryResolver } from "./cashRepository.resolver";

@Module({
  imports: [CashRepositoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [CashRepositoryController],
  providers: [CashRepositoryService, CashRepositoryResolver],
  exports: [CashRepositoryService],
})
export class CashRepositoryModule {}
