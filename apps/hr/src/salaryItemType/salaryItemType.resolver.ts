import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalaryItemTypeResolverBase } from "./base/salaryItemType.resolver.base";
import { SalaryItemType } from "./base/SalaryItemType";
import { SalaryItemTypeService } from "./salaryItemType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalaryItemType)
export class SalaryItemTypeResolver extends SalaryItemTypeResolverBase {
  constructor(
    protected readonly service: SalaryItemTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
