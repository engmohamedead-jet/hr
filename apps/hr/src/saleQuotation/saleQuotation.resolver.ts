import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SaleQuotationResolverBase } from "./base/saleQuotation.resolver.base";
import { SaleQuotation } from "./base/SaleQuotation";
import { SaleQuotationService } from "./saleQuotation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleQuotation)
export class SaleQuotationResolver extends SaleQuotationResolverBase {
  constructor(
    protected readonly service: SaleQuotationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
