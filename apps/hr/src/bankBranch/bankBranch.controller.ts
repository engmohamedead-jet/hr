import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankBranchService } from "./bankBranch.service";
import { BankBranchControllerBase } from "./base/bankBranch.controller.base";

@swagger.ApiTags("bankBranches")
@common.Controller("bankBranches")
export class BankBranchController extends BankBranchControllerBase {
  constructor(
    protected readonly service: BankBranchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
