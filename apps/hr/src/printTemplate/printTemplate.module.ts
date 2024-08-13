import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrintTemplateModuleBase } from "./base/printTemplate.module.base";
import { PrintTemplateService } from "./printTemplate.service";
import { PrintTemplateController } from "./printTemplate.controller";
import { PrintTemplateResolver } from "./printTemplate.resolver";

@Module({
  imports: [PrintTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrintTemplateController],
  providers: [PrintTemplateService, PrintTemplateResolver],
  exports: [PrintTemplateService],
})
export class PrintTemplateModule {}
