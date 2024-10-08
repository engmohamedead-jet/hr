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
import { BankService } from "../bank.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BankCreateInput } from "./BankCreateInput";
import { Bank } from "./Bank";
import { BankFindManyArgs } from "./BankFindManyArgs";
import { BankWhereUniqueInput } from "./BankWhereUniqueInput";
import { BankUpdateInput } from "./BankUpdateInput";
import { BankBranchFindManyArgs } from "../../bankBranch/base/BankBranchFindManyArgs";
import { BankBranch } from "../../bankBranch/base/BankBranch";
import { BankBranchWhereUniqueInput } from "../../bankBranch/base/BankBranchWhereUniqueInput";
import { SalePaymentFindManyArgs } from "../../salePayment/base/SalePaymentFindManyArgs";
import { SalePayment } from "../../salePayment/base/SalePayment";
import { SalePaymentWhereUniqueInput } from "../../salePayment/base/SalePaymentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BankControllerBase {
  constructor(
    protected readonly service: BankService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bank })
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBank(@common.Body() data: BankCreateInput): Promise<Bank> {
    return await this.service.createBank({
      data: {
        ...data,

        bankType: data.bankType
          ? {
              connect: data.bankType,
            }
          : undefined,
      },
      select: {
        address: true,

        bankType: {
          select: {
            id: true,
          },
        },

        cellPhoneNumber: true,
        code: true,
        contactPhoneNumber: true,
        createdAt: true,
        description: true,
        fax: true,
        homePhoneNumber: true,
        id: true,
        name: true,
        normalizedName: true,
        relationshipOfficerContactNumber: true,
        relationshipOfficerName: true,
        street: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bank] })
  @ApiNestedQuery(BankFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async banks(@common.Req() request: Request): Promise<Bank[]> {
    const args = plainToClass(BankFindManyArgs, request.query);
    return this.service.banks({
      ...args,
      select: {
        address: true,

        bankType: {
          select: {
            id: true,
          },
        },

        cellPhoneNumber: true,
        code: true,
        contactPhoneNumber: true,
        createdAt: true,
        description: true,
        fax: true,
        homePhoneNumber: true,
        id: true,
        name: true,
        normalizedName: true,
        relationshipOfficerContactNumber: true,
        relationshipOfficerName: true,
        street: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bank(
    @common.Param() params: BankWhereUniqueInput
  ): Promise<Bank | null> {
    const result = await this.service.bank({
      where: params,
      select: {
        address: true,

        bankType: {
          select: {
            id: true,
          },
        },

        cellPhoneNumber: true,
        code: true,
        contactPhoneNumber: true,
        createdAt: true,
        description: true,
        fax: true,
        homePhoneNumber: true,
        id: true,
        name: true,
        normalizedName: true,
        relationshipOfficerContactNumber: true,
        relationshipOfficerName: true,
        street: true,
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
  @swagger.ApiOkResponse({ type: Bank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBank(
    @common.Param() params: BankWhereUniqueInput,
    @common.Body() data: BankUpdateInput
  ): Promise<Bank | null> {
    try {
      return await this.service.updateBank({
        where: params,
        data: {
          ...data,

          bankType: data.bankType
            ? {
                connect: data.bankType,
              }
            : undefined,
        },
        select: {
          address: true,

          bankType: {
            select: {
              id: true,
            },
          },

          cellPhoneNumber: true,
          code: true,
          contactPhoneNumber: true,
          createdAt: true,
          description: true,
          fax: true,
          homePhoneNumber: true,
          id: true,
          name: true,
          normalizedName: true,
          relationshipOfficerContactNumber: true,
          relationshipOfficerName: true,
          street: true,
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
  @swagger.ApiOkResponse({ type: Bank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBank(
    @common.Param() params: BankWhereUniqueInput
  ): Promise<Bank | null> {
    try {
      return await this.service.deleteBank({
        where: params,
        select: {
          address: true,

          bankType: {
            select: {
              id: true,
            },
          },

          cellPhoneNumber: true,
          code: true,
          contactPhoneNumber: true,
          createdAt: true,
          description: true,
          fax: true,
          homePhoneNumber: true,
          id: true,
          name: true,
          normalizedName: true,
          relationshipOfficerContactNumber: true,
          relationshipOfficerName: true,
          street: true,
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
  @common.Get("/:id/bankBranches")
  @ApiNestedQuery(BankBranchFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BankBranch",
    action: "read",
    possession: "any",
  })
  async findBankBranches(
    @common.Req() request: Request,
    @common.Param() params: BankWhereUniqueInput
  ): Promise<BankBranch[]> {
    const query = plainToClass(BankBranchFindManyArgs, request.query);
    const results = await this.service.findBankBranches(params.id, {
      ...query,
      select: {
        address: true,

        bank: {
          select: {
            id: true,
          },
        },

        code: true,
        contactPhoneNumber: true,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bankBranches")
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "update",
    possession: "any",
  })
  async connectBankBranches(
    @common.Param() params: BankWhereUniqueInput,
    @common.Body() body: BankBranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bankBranches: {
        connect: body,
      },
    };
    await this.service.updateBank({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bankBranches")
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "update",
    possession: "any",
  })
  async updateBankBranches(
    @common.Param() params: BankWhereUniqueInput,
    @common.Body() body: BankBranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bankBranches: {
        set: body,
      },
    };
    await this.service.updateBank({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bankBranches")
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "update",
    possession: "any",
  })
  async disconnectBankBranches(
    @common.Param() params: BankWhereUniqueInput,
    @common.Body() body: BankBranchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bankBranches: {
        disconnect: body,
      },
    };
    await this.service.updateBank({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/salePayments")
  @ApiNestedQuery(SalePaymentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SalePayment",
    action: "read",
    possession: "any",
  })
  async findSalePayments(
    @common.Req() request: Request,
    @common.Param() params: BankWhereUniqueInput
  ): Promise<SalePayment[]> {
    const query = plainToClass(SalePaymentFindManyArgs, request.query);
    const results = await this.service.findSalePayments(params.id, {
      ...query,
      select: {
        LocalCurrencyRatl: true,

        bank: {
          select: {
            id: true,
          },
        },

        bankBrach: true,

        bankBranch: {
          select: {
            id: true,
          },
        },

        chequeNumber: true,
        createdAt: true,
        creditCardNumber: true,

        currencyId: {
          select: {
            id: true,
          },
        },

        foreignCurrencyRate: true,
        id: true,
        isCheque: true,
        note: true,
        paidValue: true,
        paymentDate: true,

        paymentMethodId: {
          select: {
            id: true,
          },
        },

        quantity: true,

        saleId: {
          select: {
            id: true,
          },
        },

        seqeunce: true,

        tenant: {
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

  @common.Post("/:id/salePayments")
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "update",
    possession: "any",
  })
  async connectSalePayments(
    @common.Param() params: BankWhereUniqueInput,
    @common.Body() body: SalePaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salePayments: {
        connect: body,
      },
    };
    await this.service.updateBank({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/salePayments")
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "update",
    possession: "any",
  })
  async updateSalePayments(
    @common.Param() params: BankWhereUniqueInput,
    @common.Body() body: SalePaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salePayments: {
        set: body,
      },
    };
    await this.service.updateBank({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/salePayments")
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "update",
    possession: "any",
  })
  async disconnectSalePayments(
    @common.Param() params: BankWhereUniqueInput,
    @common.Body() body: SalePaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salePayments: {
        disconnect: body,
      },
    };
    await this.service.updateBank({
      where: params,
      data,
      select: { id: true },
    });
  }
}
