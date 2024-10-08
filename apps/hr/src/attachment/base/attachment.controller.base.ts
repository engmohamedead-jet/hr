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
import { AttachmentService } from "../attachment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AttachmentCreateInput } from "./AttachmentCreateInput";
import { Attachment } from "./Attachment";
import { AttachmentFindManyArgs } from "./AttachmentFindManyArgs";
import { AttachmentWhereUniqueInput } from "./AttachmentWhereUniqueInput";
import { AttachmentUpdateInput } from "./AttachmentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AttachmentControllerBase {
  constructor(
    protected readonly service: AttachmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Attachment })
  @nestAccessControl.UseRoles({
    resource: "Attachment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAttachment(
    @common.Body() data: AttachmentCreateInput
  ): Promise<Attachment> {
    return await this.service.createAttachment({
      data: data,
      select: {
        createdAt: true,
        fileExtension: true,
        filePath: true,
        id: true,
        note: true,
        originalFileName: true,
        tableKeyName: true,
        tableKeyValue: true,
        tableName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Attachment] })
  @ApiNestedQuery(AttachmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Attachment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attachments(@common.Req() request: Request): Promise<Attachment[]> {
    const args = plainToClass(AttachmentFindManyArgs, request.query);
    return this.service.attachments({
      ...args,
      select: {
        createdAt: true,
        fileExtension: true,
        filePath: true,
        id: true,
        note: true,
        originalFileName: true,
        tableKeyName: true,
        tableKeyValue: true,
        tableName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Attachment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attachment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attachment(
    @common.Param() params: AttachmentWhereUniqueInput
  ): Promise<Attachment | null> {
    const result = await this.service.attachment({
      where: params,
      select: {
        createdAt: true,
        fileExtension: true,
        filePath: true,
        id: true,
        note: true,
        originalFileName: true,
        tableKeyName: true,
        tableKeyValue: true,
        tableName: true,
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
  @swagger.ApiOkResponse({ type: Attachment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attachment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAttachment(
    @common.Param() params: AttachmentWhereUniqueInput,
    @common.Body() data: AttachmentUpdateInput
  ): Promise<Attachment | null> {
    try {
      return await this.service.updateAttachment({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fileExtension: true,
          filePath: true,
          id: true,
          note: true,
          originalFileName: true,
          tableKeyName: true,
          tableKeyValue: true,
          tableName: true,
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
  @swagger.ApiOkResponse({ type: Attachment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attachment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAttachment(
    @common.Param() params: AttachmentWhereUniqueInput
  ): Promise<Attachment | null> {
    try {
      return await this.service.deleteAttachment({
        where: params,
        select: {
          createdAt: true,
          fileExtension: true,
          filePath: true,
          id: true,
          note: true,
          originalFileName: true,
          tableKeyName: true,
          tableKeyValue: true,
          tableName: true,
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
