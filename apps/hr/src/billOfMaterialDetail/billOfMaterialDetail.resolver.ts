import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BillOfMaterialDetailResolverBase } from "./base/billOfMaterialDetail.resolver.base";
import { BillOfMaterialDetail } from "./base/BillOfMaterialDetail";
import { BillOfMaterialDetailService } from "./billOfMaterialDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillOfMaterialDetail)
export class BillOfMaterialDetailResolver extends BillOfMaterialDetailResolverBase {
  constructor(
    protected readonly service: BillOfMaterialDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
