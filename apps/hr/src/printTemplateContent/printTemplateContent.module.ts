import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrintTemplateContentModuleBase } from "./base/printTemplateContent.module.base";
import { PrintTemplateContentService } from "./printTemplateContent.service";
import { PrintTemplateContentController } from "./printTemplateContent.controller";
import { PrintTemplateContentResolver } from "./printTemplateContent.resolver";

@Module({
  imports: [PrintTemplateContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrintTemplateContentController],
  providers: [PrintTemplateContentService, PrintTemplateContentResolver],
  exports: [PrintTemplateContentService],
})
export class PrintTemplateContentModule {}
