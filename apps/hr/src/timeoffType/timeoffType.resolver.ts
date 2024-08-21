import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TimeoffTypeResolverBase } from "./base/timeoffType.resolver.base";
import { TimeoffType } from "./base/TimeoffType";
import { TimeoffTypeService } from "./timeoffType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TimeoffType)
export class TimeoffTypeResolver extends TimeoffTypeResolverBase {
  constructor(
    protected readonly service: TimeoffTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
