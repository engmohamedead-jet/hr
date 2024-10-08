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
import { ProductUnitService } from "../productUnit.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductUnitCreateInput } from "./ProductUnitCreateInput";
import { ProductUnit } from "./ProductUnit";
import { ProductUnitFindManyArgs } from "./ProductUnitFindManyArgs";
import { ProductUnitWhereUniqueInput } from "./ProductUnitWhereUniqueInput";
import { ProductUnitUpdateInput } from "./ProductUnitUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductUnitControllerBase {
  constructor(
    protected readonly service: ProductUnitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductUnit })
  @nestAccessControl.UseRoles({
    resource: "ProductUnit",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProductUnit(
    @common.Body() data: ProductUnitCreateInput
  ): Promise<ProductUnit> {
    return await this.service.createProductUnit({
      data: {
        ...data,

        compareUnitId: data.compareUnitId
          ? {
              connect: data.compareUnitId,
            }
          : undefined,

        productId: {
          connect: data.productId,
        },

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
            }
          : undefined,

        unitId: data.unitId
          ? {
              connect: data.unitId,
            }
          : undefined,
      },
      select: {
        barcode: true,

        compareUnitId: {
          select: {
            id: true,
          },
        },

        compareUnitQuantity: true,
        costPrice: true,
        createdAt: true,
        id: true,
        isActive: true,
        isCostPriceIncludingTax: true,
        isDefaultForPurchase: true,
        isDefaultForSale: true,
        isSalePriceIncludingTax: true,
        note: true,

        productId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        salePrice: true,

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
  @swagger.ApiOkResponse({ type: [ProductUnit] })
  @ApiNestedQuery(ProductUnitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductUnit",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productUnits(@common.Req() request: Request): Promise<ProductUnit[]> {
    const args = plainToClass(ProductUnitFindManyArgs, request.query);
    return this.service.productUnits({
      ...args,
      select: {
        barcode: true,

        compareUnitId: {
          select: {
            id: true,
          },
        },

        compareUnitQuantity: true,
        costPrice: true,
        createdAt: true,
        id: true,
        isActive: true,
        isCostPriceIncludingTax: true,
        isDefaultForPurchase: true,
        isDefaultForSale: true,
        isSalePriceIncludingTax: true,
        note: true,

        productId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        salePrice: true,

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
  @swagger.ApiOkResponse({ type: ProductUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductUnit",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productUnit(
    @common.Param() params: ProductUnitWhereUniqueInput
  ): Promise<ProductUnit | null> {
    const result = await this.service.productUnit({
      where: params,
      select: {
        barcode: true,

        compareUnitId: {
          select: {
            id: true,
          },
        },

        compareUnitQuantity: true,
        costPrice: true,
        createdAt: true,
        id: true,
        isActive: true,
        isCostPriceIncludingTax: true,
        isDefaultForPurchase: true,
        isDefaultForSale: true,
        isSalePriceIncludingTax: true,
        note: true,

        productId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        salePrice: true,

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
  @swagger.ApiOkResponse({ type: ProductUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductUnit",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProductUnit(
    @common.Param() params: ProductUnitWhereUniqueInput,
    @common.Body() data: ProductUnitUpdateInput
  ): Promise<ProductUnit | null> {
    try {
      return await this.service.updateProductUnit({
        where: params,
        data: {
          ...data,

          compareUnitId: data.compareUnitId
            ? {
                connect: data.compareUnitId,
              }
            : undefined,

          productId: {
            connect: data.productId,
          },

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
              }
            : undefined,

          unitId: data.unitId
            ? {
                connect: data.unitId,
              }
            : undefined,
        },
        select: {
          barcode: true,

          compareUnitId: {
            select: {
              id: true,
            },
          },

          compareUnitQuantity: true,
          costPrice: true,
          createdAt: true,
          id: true,
          isActive: true,
          isCostPriceIncludingTax: true,
          isDefaultForPurchase: true,
          isDefaultForSale: true,
          isSalePriceIncludingTax: true,
          note: true,

          productId: {
            select: {
              id: true,
            },
          },

          quantity: true,
          salePrice: true,

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
  @swagger.ApiOkResponse({ type: ProductUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductUnit",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProductUnit(
    @common.Param() params: ProductUnitWhereUniqueInput
  ): Promise<ProductUnit | null> {
    try {
      return await this.service.deleteProductUnit({
        where: params,
        select: {
          barcode: true,

          compareUnitId: {
            select: {
              id: true,
            },
          },

          compareUnitQuantity: true,
          costPrice: true,
          createdAt: true,
          id: true,
          isActive: true,
          isCostPriceIncludingTax: true,
          isDefaultForPurchase: true,
          isDefaultForSale: true,
          isSalePriceIncludingTax: true,
          note: true,

          productId: {
            select: {
              id: true,
            },
          },

          quantity: true,
          salePrice: true,

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
