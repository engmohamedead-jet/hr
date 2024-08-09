import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HrSpecialistService } from "./hrSpecialist.service";
import { HrSpecialistControllerBase } from "./base/hrSpecialist.controller.base";

@swagger.ApiTags("hrSpecialists")
@common.Controller("hrSpecialists")
export class HrSpecialistController extends HrSpecialistControllerBase {
  constructor(
    protected readonly service: HrSpecialistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
