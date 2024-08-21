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
import { SaleReturnDetailService } from "../saleReturnDetail.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SaleReturnDetailCreateInput } from "./SaleReturnDetailCreateInput";
import { SaleReturnDetail } from "./SaleReturnDetail";
import { SaleReturnDetailFindManyArgs } from "./SaleReturnDetailFindManyArgs";
import { SaleReturnDetailWhereUniqueInput } from "./SaleReturnDetailWhereUniqueInput";
import { SaleReturnDetailUpdateInput } from "./SaleReturnDetailUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SaleReturnDetailControllerBase {
  constructor(
    protected readonly service: SaleReturnDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SaleReturnDetail })
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSaleReturnDetail(
    @common.Body() data: SaleReturnDetailCreateInput
  ): Promise<SaleReturnDetail> {
    return await this.service.createSaleReturnDetail({
      data: {
        ...data,

        productId: {
          connect: data.productId,
        },

        productVariantId: data.productVariantId
          ? {
              connect: data.productVariantId,
            }
          : undefined,

        salePriceType: data.salePriceType
          ? {
              connect: data.salePriceType,
            }
          : undefined,

        saleReturnId: {
          connect: data.saleReturnId,
        },

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
            }
          : undefined,

        unitId: {
          connect: data.unitId,
        },
      },
      select: {
        barcode: true,
        createdAt: true,
        discount: true,
        discountRate: true,
        id: true,
        isActive: true,
        isError: true,
        isReplicated: true,
        isTaxed: true,
        price: true,
        priceTotal: true,

        productId: {
          select: {
            id: true,
          },
        },

        productSerialNumber: true,

        productVariantId: {
          select: {
            id: true,
          },
        },

        quantity: true,

        salePriceType: {
          select: {
            id: true,
          },
        },

        saleReturnId: {
          select: {
            id: true,
          },
        },

        sequence: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        unitId: {
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
  @swagger.ApiOkResponse({ type: [SaleReturnDetail] })
  @ApiNestedQuery(SaleReturnDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleReturnDetails(
    @common.Req() request: Request
  ): Promise<SaleReturnDetail[]> {
    const args = plainToClass(SaleReturnDetailFindManyArgs, request.query);
    return this.service.saleReturnDetails({
      ...args,
      select: {
        barcode: true,
        createdAt: true,
        discount: true,
        discountRate: true,
        id: true,
        isActive: true,
        isError: true,
        isReplicated: true,
        isTaxed: true,
        price: true,
        priceTotal: true,

        productId: {
          select: {
            id: true,
          },
        },

        productSerialNumber: true,

        productVariantId: {
          select: {
            id: true,
          },
        },

        quantity: true,

        salePriceType: {
          select: {
            id: true,
          },
        },

        saleReturnId: {
          select: {
            id: true,
          },
        },

        sequence: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        unitId: {
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
  @swagger.ApiOkResponse({ type: SaleReturnDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleReturnDetail(
    @common.Param() params: SaleReturnDetailWhereUniqueInput
  ): Promise<SaleReturnDetail | null> {
    const result = await this.service.saleReturnDetail({
      where: params,
      select: {
        barcode: true,
        createdAt: true,
        discount: true,
        discountRate: true,
        id: true,
        isActive: true,
        isError: true,
        isReplicated: true,
        isTaxed: true,
        price: true,
        priceTotal: true,

        productId: {
          select: {
            id: true,
          },
        },

        productSerialNumber: true,

        productVariantId: {
          select: {
            id: true,
          },
        },

        quantity: true,

        salePriceType: {
          select: {
            id: true,
          },
        },

        saleReturnId: {
          select: {
            id: true,
          },
        },

        sequence: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        unitId: {
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
  @swagger.ApiOkResponse({ type: SaleReturnDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSaleReturnDetail(
    @common.Param() params: SaleReturnDetailWhereUniqueInput,
    @common.Body() data: SaleReturnDetailUpdateInput
  ): Promise<SaleReturnDetail | null> {
    try {
      return await this.service.updateSaleReturnDetail({
        where: params,
        data: {
          ...data,

          productId: {
            connect: data.productId,
          },

          productVariantId: data.productVariantId
            ? {
                connect: data.productVariantId,
              }
            : undefined,

          salePriceType: data.salePriceType
            ? {
                connect: data.salePriceType,
              }
            : undefined,

          saleReturnId: {
            connect: data.saleReturnId,
          },

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
              }
            : undefined,

          unitId: {
            connect: data.unitId,
          },
        },
        select: {
          barcode: true,
          createdAt: true,
          discount: true,
          discountRate: true,
          id: true,
          isActive: true,
          isError: true,
          isReplicated: true,
          isTaxed: true,
          price: true,
          priceTotal: true,

          productId: {
            select: {
              id: true,
            },
          },

          productSerialNumber: true,

          productVariantId: {
            select: {
              id: true,
            },
          },

          quantity: true,

          salePriceType: {
            select: {
              id: true,
            },
          },

          saleReturnId: {
            select: {
              id: true,
            },
          },

          sequence: true,

          tenantId: {
            select: {
              id: true,
            },
          },

          unitId: {
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
  @swagger.ApiOkResponse({ type: SaleReturnDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSaleReturnDetail(
    @common.Param() params: SaleReturnDetailWhereUniqueInput
  ): Promise<SaleReturnDetail | null> {
    try {
      return await this.service.deleteSaleReturnDetail({
        where: params,
        select: {
          barcode: true,
          createdAt: true,
          discount: true,
          discountRate: true,
          id: true,
          isActive: true,
          isError: true,
          isReplicated: true,
          isTaxed: true,
          price: true,
          priceTotal: true,

          productId: {
            select: {
              id: true,
            },
          },

          productSerialNumber: true,

          productVariantId: {
            select: {
              id: true,
            },
          },

          quantity: true,

          salePriceType: {
            select: {
              id: true,
            },
          },

          saleReturnId: {
            select: {
              id: true,
            },
          },

          sequence: true,

          tenantId: {
            select: {
              id: true,
            },
          },

          unitId: {
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
