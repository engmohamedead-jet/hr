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
import { PrintTemplateService } from "../printTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PrintTemplateCreateInput } from "./PrintTemplateCreateInput";
import { PrintTemplate } from "./PrintTemplate";
import { PrintTemplateFindManyArgs } from "./PrintTemplateFindManyArgs";
import { PrintTemplateWhereUniqueInput } from "./PrintTemplateWhereUniqueInput";
import { PrintTemplateUpdateInput } from "./PrintTemplateUpdateInput";
import { PrintTemplateContentFindManyArgs } from "../../printTemplateContent/base/PrintTemplateContentFindManyArgs";
import { PrintTemplateContent } from "../../printTemplateContent/base/PrintTemplateContent";
import { PrintTemplateContentWhereUniqueInput } from "../../printTemplateContent/base/PrintTemplateContentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PrintTemplateControllerBase {
  constructor(
    protected readonly service: PrintTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PrintTemplate })
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPrintTemplate(
    @common.Body() data: PrintTemplateCreateInput
  ): Promise<PrintTemplate> {
    return await this.service.createPrintTemplate({
      data: {
        ...data,

        printTemplateGroupId: {
          connect: data.printTemplateGroupId,
        },
      },
      select: {
        Description: true,
        code: true,
        createdAt: true,
        filePath: true,
        id: true,
        isCustomized: true,
        isFavourite: true,
        name: true,
        normalizedName: true,
        note: true,
        paperLayout: true,
        paperSize: true,
        previewImage: true,

        printTemplateGroupId: {
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
  @swagger.ApiOkResponse({ type: [PrintTemplate] })
  @ApiNestedQuery(PrintTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async printTemplates(
    @common.Req() request: Request
  ): Promise<PrintTemplate[]> {
    const args = plainToClass(PrintTemplateFindManyArgs, request.query);
    return this.service.printTemplates({
      ...args,
      select: {
        Description: true,
        code: true,
        createdAt: true,
        filePath: true,
        id: true,
        isCustomized: true,
        isFavourite: true,
        name: true,
        normalizedName: true,
        note: true,
        paperLayout: true,
        paperSize: true,
        previewImage: true,

        printTemplateGroupId: {
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
  @swagger.ApiOkResponse({ type: PrintTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async printTemplate(
    @common.Param() params: PrintTemplateWhereUniqueInput
  ): Promise<PrintTemplate | null> {
    const result = await this.service.printTemplate({
      where: params,
      select: {
        Description: true,
        code: true,
        createdAt: true,
        filePath: true,
        id: true,
        isCustomized: true,
        isFavourite: true,
        name: true,
        normalizedName: true,
        note: true,
        paperLayout: true,
        paperSize: true,
        previewImage: true,

        printTemplateGroupId: {
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
  @swagger.ApiOkResponse({ type: PrintTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePrintTemplate(
    @common.Param() params: PrintTemplateWhereUniqueInput,
    @common.Body() data: PrintTemplateUpdateInput
  ): Promise<PrintTemplate | null> {
    try {
      return await this.service.updatePrintTemplate({
        where: params,
        data: {
          ...data,

          printTemplateGroupId: {
            connect: data.printTemplateGroupId,
          },
        },
        select: {
          Description: true,
          code: true,
          createdAt: true,
          filePath: true,
          id: true,
          isCustomized: true,
          isFavourite: true,
          name: true,
          normalizedName: true,
          note: true,
          paperLayout: true,
          paperSize: true,
          previewImage: true,

          printTemplateGroupId: {
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
  @swagger.ApiOkResponse({ type: PrintTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePrintTemplate(
    @common.Param() params: PrintTemplateWhereUniqueInput
  ): Promise<PrintTemplate | null> {
    try {
      return await this.service.deletePrintTemplate({
        where: params,
        select: {
          Description: true,
          code: true,
          createdAt: true,
          filePath: true,
          id: true,
          isCustomized: true,
          isFavourite: true,
          name: true,
          normalizedName: true,
          note: true,
          paperLayout: true,
          paperSize: true,
          previewImage: true,

          printTemplateGroupId: {
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
  @common.Get("/:id/printTemplateContents")
  @ApiNestedQuery(PrintTemplateContentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateContent",
    action: "read",
    possession: "any",
  })
  async findPrintTemplateContents(
    @common.Req() request: Request,
    @common.Param() params: PrintTemplateWhereUniqueInput
  ): Promise<PrintTemplateContent[]> {
    const query = plainToClass(PrintTemplateContentFindManyArgs, request.query);
    const results = await this.service.findPrintTemplateContents(params.id, {
      ...query,
      select: {
        createdAt: true,
        display: true,
        fieldValue: true,
        id: true,
        key: true,
        note: true,

        printTemplateId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/printTemplateContents")
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "update",
    possession: "any",
  })
  async connectPrintTemplateContents(
    @common.Param() params: PrintTemplateWhereUniqueInput,
    @common.Body() body: PrintTemplateContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      printTemplateContents: {
        connect: body,
      },
    };
    await this.service.updatePrintTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/printTemplateContents")
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "update",
    possession: "any",
  })
  async updatePrintTemplateContents(
    @common.Param() params: PrintTemplateWhereUniqueInput,
    @common.Body() body: PrintTemplateContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      printTemplateContents: {
        set: body,
      },
    };
    await this.service.updatePrintTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/printTemplateContents")
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "update",
    possession: "any",
  })
  async disconnectPrintTemplateContents(
    @common.Param() params: PrintTemplateWhereUniqueInput,
    @common.Body() body: PrintTemplateContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      printTemplateContents: {
        disconnect: body,
      },
    };
    await this.service.updatePrintTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}