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
import { ContractPeriodService } from "../contractPeriod.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContractPeriodCreateInput } from "./ContractPeriodCreateInput";
import { ContractPeriod } from "./ContractPeriod";
import { ContractPeriodFindManyArgs } from "./ContractPeriodFindManyArgs";
import { ContractPeriodWhereUniqueInput } from "./ContractPeriodWhereUniqueInput";
import { ContractPeriodUpdateInput } from "./ContractPeriodUpdateInput";
import { MaintenanceContractFindManyArgs } from "../../maintenanceContract/base/MaintenanceContractFindManyArgs";
import { MaintenanceContract } from "../../maintenanceContract/base/MaintenanceContract";
import { MaintenanceContractWhereUniqueInput } from "../../maintenanceContract/base/MaintenanceContractWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContractPeriodControllerBase {
  constructor(
    protected readonly service: ContractPeriodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContractPeriod })
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContractPeriod(
    @common.Body() data: ContractPeriodCreateInput
  ): Promise<ContractPeriod> {
    return await this.service.createContractPeriod({
      data: data,
      select: {
        Description: true,
        code: true,
        createdAt: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ContractPeriod] })
  @ApiNestedQuery(ContractPeriodFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contractPeriods(
    @common.Req() request: Request
  ): Promise<ContractPeriod[]> {
    const args = plainToClass(ContractPeriodFindManyArgs, request.query);
    return this.service.contractPeriods({
      ...args,
      select: {
        Description: true,
        code: true,
        createdAt: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContractPeriod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contractPeriod(
    @common.Param() params: ContractPeriodWhereUniqueInput
  ): Promise<ContractPeriod | null> {
    const result = await this.service.contractPeriod({
      where: params,
      select: {
        Description: true,
        code: true,
        createdAt: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
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
  @swagger.ApiOkResponse({ type: ContractPeriod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContractPeriod(
    @common.Param() params: ContractPeriodWhereUniqueInput,
    @common.Body() data: ContractPeriodUpdateInput
  ): Promise<ContractPeriod | null> {
    try {
      return await this.service.updateContractPeriod({
        where: params,
        data: data,
        select: {
          Description: true,
          code: true,
          createdAt: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
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
  @swagger.ApiOkResponse({ type: ContractPeriod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContractPeriod(
    @common.Param() params: ContractPeriodWhereUniqueInput
  ): Promise<ContractPeriod | null> {
    try {
      return await this.service.deleteContractPeriod({
        where: params,
        select: {
          Description: true,
          code: true,
          createdAt: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
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
  @common.Get("/:id/maintenanceContracts")
  @ApiNestedQuery(MaintenanceContractFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MaintenanceContract",
    action: "read",
    possession: "any",
  })
  async findMaintenanceContracts(
    @common.Req() request: Request,
    @common.Param() params: ContractPeriodWhereUniqueInput
  ): Promise<MaintenanceContract[]> {
    const query = plainToClass(MaintenanceContractFindManyArgs, request.query);
    const results = await this.service.findMaintenanceContracts(params.id, {
      ...query,
      select: {
        confirmDate: true,
        contactEndTime: true,
        contactStartTime: true,

        contractPeriodId: {
          select: {
            id: true,
          },
        },

        contractStartDate: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        customerUserId: {
          select: {
            id: true,
          },
        },

        elevatorId: {
          select: {
            id: true,
          },
        },

        id: true,
        isConfirmed: true,
        note: true,
        orderDate: true,

        storeId: {
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

  @common.Post("/:id/maintenanceContracts")
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "update",
    possession: "any",
  })
  async connectMaintenanceContracts(
    @common.Param() params: ContractPeriodWhereUniqueInput,
    @common.Body() body: MaintenanceContractWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceContracts: {
        connect: body,
      },
    };
    await this.service.updateContractPeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/maintenanceContracts")
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "update",
    possession: "any",
  })
  async updateMaintenanceContracts(
    @common.Param() params: ContractPeriodWhereUniqueInput,
    @common.Body() body: MaintenanceContractWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceContracts: {
        set: body,
      },
    };
    await this.service.updateContractPeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/maintenanceContracts")
  @nestAccessControl.UseRoles({
    resource: "ContractPeriod",
    action: "update",
    possession: "any",
  })
  async disconnectMaintenanceContracts(
    @common.Param() params: ContractPeriodWhereUniqueInput,
    @common.Body() body: MaintenanceContractWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      maintenanceContracts: {
        disconnect: body,
      },
    };
    await this.service.updateContractPeriod({
      where: params,
      data,
      select: { id: true },
    });
  }
}
