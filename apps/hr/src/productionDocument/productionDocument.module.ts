import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductionDocumentModuleBase } from "./base/productionDocument.module.base";
import { ProductionDocumentService } from "./productionDocument.service";
import { ProductionDocumentController } from "./productionDocument.controller";
import { ProductionDocumentResolver } from "./productionDocument.resolver";

@Module({
  imports: [ProductionDocumentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductionDocumentController],
  providers: [ProductionDocumentService, ProductionDocumentResolver],
  exports: [ProductionDocumentService],
})
export class ProductionDocumentModule {}
