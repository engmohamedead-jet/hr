import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrintTemplateResolverBase } from "./base/printTemplate.resolver.base";
import { PrintTemplate } from "./base/PrintTemplate";
import { PrintTemplateService } from "./printTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrintTemplate)
export class PrintTemplateResolver extends PrintTemplateResolverBase {
  constructor(
    protected readonly service: PrintTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
