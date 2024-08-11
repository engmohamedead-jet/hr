import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstallationContractModuleBase } from "./base/installationContract.module.base";
import { InstallationContractService } from "./installationContract.service";
import { InstallationContractController } from "./installationContract.controller";
import { InstallationContractResolver } from "./installationContract.resolver";

@Module({
  imports: [InstallationContractModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstallationContractController],
  providers: [InstallationContractService, InstallationContractResolver],
  exports: [InstallationContractService],
})
export class InstallationContractModule {}
