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
import { InstallmentSaleFeeService } from "../installmentSaleFee.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InstallmentSaleFeeCreateInput } from "./InstallmentSaleFeeCreateInput";
import { InstallmentSaleFee } from "./InstallmentSaleFee";
import { InstallmentSaleFeeFindManyArgs } from "./InstallmentSaleFeeFindManyArgs";
import { InstallmentSaleFeeWhereUniqueInput } from "./InstallmentSaleFeeWhereUniqueInput";
import { InstallmentSaleFeeUpdateInput } from "./InstallmentSaleFeeUpdateInput";
import { PaymentTermFindManyArgs } from "../../paymentTerm/base/PaymentTermFindManyArgs";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { PaymentTermWhereUniqueInput } from "../../paymentTerm/base/PaymentTermWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InstallmentSaleFeeControllerBase {
  constructor(
    protected readonly service: InstallmentSaleFeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InstallmentSaleFee })
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createInstallmentSaleFee(
    @common.Body() data: InstallmentSaleFeeCreateInput
  ): Promise<InstallmentSaleFee> {
    return await this.service.createInstallmentSaleFee({
      data: {
        ...data,

        accountId: data.accountId
          ? {
              connect: data.accountId,
            }
          : undefined,

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

        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        isFlatAmount: true,
        name: true,
        normalizedName: true,
        note: true,
        rate: true,

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
  @swagger.ApiOkResponse({ type: [InstallmentSaleFee] })
  @ApiNestedQuery(InstallmentSaleFeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async installmentSaleFees(
    @common.Req() request: Request
  ): Promise<InstallmentSaleFee[]> {
    const args = plainToClass(InstallmentSaleFeeFindManyArgs, request.query);
    return this.service.installmentSaleFees({
      ...args,
      select: {
        accountId: {
          select: {
            id: true,
          },
        },

        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        isFlatAmount: true,
        name: true,
        normalizedName: true,
        note: true,
        rate: true,

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
  @swagger.ApiOkResponse({ type: InstallmentSaleFee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async installmentSaleFee(
    @common.Param() params: InstallmentSaleFeeWhereUniqueInput
  ): Promise<InstallmentSaleFee | null> {
    const result = await this.service.installmentSaleFee({
      where: params,
      select: {
        accountId: {
          select: {
            id: true,
          },
        },

        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        isFlatAmount: true,
        name: true,
        normalizedName: true,
        note: true,
        rate: true,

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
  @swagger.ApiOkResponse({ type: InstallmentSaleFee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateInstallmentSaleFee(
    @common.Param() params: InstallmentSaleFeeWhereUniqueInput,
    @common.Body() data: InstallmentSaleFeeUpdateInput
  ): Promise<InstallmentSaleFee | null> {
    try {
      return await this.service.updateInstallmentSaleFee({
        where: params,
        data: {
          ...data,

          accountId: data.accountId
            ? {
                connect: data.accountId,
              }
            : undefined,

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

          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          isFlatAmount: true,
          name: true,
          normalizedName: true,
          note: true,
          rate: true,

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
  @swagger.ApiOkResponse({ type: InstallmentSaleFee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteInstallmentSaleFee(
    @common.Param() params: InstallmentSaleFeeWhereUniqueInput
  ): Promise<InstallmentSaleFee | null> {
    try {
      return await this.service.deleteInstallmentSaleFee({
        where: params,
        select: {
          accountId: {
            select: {
              id: true,
            },
          },

          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          isFlatAmount: true,
          name: true,
          normalizedName: true,
          note: true,
          rate: true,

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
  @common.Get("/:id/paymentTerms")
  @ApiNestedQuery(PaymentTermFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async findPaymentTerms(
    @common.Req() request: Request,
    @common.Param() params: InstallmentSaleFeeWhereUniqueInput
  ): Promise<PaymentTerm[]> {
    const query = plainToClass(PaymentTermFindManyArgs, request.query);
    const results = await this.service.findPaymentTerms(params.id, {
      ...query,
      select: {
        code: true,
        createdAt: true,
        description: true,
        dueDays: true,

        duePeriodId: {
          select: {
            id: true,
          },
        },

        gracePeriod: true,
        id: true,

        installmentSaleFeeId: {
          select: {
            id: true,
          },
        },

        installmentSaleFeePostingPeriod: {
          select: {
            id: true,
          },
        },

        isActive: true,
        isDefault: true,
        isDueOnDate: true,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/paymentTerms")
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "update",
    possession: "any",
  })
  async connectPaymentTerms(
    @common.Param() params: InstallmentSaleFeeWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentTerms: {
        connect: body,
      },
    };
    await this.service.updateInstallmentSaleFee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/paymentTerms")
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "update",
    possession: "any",
  })
  async updatePaymentTerms(
    @common.Param() params: InstallmentSaleFeeWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentTerms: {
        set: body,
      },
    };
    await this.service.updateInstallmentSaleFee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/paymentTerms")
  @nestAccessControl.UseRoles({
    resource: "InstallmentSaleFee",
    action: "update",
    possession: "any",
  })
  async disconnectPaymentTerms(
    @common.Param() params: InstallmentSaleFeeWhereUniqueInput,
    @common.Body() body: PaymentTermWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentTerms: {
        disconnect: body,
      },
    };
    await this.service.updateInstallmentSaleFee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
