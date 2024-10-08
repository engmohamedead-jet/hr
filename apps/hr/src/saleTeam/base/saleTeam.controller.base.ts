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
import { SaleTeamService } from "../saleTeam.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SaleTeamCreateInput } from "./SaleTeamCreateInput";
import { SaleTeam } from "./SaleTeam";
import { SaleTeamFindManyArgs } from "./SaleTeamFindManyArgs";
import { SaleTeamWhereUniqueInput } from "./SaleTeamWhereUniqueInput";
import { SaleTeamUpdateInput } from "./SaleTeamUpdateInput";
import { SalePersonFindManyArgs } from "../../salePerson/base/SalePersonFindManyArgs";
import { SalePerson } from "../../salePerson/base/SalePerson";
import { SalePersonWhereUniqueInput } from "../../salePerson/base/SalePersonWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SaleTeamControllerBase {
  constructor(
    protected readonly service: SaleTeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SaleTeam })
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSaleTeam(
    @common.Body() data: SaleTeamCreateInput
  ): Promise<SaleTeam> {
    return await this.service.createSaleTeam({
      data: {
        ...data,

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
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

        tenantId: {
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
  @swagger.ApiOkResponse({ type: [SaleTeam] })
  @ApiNestedQuery(SaleTeamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleTeams(@common.Req() request: Request): Promise<SaleTeam[]> {
    const args = plainToClass(SaleTeamFindManyArgs, request.query);
    return this.service.saleTeams({
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

        tenantId: {
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
  @swagger.ApiOkResponse({ type: SaleTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleTeam(
    @common.Param() params: SaleTeamWhereUniqueInput
  ): Promise<SaleTeam | null> {
    const result = await this.service.saleTeam({
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

        tenantId: {
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
  @swagger.ApiOkResponse({ type: SaleTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSaleTeam(
    @common.Param() params: SaleTeamWhereUniqueInput,
    @common.Body() data: SaleTeamUpdateInput
  ): Promise<SaleTeam | null> {
    try {
      return await this.service.updateSaleTeam({
        where: params,
        data: {
          ...data,

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
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

          tenantId: {
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
  @swagger.ApiOkResponse({ type: SaleTeam })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSaleTeam(
    @common.Param() params: SaleTeamWhereUniqueInput
  ): Promise<SaleTeam | null> {
    try {
      return await this.service.deleteSaleTeam({
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

          tenantId: {
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
  @common.Get("/:id/salePeople")
  @ApiNestedQuery(SalePersonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SalePerson",
    action: "read",
    possession: "any",
  })
  async findSalePeople(
    @common.Req() request: Request,
    @common.Param() params: SaleTeamWhereUniqueInput
  ): Promise<SalePerson[]> {
    const query = plainToClass(SalePersonFindManyArgs, request.query);
    const results = await this.service.findSalePeople(params.id, {
      ...query,
      select: {
        accountId: {
          select: {
            id: true,
          },
        },

        address: true,
        code: true,
        commissionRate: true,
        createdAt: true,

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        phoneNumber: true,
        photo: true,

        saleTeamId: {
          select: {
            id: true,
          },
        },

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/salePeople")
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "update",
    possession: "any",
  })
  async connectSalePeople(
    @common.Param() params: SaleTeamWhereUniqueInput,
    @common.Body() body: SalePersonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salePeople: {
        connect: body,
      },
    };
    await this.service.updateSaleTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/salePeople")
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "update",
    possession: "any",
  })
  async updateSalePeople(
    @common.Param() params: SaleTeamWhereUniqueInput,
    @common.Body() body: SalePersonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salePeople: {
        set: body,
      },
    };
    await this.service.updateSaleTeam({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/salePeople")
  @nestAccessControl.UseRoles({
    resource: "SaleTeam",
    action: "update",
    possession: "any",
  })
  async disconnectSalePeople(
    @common.Param() params: SaleTeamWhereUniqueInput,
    @common.Body() body: SalePersonWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salePeople: {
        disconnect: body,
      },
    };
    await this.service.updateSaleTeam({
      where: params,
      data,
      select: { id: true },
    });
  }
}
