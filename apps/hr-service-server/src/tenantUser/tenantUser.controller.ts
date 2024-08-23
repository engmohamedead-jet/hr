import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TenantUserService } from "./tenantUser.service";
import { TenantUserControllerBase } from "./base/tenantUser.controller.base";

@swagger.ApiTags("tenantUsers")
@common.Controller("tenantUsers")
export class TenantUserController extends TenantUserControllerBase {
  constructor(
    protected readonly service: TenantUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
