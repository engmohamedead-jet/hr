import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BarcodeTypeResolverBase } from "./base/barcodeType.resolver.base";
import { BarcodeType } from "./base/BarcodeType";
import { BarcodeTypeService } from "./barcodeType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BarcodeType)
export class BarcodeTypeResolver extends BarcodeTypeResolverBase {
  constructor(
    protected readonly service: BarcodeTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
