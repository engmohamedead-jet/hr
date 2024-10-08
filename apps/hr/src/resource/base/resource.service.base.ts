/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Resource as PrismaResource,
  ResourceType as PrismaResourceType,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class ResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResourceCountArgs, "select">): Promise<number> {
    return this.prisma.resource.count(args);
  }

  async resources(
    args: Prisma.ResourceFindManyArgs
  ): Promise<PrismaResource[]> {
    return this.prisma.resource.findMany(args);
  }
  async resource(
    args: Prisma.ResourceFindUniqueArgs
  ): Promise<PrismaResource | null> {
    return this.prisma.resource.findUnique(args);
  }
  async createResource(
    args: Prisma.ResourceCreateArgs
  ): Promise<PrismaResource> {
    return this.prisma.resource.create(args);
  }
  async updateResource(
    args: Prisma.ResourceUpdateArgs
  ): Promise<PrismaResource> {
    return this.prisma.resource.update(args);
  }
  async deleteResource(
    args: Prisma.ResourceDeleteArgs
  ): Promise<PrismaResource> {
    return this.prisma.resource.delete(args);
  }

  async getResourceTypeId(
    parentId: string
  ): Promise<PrismaResourceType | null> {
    return this.prisma.resource
      .findUnique({
        where: { id: parentId },
      })
      .resourceTypeId();
  }

  async getTenantId(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.resource
      .findUnique({
        where: { id: parentId },
      })
      .tenantId();
  }
}
