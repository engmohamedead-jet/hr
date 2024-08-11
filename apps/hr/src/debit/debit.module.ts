import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DebitModuleBase } from "./base/debit.module.base";
import { DebitService } from "./debit.service";
import { DebitController } from "./debit.controller";
import { DebitResolver } from "./debit.resolver";

@Module({
  imports: [DebitModuleBase, forwardRef(() => AuthModule)],
  controllers: [DebitController],
  providers: [DebitService, DebitResolver],
  exports: [DebitService],
})
export class DebitModule {}
