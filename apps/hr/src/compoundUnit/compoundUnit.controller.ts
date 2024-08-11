import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompoundUnitService } from "./compoundUnit.service";
import { CompoundUnitControllerBase } from "./base/compoundUnit.controller.base";

@swagger.ApiTags("compoundUnits")
@common.Controller("compoundUnits")
export class CompoundUnitController extends CompoundUnitControllerBase {
  constructor(
    protected readonly service: CompoundUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
