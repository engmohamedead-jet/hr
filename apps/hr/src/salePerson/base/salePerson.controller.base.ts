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
import { SalePersonService } from "../salePerson.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SalePersonCreateInput } from "./SalePersonCreateInput";
import { SalePerson } from "./SalePerson";
import { SalePersonFindManyArgs } from "./SalePersonFindManyArgs";
import { SalePersonWhereUniqueInput } from "./SalePersonWhereUniqueInput";
import { SalePersonUpdateInput } from "./SalePersonUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SalePersonControllerBase {
  constructor(
    protected readonly service: SalePersonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SalePerson })
  @nestAccessControl.UseRoles({
    resource: "SalePerson",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSalePerson(
    @common.Body() data: SalePersonCreateInput
  ): Promise<SalePerson> {
    return await this.service.createSalePerson({
      data: {
        ...data,

        accountId: data.accountId
          ? {
              connect: data.accountId,
            }
          : undefined,

        employeeId: data.employeeId
          ? {
              connect: data.employeeId,
            }
          : undefined,

        saleTeamId: {
          connect: data.saleTeamId,
        },

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SalePerson] })
  @ApiNestedQuery(SalePersonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SalePerson",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async salePeople(@common.Req() request: Request): Promise<SalePerson[]> {
    const args = plainToClass(SalePersonFindManyArgs, request.query);
    return this.service.salePeople({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SalePerson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalePerson",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async salePerson(
    @common.Param() params: SalePersonWhereUniqueInput
  ): Promise<SalePerson | null> {
    const result = await this.service.salePerson({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SalePerson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalePerson",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSalePerson(
    @common.Param() params: SalePersonWhereUniqueInput,
    @common.Body() data: SalePersonUpdateInput
  ): Promise<SalePerson | null> {
    try {
      return await this.service.updateSalePerson({
        where: params,
        data: {
          ...data,

          accountId: data.accountId
            ? {
                connect: data.accountId,
              }
            : undefined,

          employeeId: data.employeeId
            ? {
                connect: data.employeeId,
              }
            : undefined,

          saleTeamId: {
            connect: data.saleTeamId,
          },

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: SalePerson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalePerson",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSalePerson(
    @common.Param() params: SalePersonWhereUniqueInput
  ): Promise<SalePerson | null> {
    try {
      return await this.service.deleteSalePerson({
        where: params,
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
