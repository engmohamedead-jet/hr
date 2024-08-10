import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvoiceTypeModuleBase } from "./base/invoiceType.module.base";
import { InvoiceTypeService } from "./invoiceType.service";
import { InvoiceTypeController } from "./invoiceType.controller";
import { InvoiceTypeResolver } from "./invoiceType.resolver";

@Module({
  imports: [InvoiceTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [InvoiceTypeController],
  providers: [InvoiceTypeService, InvoiceTypeResolver],
  exports: [InvoiceTypeService],
})
export class InvoiceTypeModule {}
