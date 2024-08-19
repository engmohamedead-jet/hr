import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SaleQuotationDetailResolverBase } from "./base/saleQuotationDetail.resolver.base";
import { SaleQuotationDetail } from "./base/SaleQuotationDetail";
import { SaleQuotationDetailService } from "./saleQuotationDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleQuotationDetail)
export class SaleQuotationDetailResolver extends SaleQuotationDetailResolverBase {
  constructor(
    protected readonly service: SaleQuotationDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
