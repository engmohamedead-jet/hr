import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CashRepositoryResolverBase } from "./base/cashRepository.resolver.base";
import { CashRepository } from "./base/CashRepository";
import { CashRepositoryService } from "./cashRepository.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CashRepository)
export class CashRepositoryResolver extends CashRepositoryResolverBase {
  constructor(
    protected readonly service: CashRepositoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
