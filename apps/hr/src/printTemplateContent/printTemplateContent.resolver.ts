import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrintTemplateContentResolverBase } from "./base/printTemplateContent.resolver.base";
import { PrintTemplateContent } from "./base/PrintTemplateContent";
import { PrintTemplateContentService } from "./printTemplateContent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrintTemplateContent)
export class PrintTemplateContentResolver extends PrintTemplateContentResolverBase {
  constructor(
    protected readonly service: PrintTemplateContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
