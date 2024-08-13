import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrintTemplateGroupModuleBase } from "./base/printTemplateGroup.module.base";
import { PrintTemplateGroupService } from "./printTemplateGroup.service";
import { PrintTemplateGroupController } from "./printTemplateGroup.controller";
import { PrintTemplateGroupResolver } from "./printTemplateGroup.resolver";

@Module({
  imports: [PrintTemplateGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrintTemplateGroupController],
  providers: [PrintTemplateGroupService, PrintTemplateGroupResolver],
  exports: [PrintTemplateGroupService],
})
export class PrintTemplateGroupModule {}
