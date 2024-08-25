import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobTitleService } from "./jobTitle.service";
import { JobTitleControllerBase } from "./base/jobTitle.controller.base";

@swagger.ApiTags("jobTitles")
@common.Controller("jobTitles")
export class JobTitleController extends JobTitleControllerBase {
  constructor(
    protected readonly service: JobTitleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
