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
import { CityService } from "../city.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CityCreateInput } from "./CityCreateInput";
import { City } from "./City";
import { CityFindManyArgs } from "./CityFindManyArgs";
import { CityWhereUniqueInput } from "./CityWhereUniqueInput";
import { CityUpdateInput } from "./CityUpdateInput";
import { BankFindManyArgs } from "../../bank/base/BankFindManyArgs";
import { Bank } from "../../bank/base/Bank";
import { BankWhereUniqueInput } from "../../bank/base/BankWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CityControllerBase {
  constructor(
    protected readonly service: CityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: City })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCity(@common.Body() data: CityCreateInput): Promise<City> {
    return await this.service.createCity({
      data: {
        ...data,

        stateId: {
          connect: data.stateId,
        },
      },
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,

        stateId: {
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
  @swagger.ApiOkResponse({ type: [City] })
  @ApiNestedQuery(CityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cities(@common.Req() request: Request): Promise<City[]> {
    const args = plainToClass(CityFindManyArgs, request.query);
    return this.service.cities({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,

        stateId: {
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
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async city(
    @common.Param() params: CityWhereUniqueInput
  ): Promise<City | null> {
    const result = await this.service.city({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,

        stateId: {
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
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCity(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() data: CityUpdateInput
  ): Promise<City | null> {
    try {
      return await this.service.updateCity({
        where: params,
        data: {
          ...data,

          stateId: {
            connect: data.stateId,
          },
        },
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,

          stateId: {
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
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCity(
    @common.Param() params: CityWhereUniqueInput
  ): Promise<City | null> {
    try {
      return await this.service.deleteCity({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,

          stateId: {
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
  @common.Get("/:id/banks")
  @ApiNestedQuery(BankFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "read",
    possession: "any",
  })
  async findBanks(
    @common.Req() request: Request,
    @common.Param() params: CityWhereUniqueInput
  ): Promise<Bank[]> {
    const query = plainToClass(BankFindManyArgs, request.query);
    const results = await this.service.findBanks(params.id, {
      ...query,
      select: {
        address: true,
        cellPhoneNumber: true,

        cityId: {
          select: {
            id: true,
          },
        },

        code: true,
        contactPhoneNumber: true,

        countryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        fax: true,
        homePhoneNumber: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        relationshipOfficerContactNumber: true,
        relationshipOfficerName: true,

        stateId: {
          select: {
            id: true,
          },
        },

        street: true,
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

  @common.Post("/:id/banks")
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async connectBanks(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() body: BankWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      banks: {
        connect: body,
      },
    };
    await this.service.updateCity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/banks")
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async updateBanks(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() body: BankWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      banks: {
        set: body,
      },
    };
    await this.service.updateCity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/banks")
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async disconnectBanks(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() body: BankWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      banks: {
        disconnect: body,
      },
    };
    await this.service.updateCity({
      where: params,
      data,
      select: { id: true },
    });
  }
}
