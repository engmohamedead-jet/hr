import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductBarcodeResolverBase } from "./base/productBarcode.resolver.base";
import { ProductBarcode } from "./base/ProductBarcode";
import { ProductBarcodeService } from "./productBarcode.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductBarcode)
export class ProductBarcodeResolver extends ProductBarcodeResolverBase {
  constructor(
    protected readonly service: ProductBarcodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
