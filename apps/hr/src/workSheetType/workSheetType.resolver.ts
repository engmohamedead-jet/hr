import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkSheetTypeResolverBase } from "./base/workSheetType.resolver.base";
import { WorkSheetType } from "./base/WorkSheetType";
import { WorkSheetTypeService } from "./workSheetType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkSheetType)
export class WorkSheetTypeResolver extends WorkSheetTypeResolverBase {
  constructor(
    protected readonly service: WorkSheetTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
