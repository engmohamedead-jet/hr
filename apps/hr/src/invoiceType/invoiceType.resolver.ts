import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InvoiceTypeResolverBase } from "./base/invoiceType.resolver.base";
import { InvoiceType } from "./base/InvoiceType";
import { InvoiceTypeService } from "./invoiceType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvoiceType)
export class InvoiceTypeResolver extends InvoiceTypeResolverBase {
  constructor(
    protected readonly service: InvoiceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
