import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CompoundUnitResolverBase } from "./base/compoundUnit.resolver.base";
import { CompoundUnit } from "./base/CompoundUnit";
import { CompoundUnitService } from "./compoundUnit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CompoundUnit)
export class CompoundUnitResolver extends CompoundUnitResolverBase {
  constructor(
    protected readonly service: CompoundUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
