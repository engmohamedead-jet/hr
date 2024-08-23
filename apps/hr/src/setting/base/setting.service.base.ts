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
  Setting as PrismaSetting,
  SettingGroup as PrismaSettingGroup,
  Tenant as PrismaTenant,
} from "@prisma/client";

export class SettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SettingCountArgs, "select">): Promise<number> {
    return this.prisma.setting.count(args);
  }

  async settings(args: Prisma.SettingFindManyArgs): Promise<PrismaSetting[]> {
    return this.prisma.setting.findMany(args);
  }
  async setting(
    args: Prisma.SettingFindUniqueArgs
  ): Promise<PrismaSetting | null> {
    return this.prisma.setting.findUnique(args);
  }
  async createSetting(args: Prisma.SettingCreateArgs): Promise<PrismaSetting> {
    return this.prisma.setting.create(args);
  }
  async updateSetting(args: Prisma.SettingUpdateArgs): Promise<PrismaSetting> {
    return this.prisma.setting.update(args);
  }
  async deleteSetting(args: Prisma.SettingDeleteArgs): Promise<PrismaSetting> {
    return this.prisma.setting.delete(args);
  }

  async getSettingGroup(parentId: string): Promise<PrismaSettingGroup | null> {
    return this.prisma.setting
      .findUnique({
        where: { id: parentId },
      })
      .settingGroup();
  }

  async getTenant(parentId: string): Promise<PrismaTenant | null> {
    return this.prisma.setting
      .findUnique({
        where: { id: parentId },
      })
      .tenant();
  }
}