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
import { PaymentTermService } from "../paymentTerm.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentTermCreateInput } from "./PaymentTermCreateInput";
import { PaymentTerm } from "./PaymentTerm";
import { PaymentTermFindManyArgs } from "./PaymentTermFindManyArgs";
import { PaymentTermWhereUniqueInput } from "./PaymentTermWhereUniqueInput";
import { PaymentTermUpdateInput } from "./PaymentTermUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentTermControllerBase {
  constructor(
    protected readonly service: PaymentTermService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentTerm })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPaymentTerm(
    @common.Body() data: PaymentTermCreateInput
  ): Promise<PaymentTerm> {
    return await this.service.createPaymentTerm({
      data: {
        ...data,

        duePeriodId: data.duePeriodId
          ? {
              connect: data.duePeriodId,
            }
          : undefined,

        installmentSaleFeeId: data.installmentSaleFeeId
          ? {
              connect: data.installmentSaleFeeId,
            }
          : undefined,

        installmentSaleFeePostingPeriodId:
          data.installmentSaleFeePostingPeriodId
            ? {
                connect: data.installmentSaleFeePostingPeriodId,
              }
            : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        description: true,
        dueDays: true,
        dueOnDate: true,

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

        installmentSaleFeePostingPeriodId: {
          select: {
            id: true,
          },
        },

        isDefault: true,
        name: true,
        normalizedName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentTerm] })
  @ApiNestedQuery(PaymentTermFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentTerms(@common.Req() request: Request): Promise<PaymentTerm[]> {
    const args = plainToClass(PaymentTermFindManyArgs, request.query);
    return this.service.paymentTerms({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        dueDays: true,
        dueOnDate: true,

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

        installmentSaleFeePostingPeriodId: {
          select: {
            id: true,
          },
        },

        isDefault: true,
        name: true,
        normalizedName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentTerm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentTerm(
    @common.Param() params: PaymentTermWhereUniqueInput
  ): Promise<PaymentTerm | null> {
    const result = await this.service.paymentTerm({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        dueDays: true,
        dueOnDate: true,

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

        installmentSaleFeePostingPeriodId: {
          select: {
            id: true,
          },
        },

        isDefault: true,
        name: true,
        normalizedName: true,
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
  @swagger.ApiOkResponse({ type: PaymentTerm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePaymentTerm(
    @common.Param() params: PaymentTermWhereUniqueInput,
    @common.Body() data: PaymentTermUpdateInput
  ): Promise<PaymentTerm | null> {
    try {
      return await this.service.updatePaymentTerm({
        where: params,
        data: {
          ...data,

          duePeriodId: data.duePeriodId
            ? {
                connect: data.duePeriodId,
              }
            : undefined,

          installmentSaleFeeId: data.installmentSaleFeeId
            ? {
                connect: data.installmentSaleFeeId,
              }
            : undefined,

          installmentSaleFeePostingPeriodId:
            data.installmentSaleFeePostingPeriodId
              ? {
                  connect: data.installmentSaleFeePostingPeriodId,
                }
              : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          description: true,
          dueDays: true,
          dueOnDate: true,

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

          installmentSaleFeePostingPeriodId: {
            select: {
              id: true,
            },
          },

          isDefault: true,
          name: true,
          normalizedName: true,
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
  @swagger.ApiOkResponse({ type: PaymentTerm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePaymentTerm(
    @common.Param() params: PaymentTermWhereUniqueInput
  ): Promise<PaymentTerm | null> {
    try {
      return await this.service.deletePaymentTerm({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          dueDays: true,
          dueOnDate: true,

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

          installmentSaleFeePostingPeriodId: {
            select: {
              id: true,
            },
          },

          isDefault: true,
          name: true,
          normalizedName: true,
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
