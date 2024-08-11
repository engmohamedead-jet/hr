import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CompoundUnitModuleBase } from "./base/compoundUnit.module.base";
import { CompoundUnitService } from "./compoundUnit.service";
import { CompoundUnitController } from "./compoundUnit.controller";
import { CompoundUnitResolver } from "./compoundUnit.resolver";

@Module({
  imports: [CompoundUnitModuleBase, forwardRef(() => AuthModule)],
  controllers: [CompoundUnitController],
  providers: [CompoundUnitService, CompoundUnitResolver],
  exports: [CompoundUnitService],
})
export class CompoundUnitModule {}
