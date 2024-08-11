import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleTaxService } from "./saleTax.service";
import { SaleTaxControllerBase } from "./base/saleTax.controller.base";

@swagger.ApiTags("saleTaxes")
@common.Controller("saleTaxes")
export class SaleTaxController extends SaleTaxControllerBase {
  constructor(
    protected readonly service: SaleTaxService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
