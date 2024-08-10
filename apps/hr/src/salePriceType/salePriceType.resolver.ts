import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalePriceTypeResolverBase } from "./base/salePriceType.resolver.base";
import { SalePriceType } from "./base/SalePriceType";
import { SalePriceTypeService } from "./salePriceType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalePriceType)
export class SalePriceTypeResolver extends SalePriceTypeResolverBase {
  constructor(
    protected readonly service: SalePriceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
