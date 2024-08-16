import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductionDocumentResolverBase } from "./base/productionDocument.resolver.base";
import { ProductionDocument } from "./base/ProductionDocument";
import { ProductionDocumentService } from "./productionDocument.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductionDocument)
export class ProductionDocumentResolver extends ProductionDocumentResolverBase {
  constructor(
    protected readonly service: ProductionDocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
