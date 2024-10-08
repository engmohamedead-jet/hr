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
import { MaintenanceVisitService } from "../maintenanceVisit.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MaintenanceVisitCreateInput } from "./MaintenanceVisitCreateInput";
import { MaintenanceVisit } from "./MaintenanceVisit";
import { MaintenanceVisitFindManyArgs } from "./MaintenanceVisitFindManyArgs";
import { MaintenanceVisitWhereUniqueInput } from "./MaintenanceVisitWhereUniqueInput";
import { MaintenanceVisitUpdateInput } from "./MaintenanceVisitUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MaintenanceVisitControllerBase {
  constructor(
    protected readonly service: MaintenanceVisitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MaintenanceVisit })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceVisit",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMaintenanceVisit(
    @common.Body() data: MaintenanceVisitCreateInput
  ): Promise<MaintenanceVisit> {
    return await this.service.createMaintenanceVisit({
      data: {
        ...data,

        elevator: {
          connect: data.elevator,
        },

        store: {
          connect: data.store,
        },
      },
      select: {
        createdAt: true,

        elevator: {
          select: {
            id: true,
          },
        },

        elevatorStatusId: true,
        id: true,
        spareParts: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        visitDate: true,
        visitDocumentImage: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MaintenanceVisit] })
  @ApiNestedQuery(MaintenanceVisitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceVisit",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async maintenanceVisits(
    @common.Req() request: Request
  ): Promise<MaintenanceVisit[]> {
    const args = plainToClass(MaintenanceVisitFindManyArgs, request.query);
    return this.service.maintenanceVisits({
      ...args,
      select: {
        createdAt: true,

        elevator: {
          select: {
            id: true,
          },
        },

        elevatorStatusId: true,
        id: true,
        spareParts: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        visitDate: true,
        visitDocumentImage: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MaintenanceVisit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceVisit",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async maintenanceVisit(
    @common.Param() params: MaintenanceVisitWhereUniqueInput
  ): Promise<MaintenanceVisit | null> {
    const result = await this.service.maintenanceVisit({
      where: params,
      select: {
        createdAt: true,

        elevator: {
          select: {
            id: true,
          },
        },

        elevatorStatusId: true,
        id: true,
        spareParts: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        visitDate: true,
        visitDocumentImage: true,
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
  @swagger.ApiOkResponse({ type: MaintenanceVisit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceVisit",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMaintenanceVisit(
    @common.Param() params: MaintenanceVisitWhereUniqueInput,
    @common.Body() data: MaintenanceVisitUpdateInput
  ): Promise<MaintenanceVisit | null> {
    try {
      return await this.service.updateMaintenanceVisit({
        where: params,
        data: {
          ...data,

          elevator: {
            connect: data.elevator,
          },

          store: {
            connect: data.store,
          },
        },
        select: {
          createdAt: true,

          elevator: {
            select: {
              id: true,
            },
          },

          elevatorStatusId: true,
          id: true,
          spareParts: true,

          store: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          visitDate: true,
          visitDocumentImage: true,
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
  @swagger.ApiOkResponse({ type: MaintenanceVisit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MaintenanceVisit",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMaintenanceVisit(
    @common.Param() params: MaintenanceVisitWhereUniqueInput
  ): Promise<MaintenanceVisit | null> {
    try {
      return await this.service.deleteMaintenanceVisit({
        where: params,
        select: {
          createdAt: true,

          elevator: {
            select: {
              id: true,
            },
          },

          elevatorStatusId: true,
          id: true,
          spareParts: true,

          store: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          visitDate: true,
          visitDocumentImage: true,
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
