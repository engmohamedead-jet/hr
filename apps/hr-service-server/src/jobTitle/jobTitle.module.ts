import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobTitleModuleBase } from "./base/jobTitle.module.base";
import { JobTitleService } from "./jobTitle.service";
import { JobTitleController } from "./jobTitle.controller";
import { JobTitleResolver } from "./jobTitle.resolver";

@Module({
  imports: [JobTitleModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobTitleController],
  providers: [JobTitleService, JobTitleResolver],
  exports: [JobTitleService],
})
export class JobTitleModule {}
