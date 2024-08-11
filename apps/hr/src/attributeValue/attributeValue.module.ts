import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttributeValueModuleBase } from "./base/attributeValue.module.base";
import { AttributeValueService } from "./attributeValue.service";
import { AttributeValueController } from "./attributeValue.controller";
import { AttributeValueResolver } from "./attributeValue.resolver";

@Module({
  imports: [AttributeValueModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttributeValueController],
  providers: [AttributeValueService, AttributeValueResolver],
  exports: [AttributeValueService],
})
export class AttributeValueModule {}
