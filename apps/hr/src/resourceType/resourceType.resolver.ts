import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ResourceTypeResolverBase } from "./base/resourceType.resolver.base";
import { ResourceType } from "./base/ResourceType";
import { ResourceTypeService } from "./resourceType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResourceType)
export class ResourceTypeResolver extends ResourceTypeResolverBase {
  constructor(
    protected readonly service: ResourceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
