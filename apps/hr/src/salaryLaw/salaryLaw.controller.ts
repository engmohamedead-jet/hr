import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalaryLawService } from "./salaryLaw.service";
import { SalaryLawControllerBase } from "./base/salaryLaw.controller.base";

@swagger.ApiTags("salaryLaws")
@common.Controller("salaryLaws")
export class SalaryLawController extends SalaryLawControllerBase {
  constructor(
    protected readonly service: SalaryLawService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
