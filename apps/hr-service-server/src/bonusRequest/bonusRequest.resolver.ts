import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BonusRequestResolverBase } from "./base/bonusRequest.resolver.base";
import { BonusRequest } from "./base/BonusRequest";
import { BonusRequestService } from "./bonusRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BonusRequest)
export class BonusRequestResolver extends BonusRequestResolverBase {
  constructor(
    protected readonly service: BonusRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
