import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BillOfMaterialTypeResolverBase } from "./base/billOfMaterialType.resolver.base";
import { BillOfMaterialType } from "./base/BillOfMaterialType";
import { BillOfMaterialTypeService } from "./billOfMaterialType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillOfMaterialType)
export class BillOfMaterialTypeResolver extends BillOfMaterialTypeResolverBase {
  constructor(
    protected readonly service: BillOfMaterialTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
