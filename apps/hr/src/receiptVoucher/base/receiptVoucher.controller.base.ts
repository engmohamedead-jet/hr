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
import { ReceiptVoucherService } from "../receiptVoucher.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReceiptVoucherCreateInput } from "./ReceiptVoucherCreateInput";
import { ReceiptVoucher } from "./ReceiptVoucher";
import { ReceiptVoucherFindManyArgs } from "./ReceiptVoucherFindManyArgs";
import { ReceiptVoucherWhereUniqueInput } from "./ReceiptVoucherWhereUniqueInput";
import { ReceiptVoucherUpdateInput } from "./ReceiptVoucherUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ReceiptVoucherControllerBase {
  constructor(
    protected readonly service: ReceiptVoucherService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ReceiptVoucher })
  @nestAccessControl.UseRoles({
    resource: "ReceiptVoucher",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createReceiptVoucher(
    @common.Body() data: ReceiptVoucherCreateInput
  ): Promise<ReceiptVoucher> {
    return await this.service.createReceiptVoucher({
      data: {
        ...data,

        accountTransactionId: data.accountTransactionId
          ? {
              connect: data.accountTransactionId,
            }
          : undefined,

        cashRepositoryId: {
          connect: data.cashRepositoryId,
        },

        currencyId: data.currencyId
          ? {
              connect: data.currencyId,
            }
          : undefined,

        customerId: data.customerId
          ? {
              connect: data.customerId,
            }
          : undefined,

        employeeId: data.employeeId
          ? {
              connect: data.employeeId,
            }
          : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,

        voucherTypeId: {
          connect: data.voucherTypeId,
        },
      },
      select: {
        accountTransactionId: {
          select: {
            id: true,
          },
        },

        amount: true,

        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        chequeDueDate: true,
        chequeNumber: true,
        chequeValue: true,
        createdAt: true,

        currencyId: {
          select: {
            id: true,
          },
        },

        customerId: {
          select: {
            id: true,
          },
        },

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,
        isAcive: true,
        note: true,
        receiptVoucherDate: true,
        sequence: true,
        statementReference: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        voucherTypeId: {
          select: {
            id: true,
          },
        },

        wasChequePaid: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ReceiptVoucher] })
  @ApiNestedQuery(ReceiptVoucherFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ReceiptVoucher",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async receiptVouchers(
    @common.Req() request: Request
  ): Promise<ReceiptVoucher[]> {
    const args = plainToClass(ReceiptVoucherFindManyArgs, request.query);
    return this.service.receiptVouchers({
      ...args,
      select: {
        accountTransactionId: {
          select: {
            id: true,
          },
        },

        amount: true,

        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        chequeDueDate: true,
        chequeNumber: true,
        chequeValue: true,
        createdAt: true,

        currencyId: {
          select: {
            id: true,
          },
        },

        customerId: {
          select: {
            id: true,
          },
        },

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,
        isAcive: true,
        note: true,
        receiptVoucherDate: true,
        sequence: true,
        statementReference: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        voucherTypeId: {
          select: {
            id: true,
          },
        },

        wasChequePaid: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ReceiptVoucher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ReceiptVoucher",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async receiptVoucher(
    @common.Param() params: ReceiptVoucherWhereUniqueInput
  ): Promise<ReceiptVoucher | null> {
    const result = await this.service.receiptVoucher({
      where: params,
      select: {
        accountTransactionId: {
          select: {
            id: true,
          },
        },

        amount: true,

        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        chequeDueDate: true,
        chequeNumber: true,
        chequeValue: true,
        createdAt: true,

        currencyId: {
          select: {
            id: true,
          },
        },

        customerId: {
          select: {
            id: true,
          },
        },

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,
        isAcive: true,
        note: true,
        receiptVoucherDate: true,
        sequence: true,
        statementReference: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        voucherTypeId: {
          select: {
            id: true,
          },
        },

        wasChequePaid: true,
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
  @swagger.ApiOkResponse({ type: ReceiptVoucher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ReceiptVoucher",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateReceiptVoucher(
    @common.Param() params: ReceiptVoucherWhereUniqueInput,
    @common.Body() data: ReceiptVoucherUpdateInput
  ): Promise<ReceiptVoucher | null> {
    try {
      return await this.service.updateReceiptVoucher({
        where: params,
        data: {
          ...data,

          accountTransactionId: data.accountTransactionId
            ? {
                connect: data.accountTransactionId,
              }
            : undefined,

          cashRepositoryId: {
            connect: data.cashRepositoryId,
          },

          currencyId: data.currencyId
            ? {
                connect: data.currencyId,
              }
            : undefined,

          customerId: data.customerId
            ? {
                connect: data.customerId,
              }
            : undefined,

          employeeId: data.employeeId
            ? {
                connect: data.employeeId,
              }
            : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,

          voucherTypeId: {
            connect: data.voucherTypeId,
          },
        },
        select: {
          accountTransactionId: {
            select: {
              id: true,
            },
          },

          amount: true,

          cashRepositoryId: {
            select: {
              id: true,
            },
          },

          chequeDueDate: true,
          chequeNumber: true,
          chequeValue: true,
          createdAt: true,

          currencyId: {
            select: {
              id: true,
            },
          },

          customerId: {
            select: {
              id: true,
            },
          },

          employeeId: {
            select: {
              id: true,
            },
          },

          id: true,
          isAcive: true,
          note: true,
          receiptVoucherDate: true,
          sequence: true,
          statementReference: true,

          tenant: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          voucherTypeId: {
            select: {
              id: true,
            },
          },

          wasChequePaid: true,
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
  @swagger.ApiOkResponse({ type: ReceiptVoucher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ReceiptVoucher",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteReceiptVoucher(
    @common.Param() params: ReceiptVoucherWhereUniqueInput
  ): Promise<ReceiptVoucher | null> {
    try {
      return await this.service.deleteReceiptVoucher({
        where: params,
        select: {
          accountTransactionId: {
            select: {
              id: true,
            },
          },

          amount: true,

          cashRepositoryId: {
            select: {
              id: true,
            },
          },

          chequeDueDate: true,
          chequeNumber: true,
          chequeValue: true,
          createdAt: true,

          currencyId: {
            select: {
              id: true,
            },
          },

          customerId: {
            select: {
              id: true,
            },
          },

          employeeId: {
            select: {
              id: true,
            },
          },

          id: true,
          isAcive: true,
          note: true,
          receiptVoucherDate: true,
          sequence: true,
          statementReference: true,

          tenant: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          voucherTypeId: {
            select: {
              id: true,
            },
          },

          wasChequePaid: true,
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
