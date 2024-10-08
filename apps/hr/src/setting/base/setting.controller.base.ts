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
import { SettingService } from "../setting.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SettingCreateInput } from "./SettingCreateInput";
import { Setting } from "./Setting";
import { SettingFindManyArgs } from "./SettingFindManyArgs";
import { SettingWhereUniqueInput } from "./SettingWhereUniqueInput";
import { SettingUpdateInput } from "./SettingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SettingControllerBase {
  constructor(
    protected readonly service: SettingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Setting })
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSetting(
    @common.Body() data: SettingCreateInput
  ): Promise<Setting> {
    return await this.service.createSetting({
      data: {
        ...data,

        settingGroup: data.settingGroup
          ? {
              connect: data.settingGroup,
            }
          : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Setting] })
  @ApiNestedQuery(SettingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async settings(@common.Req() request: Request): Promise<Setting[]> {
    const args = plainToClass(SettingFindManyArgs, request.query);
    return this.service.settings({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Setting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async setting(
    @common.Param() params: SettingWhereUniqueInput
  ): Promise<Setting | null> {
    const result = await this.service.setting({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Setting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSetting(
    @common.Param() params: SettingWhereUniqueInput,
    @common.Body() data: SettingUpdateInput
  ): Promise<Setting | null> {
    try {
      return await this.service.updateSetting({
        where: params,
        data: {
          ...data,

          settingGroup: data.settingGroup
            ? {
                connect: data.settingGroup,
              }
            : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Setting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Setting",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSetting(
    @common.Param() params: SettingWhereUniqueInput
  ): Promise<Setting | null> {
    try {
      return await this.service.deleteSetting({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
