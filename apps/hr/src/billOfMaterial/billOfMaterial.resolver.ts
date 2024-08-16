import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BillOfMaterialResolverBase } from "./base/billOfMaterial.resolver.base";
import { BillOfMaterial } from "./base/BillOfMaterial";
import { BillOfMaterialService } from "./billOfMaterial.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillOfMaterial)
export class BillOfMaterialResolver extends BillOfMaterialResolverBase {
  constructor(
    protected readonly service: BillOfMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
