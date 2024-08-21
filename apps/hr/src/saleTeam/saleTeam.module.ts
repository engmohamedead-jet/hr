import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleTeamModuleBase } from "./base/saleTeam.module.base";
import { SaleTeamService } from "./saleTeam.service";
import { SaleTeamController } from "./saleTeam.controller";
import { SaleTeamResolver } from "./saleTeam.resolver";

@Module({
  imports: [SaleTeamModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleTeamController],
  providers: [SaleTeamService, SaleTeamResolver],
  exports: [SaleTeamService],
})
export class SaleTeamModule {}
