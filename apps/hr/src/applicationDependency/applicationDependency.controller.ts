import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationDependencyService } from "./applicationDependency.service";
import { ApplicationDependencyControllerBase } from "./base/applicationDependency.controller.base";

@swagger.ApiTags("applicationDependencies")
@common.Controller("applicationDependencies")
export class ApplicationDependencyController extends ApplicationDependencyControllerBase {
  constructor(
    protected readonly service: ApplicationDependencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
