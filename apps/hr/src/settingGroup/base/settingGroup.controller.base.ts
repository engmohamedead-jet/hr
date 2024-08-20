/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SettingGroupService } from "../settingGroup.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SettingGroupCreateInput } from "./SettingGroupCreateInput";
import { SettingGroup } from "./SettingGroup";
import { SettingGroupFindManyArgs } from "./SettingGroupFindManyArgs";
import { SettingGroupWhereUniqueInput } from "./SettingGroupWhereUniqueInput";
import { SettingGroupUpdateInput } from "./SettingGroupUpdateInput";
import { SettingFindManyArgs } from "../../setting/base/SettingFindManyArgs";
import { Setting } from "../../setting/base/Setting";
import { SettingWhereUniqueInput } from "../../setting/base/SettingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SettingGroupControllerBase {
  constructor(
    protected readonly service: SettingGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SettingGroup })
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSettingGroup(
    @common.Body() data: SettingGroupCreateInput
  ): Promise<SettingGroup> {
    return await this.service.createSettingGroup({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SettingGroup] })
  @ApiNestedQuery(SettingGroupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async settingGroups(@common.Req() request: Request): Promise<SettingGroup[]> {
    const args = plainToClass(SettingGroupFindManyArgs, request.query);
    return this.service.settingGroups({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SettingGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async settingGroup(
    @common.Param() params: SettingGroupWhereUniqueInput
  ): Promise<SettingGroup | null> {
    const result = await this.service.settingGroup({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SettingGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSettingGroup(
    @common.Param() params: SettingGroupWhereUniqueInput,
    @common.Body() data: SettingGroupUpdateInput
  ): Promise<SettingGroup | null> {
    try {
      return await this.service.updateSettingGroup({
        where: params,
        data: {
          ...data,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          normalizedName: true,
          note: true,

          tenant: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SettingGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSettingGroup(
    @common.Param() params: SettingGroupWhereUniqueInput
  ): Promise<SettingGroup | null> {
    try {
      return await this.service.deleteSettingGroup({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          normalizedName: true,
          note: true,

          tenant: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/settings")
  @ApiNestedQuery(SettingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "read",
    possession: "any",
  })
  async findSettings(
    @common.Req() request: Request,
    @common.Param() params: SettingGroupWhereUniqueInput
  ): Promise<Setting[]> {
    const query = plainToClass(SettingFindManyArgs, request.query);
    const results = await this.service.findSettings(params.id, {
      ...query,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isActive: true,
        isEnabled: true,
        isSystem: true,
        key: true,
        note: true,

        settingGroup: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/settings")
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "update",
    possession: "any",
  })
  async connectSettings(
    @common.Param() params: SettingGroupWhereUniqueInput,
    @common.Body() body: SettingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      settings: {
        connect: body,
      },
    };
    await this.service.updateSettingGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/settings")
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "update",
    possession: "any",
  })
  async updateSettings(
    @common.Param() params: SettingGroupWhereUniqueInput,
    @common.Body() body: SettingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      settings: {
        set: body,
      },
    };
    await this.service.updateSettingGroup({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/settings")
  @nestAccessControl.UseRoles({
    resource: "SettingGroup",
    action: "update",
    possession: "any",
  })
  async disconnectSettings(
    @common.Param() params: SettingGroupWhereUniqueInput,
    @common.Body() body: SettingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      settings: {
        disconnect: body,
      },
    };
    await this.service.updateSettingGroup({
      where: params,
      data,
      select: { id: true },
    });
  }
}
