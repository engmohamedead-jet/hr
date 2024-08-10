import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OfficeModuleBase } from "./base/office.module.base";
import { OfficeService } from "./office.service";
import { OfficeController } from "./office.controller";
import { OfficeResolver } from "./office.resolver";

@Module({
  imports: [OfficeModuleBase, forwardRef(() => AuthModule)],
  controllers: [OfficeController],
  providers: [OfficeService, OfficeResolver],
  exports: [OfficeService],
})
export class OfficeModule {}
