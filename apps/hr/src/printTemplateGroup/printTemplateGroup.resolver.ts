import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrintTemplateGroupResolverBase } from "./base/printTemplateGroup.resolver.base";
import { PrintTemplateGroup } from "./base/PrintTemplateGroup";
import { PrintTemplateGroupService } from "./printTemplateGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrintTemplateGroup)
export class PrintTemplateGroupResolver extends PrintTemplateGroupResolverBase {
  constructor(
    protected readonly service: PrintTemplateGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
