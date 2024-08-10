import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerCateogryResolverBase } from "./base/customerCateogry.resolver.base";
import { CustomerCateogry } from "./base/CustomerCateogry";
import { CustomerCateogryService } from "./customerCateogry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerCateogry)
export class CustomerCateogryResolver extends CustomerCateogryResolverBase {
  constructor(
    protected readonly service: CustomerCateogryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
