/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Setting } from "./Setting";
import { SettingCountArgs } from "./SettingCountArgs";
import { SettingFindManyArgs } from "./SettingFindManyArgs";
import { SettingFindUniqueArgs } from "./SettingFindUniqueArgs";
import { CreateSettingArgs } from "./CreateSettingArgs";
import { UpdateSettingArgs } from "./UpdateSettingArgs";
import { DeleteSettingArgs } from "./DeleteSettingArgs";
import { SettingGroup } from "../../settingGroup/base/SettingGroup";
import { Tenant } from "../../tenant/base/Tenant";
import { SettingService } from "../setting.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Setting)
export class SettingResolverBase {
  constructor(
    protected readonly service: SettingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "read",
    possession: "any",
  })
  async _settingsMeta(
    @graphql.Args() args: SettingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Setting])
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "read",
    possession: "any",
  })
  async settings(
    @graphql.Args() args: SettingFindManyArgs
  ): Promise<Setting[]> {
    return this.service.settings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Setting, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "read",
    possession: "own",
  })
  async setting(
    @graphql.Args() args: SettingFindUniqueArgs
  ): Promise<Setting | null> {
    const result = await this.service.setting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Setting)
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "create",
    possession: "any",
  })
  async createSetting(
    @graphql.Args() args: CreateSettingArgs
  ): Promise<Setting> {
    return await this.service.createSetting({
      ...args,
      data: {
        ...args.data,

        settingGroup: args.data.settingGroup
          ? {
              connect: args.data.settingGroup,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Setting)
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "update",
    possession: "any",
  })
  async updateSetting(
    @graphql.Args() args: UpdateSettingArgs
  ): Promise<Setting | null> {
    try {
      return await this.service.updateSetting({
        ...args,
        data: {
          ...args.data,

          settingGroup: args.data.settingGroup
            ? {
                connect: args.data.settingGroup,
              }
            : undefined,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Setting)
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "delete",
    possession: "any",
  })
  async deleteSetting(
    @graphql.Args() args: DeleteSettingArgs
  ): Promise<Setting | null> {
    try {
      return await this.service.deleteSetting(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SettingGroup, {
    nullable: true,
    name: "settingGroup",
  })
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "read",
    possession: "any",
  })
  async getSettingGroup(
    @graphql.Parent() parent: Setting
  ): Promise<SettingGroup | null> {
    const result = await this.service.getSettingGroup(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenant(@graphql.Parent() parent: Setting): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
